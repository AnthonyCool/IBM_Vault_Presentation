(function () {
  const isPrintMode = window.location.search.includes("print-pdf");

  const typeConfig = {
    root: { radius: 24, color: "#0f62fe" },
    category: { radius: 15, color: "#1f70ff" },
    feature: { radius: 10, color: "#4589ff" },
    example: { radius: 7, color: "#78a9ff" }
  };

  const container = document.getElementById("mindmap-container");
  const panel = document.getElementById("detail-panel");
  const panelTitle = document.getElementById("panel-title");
  const panelSummary = document.getElementById("panel-summary");
  const panelType = document.getElementById("panel-type");

  let width = 0;
  let height = 0;
  let radius = 0;
  let duration = isPrintMode ? 0 : 550;
  let root;
  let tree;
  let svg;
  let graphLayer;
  let selectedNode = null;

  const initialData = structuredClone(window.VAULT_MINDMAP_DATA);

  function setInitialCollapseState(node, depth = 0) {
    if (!node.children) return;

    if (isPrintMode || depth < 1) {
      node.children.forEach((child) => setInitialCollapseState(child, depth + 1));
      return;
    }

    node._children = node.children;
    node.children = null;
  }

  setInitialCollapseState(initialData);

  root = d3.hierarchy(initialData);
  root.x0 = 0;
  root.y0 = 0;

  if (!isPrintMode) {
    panel.classList.add("is-hidden");
  } else {
    panel.classList.add("is-print-hidden");
  }

  function setupDimensions() {
    const bounds = container.getBoundingClientRect();

    if (isPrintMode) {
      width = Math.max(780, Math.floor(bounds.width || 780));
      height = 1040; // tuned to fit A4 portrait render in Reveal print mode
    } else {
      width = Math.max(640, Math.floor(bounds.width));
      height = Math.max(640, Math.floor(bounds.height));
    }

    radius = Math.min(width, height) * (isPrintMode ? 0.42 : 0.44);

    tree = d3.tree().size([2 * Math.PI, radius]).separation((a, b) => {
      const siblingGap = a.parent === b.parent ? 1 : 1.35;
      return (siblingGap + (a.depth > 0 ? 0.08 : 0)) / a.depth;
    });
  }

  function project(angle, distance) {
    const adjusted = angle - Math.PI / 2;
    return [Math.cos(adjusted) * distance, Math.sin(adjusted) * distance];
  }

  function shortTypeLabel(type) {
    return type.charAt(0).toUpperCase() + type.slice(1);
  }

  function updatePanel(data) {
    if (!data || data.type === "root") {
      panel.classList.add("is-hidden");
      return;
    }

    panelTitle.textContent = data.title;
    panelSummary.textContent = data.summary;
    panelType.textContent = shortTypeLabel(data.type);
    panel.classList.remove("is-hidden");
  }

  function hidePanel() {
    panel.classList.add("is-hidden");
  }

  function update(source) {
    const nodes = tree(root).descendants();
    const links = root.links();

    const nodeSelection = graphLayer
      .selectAll("g.node")
      .data(nodes, (d) => d.data.title);

    const nodeEnter = nodeSelection
      .enter()
      .append("g")
      .attr("class", (d) => `node node-${d.data.type}`)
      .attr("transform", () => {
        const [x, y] = project(source.x0 || 0, source.y0 || 0);
        return `translate(${x},${y})`;
      })
      .on("click", function (event, d) {
        event.stopPropagation();

        selectedNode = d;
        highlightBranch(d);
        updatePanel(d.data);

        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else if (d._children) {
          d.children = d._children;
          d._children = null;
        }

        update(d);
      });

    nodeEnter
      .append("circle")
      .attr("r", 1e-6)
      .attr("fill", (d) => typeConfig[d.data.type].color)
      .attr("class", "node-circle");

    nodeEnter
      .append("text")
      .attr("dy", "0.32em")
      .attr("x", (d) => (d.x < Math.PI === !d.children ? 13 : -13))
      .attr("text-anchor", (d) => (d.x < Math.PI === !d.children ? "start" : "end"))
      .attr("transform", (d) => (d.x >= Math.PI ? "rotate(180)" : null))
      .text((d) => d.data.shortTitle)
      .attr("class", "node-label");

    const nodeMerge = nodeEnter.merge(nodeSelection);

    nodeMerge
      .transition()
      .duration(duration)
      .attr("transform", (d) => {
        const [x, y] = project(d.x, d.y);
        return `translate(${x},${y})`;
      });

    nodeMerge
      .select("circle")
      .transition()
      .duration(duration)
      .attr("r", (d) => typeConfig[d.data.type].radius)
      .attr("fill", (d) => typeConfig[d.data.type].color)
      .attr("stroke", (d) => (selectedNode && d === selectedNode ? "#002d9c" : "#ffffff"))
      .attr("stroke-width", (d) => (selectedNode && d === selectedNode ? 3 : 1.5));

    nodeMerge
      .select("text")
      .attr("x", (d) => (d.x < Math.PI === !d.children ? 13 : -13))
      .attr("text-anchor", (d) => (d.x < Math.PI === !d.children ? "start" : "end"))
      .attr("transform", (d) => (d.x >= Math.PI ? "rotate(180)" : null));

    nodeSelection
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", () => {
        const [x, y] = project(source.x, source.y);
        return `translate(${x},${y})`;
      })
      .remove();

    const link = graphLayer.selectAll("path.link").data(links, (d) => d.target.data.title);

    const linkGenerator = d3
      .linkRadial()
      .angle((d) => d.x)
      .radius((d) => d.y);

    const linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", () => {
        const anchor = { x: source.x0 || 0, y: source.y0 || 0 };
        return linkGenerator({ source: anchor, target: anchor });
      });

    linkEnter
      .merge(link)
      .transition()
      .duration(duration)
      .attr("d", (d) => linkGenerator(d))
      .attr("stroke", (d) => (isInSelectedBranch(d.target) ? "#0f62fe" : "#9eb5e8"))
      .attr("stroke-width", (d) => (isInSelectedBranch(d.target) ? 2.5 : 1.4))
      .attr("opacity", (d) => (isInSelectedBranch(d.target) ? 0.95 : 0.75));

    link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", () => {
        const anchor = { x: source.x, y: source.y };
        return linkGenerator({ source: anchor, target: anchor });
      })
      .remove();

    nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  function isInSelectedBranch(node) {
    if (!selectedNode) return false;
    let current = node;
    while (current) {
      if (current === selectedNode) return true;
      current = current.parent;
    }
    return false;
  }

  function highlightBranch(node) {
    selectedNode = node;
  }

  function initializeSvg() {
    setupDimensions();

    svg = d3
      .select("#mindmap-svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `${-width / 2} ${-height / 2} ${width} ${height}`)
      .attr("class", isPrintMode ? "is-print-mode" : "");

    graphLayer = svg.append("g").attr("class", "graph-layer");

    svg.on("click", () => {
      selectedNode = null;
      hidePanel();
      update(root);
    });

    update(root);
  }

  function resetAndRender() {
    if (!svg) return;
    setupDimensions();
    svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `${-width / 2} ${-height / 2} ${width} ${height}`);
    tree.size([2 * Math.PI, radius]);
    update(root);
  }

  initializeSvg();

  window.addEventListener("resize", () => {
    if (isPrintMode) return;
    resetAndRender();
  });
})();

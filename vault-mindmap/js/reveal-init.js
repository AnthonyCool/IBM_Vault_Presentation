(function () {
  const isPrintMode = window.location.search.includes("print-pdf");

  Reveal.initialize({
    hash: false,
    controls: false,
    progress: false,
    center: true,
    transition: "fade",
    transitionSpeed: "default",
    navigationMode: "default",
    embedded: false,
    disableLayout: false,
    keyboard: true,
    touch: !isPrintMode,
    pdfSeparateFragments: false,
    margin: isPrintMode ? 0.02 : 0.06,
    width: "100%",
    height: "100%"
  });
})();

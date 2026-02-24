# IBM Vault Reveal.js Mindmap Presentation

Interactive single-slide Reveal.js presentation for IBM Vault with a D3 radial mindmap.

## What this project includes

- Reveal.js slideshow shell with a professional light visual design.
- Radial D3 mindmap with interactive expand/collapse behavior.
- Node-level detail side panel (title, summary, type).
- Print/PDF mode support through `?print-pdf` with automatic full expansion and no animation.

## Run locally

1. Open a terminal in this folder:
   ```bash
   cd vault-mindmap
   ```
2. Start a local static server (Python 3 example):
   ```bash
   python3 -m http.server 8080
   ```
3. Open in a browser:
   - Interactive mode: `http://localhost:8080`
   - PDF mode: `http://localhost:8080/?print-pdf`

## Export PDF with Reveal

1. Open `http://localhost:8080/?print-pdf`.
2. In the browser print dialog, choose **Save as PDF**.
3. Use portrait orientation and default margins for best A4 results.

## Interaction behavior

- Root (`IBM Vault`) is always visible.
- Categories (level 1) are expanded by default.
- Features (level 2) and examples (level 3) begin collapsed.
- Click any node to toggle branch expansion.
- Click the chart background to clear branch highlight and hide details panel.

## Replace `vault-data.js`

To use your own structure, edit `js/vault-data.js` and replace `window.VAULT_MINDMAP_DATA`.

### Required node fields

Each node should use:

- `title` (string)
- `shortTitle` (string, used for node labels)
- `type` (`root`, `category`, `feature`, or `example`)
- `summary` (string)
- `children` (array, optional)

### Example node format

```js
{
  title: "Node title",
  shortTitle: "Label",
  type: "feature",
  summary: "Short detail text",
  children: [
    {
      title: "Child title",
      shortTitle: "Child",
      type: "example",
      summary: "Child summary"
    }
  ]
}
```

Keep node titles unique per level to preserve D3 key-based transitions.

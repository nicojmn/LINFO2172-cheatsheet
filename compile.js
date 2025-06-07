const fs = require('fs');
const md = require('markdown-it')();
const mermaidPlugin = require('markdown-it-mermaid-plugin');

md.use(mermaidPlugin);

const inputFile = 'cheatsheet.md';
const outputFile = 'out/cheatsheet.html';

let mermaid = md.render(fs.readFileSync(inputFile, 'utf8'));
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Databases cheatsheet</title>
  <style>
    body { font-family: sans-serif; margin: 2em; }
  </style>
  <script type="module">
    import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
    mermaid.initialize({ startOnLoad: true });
  </script>
</head>
<body>
  ${mermaid}
</body>
</html>
`;
if (!fs.existsSync('out')) {
    fs.mkdirSync('out');
}
fs.writeFileSync(outputFile, html, 'utf8');
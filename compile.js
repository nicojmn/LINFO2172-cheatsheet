const {Notebook } = require('crossnote');
const path = require('path');
const fs = require('fs');

const workdir = path.resolve(__dirname);

async function main() {
  const notebook = await Notebook.init({
    notebookPath: workdir,
    config: {
      previewTheme: 'github-light.css',
      mathRenderingOption: 'KaTeX',
      codeBlockTheme: 'github.css',
      printBackground: true,
      enableScriptExecution: true, // <= For running code chunks.

      chromePath: '/path/to/chrome', // <= For puppeteer export and open in browser locally.
      // Recommended to use the absolute path of Chrome executable.
    },
  });

  // Get the markdown engine for a specific note file in your notebook.
  const engine = notebook.getNoteMarkdownEngine('cheatsheet.md');

  // html export
  await engine.htmlExport({ offline: false, runAllCodeChunks: true });

  if (!fs.existsSync(path.join(workdir, 'out'))) {
    fs.mkdirSync(path.join(workdir, 'out'));
  }

  const inp = path.join(workdir, 'cheatsheet.html');
  const out = path.join(`${workdir}/out/cheatsheet.html`);
  fs.renameSync(inp, out);
  console.log(`HTML file generated at: ${out}`);

  return process.exit(0);
}

main();
# LINFO2172-cheatsheet

Cheatsheet for the LINFO2172 course at UCLouvain, covering the main concepts of the course. This isn't a complete summary
and you should of course read the slides and refer to the course material for a complete understanding.

## How to use

This cheatsheet is written in Markdown and uses Mermaid for diagrams. There are several ways to view it

### Locally

1. Install [Node.js](https://nodejs.org/en/download/) if you haven't already.
2. Run `npm install`
3. Run `npm run compile` to generate the HTML file.
4. Open `out/cheatsheet.html` in your browser to view the cheatsheet.

### Docker

A docker image is available on docker hub. You can run it with the following command:

```bash
docker run -p 8080:80 nicojmn/db-cheatsheet
```

The docker image contains the compiled HTML file and a simple web server (nginx) to serve it. 

Then open your browser and go to `http://localhost:8080`.

### Online

You can view the cheatsheet online at [https://databases.nicojmn.be/](https://databases.nicojmn.be/). The server checks
for updates every 15 minutes, and if needed automatically rebuilds the cheatsheet, so you can always see the latest version.

## License

This cheatsheet is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Contributing

Feel free to contribute by creating a pull request or opening an issue. Suggestions and improvements are always welcome !

const { parse } = require("node-html-parser");
const fs = require("fs");

fs.readFile("./997721.html", "utf8", (err, htmlData) => {
  if (err) console.log(err);
  else {
    const html = parse(htmlData);
    const territories = {};
    html
      .querySelector("#map")
      .querySelectorAll("a")
      .forEach((HTMLElement) => {
        const name = HTMLElement.getAttribute("data-name");
        const xpos = HTMLElement.getAttribute("data-x");
        const ypos = HTMLElement.getAttribute("data-y");
        territories[name] = {
          owner: "",
          troops: 3,
          xpos: xpos,
          ypos: ypos,
        };
      });
    fs.writeFile(
      "./actualTerritoryData.json",
      JSON.stringify({ territories }, null, 2),
      "utf8",
      (err) => {
        if (err) console.log(err);
      }
    );
  }
});

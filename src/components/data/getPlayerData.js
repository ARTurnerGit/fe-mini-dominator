const { parse } = require("node-html-parser");
const fs = require("fs");

fs.readFile("./997721.html", "utf8", (err, htmlData) => {
  if (err) console.log(err);
  else {
    const html = parse(htmlData);
    const players = [];

    for (let i = 1; i <= 6; i++) {
      const playerName = html
        .querySelector(`#playerrow-${i} .name`)
        .text.trim();
      const playerColour = "";

      players.push({ playerName, playerColour });
    }

    fs.writeFile(
      "./actualPlayerData.json",
      JSON.stringify({ players }, null, 2),
      "utf8",
      (err) => {
        if (err) console.log(err);
      }
    );
  }
});

const { parse } = require("node-html-parser");
const fs = require("fs");

fs.readFile("./997721.html", "utf8", (err, htmlData) => {
  if (err) console.log(err);
  else {
    const html = parse(htmlData);
    const gameLog = html
      .querySelector("#game-log")
      .querySelectorAll(".chat-message-body")
      .map((HTMLElement) => {
        const processedElement = HTMLElement.text
          .split("\n")
          .map((element) => element.trim())
          .join(" ");
        return processedElement.trim();
      })
      .reverse();

    fs.writeFile(
      "./actualGameLog.json",
      JSON.stringify({ gameLog }, null, 2),
      "utf8",
      (err) => {
        if (err) console.log(err);
      }
    );
  }
});

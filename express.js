const { lerXml } = require("./parser");
const express = require("express");
const app = express();

const port = 3000;

async function main() {
  const productNumber = await lerXml();

  app.get("/", (req, res) => {
    res.send("API funcionando!");
  });

  app.listen(port, () => {
    console.log(`API rodando na porta, ${port}`);
  });
}

main();

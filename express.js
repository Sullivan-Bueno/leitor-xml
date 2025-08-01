const { lerXml } = require("./parser");
const express = require("express");
const app = express();

const port = 3000;

async function main() {
  const nfe = await lerXml("xml.xml");
  const descrição = nfe.productDescription;
  const valor = nfe.productValue;
  const numeroSerie = nfe.productNumber;
  const quantidade = nfe.productQuantity;
  const total = Object.keys(nfe.products).length;
  const nfeNumber = nfe.nfNumber;

  //Nota completa
  app.get("/", (req, res) => {
    res.send(nfe);
  });

  // Produtos
  app.get(`/product/`, (req, res) => {
    const produto = nfe.products;
    res.send(produto);
  });

  app.get(`/product/:id`, (req, res) => {
    const id = req.params.id;
    const produto = nfe.products[id].prod;
    res.send(produto);
  });

  // Numero de Série do Produto
  app.get(`/productnumber/:id`, (req, res) => {
    const id = req.params.id;
    const produto = numeroSerie[id];
    res.send(produto[0]);
  });

  // Quantidade
  app.get("/quantity/:id", (req, res) => {
    const id = req.params.id;
    const produto = quantidade[id][0];
    res.send(produto);
  });

  // Valor
  app.get("/value/:id", (req, res) => {
    const id = req.params.id;
    const produto = valor[id];
    res.send(Number(produto));
  });

  // Descrição
  app.get("/description/:id", (req, res) => {
    const id = req.params.id;
    const produto = descrição[id][0];
    res.send(produto);
  });

  // Total Itens na nota
  app.get("/total", (req, res) => {
    res.send(total);
  });

  // Numero da nota
  app.get("/nfenumber", (req, res) => {
    res.send(Number(nfeNumber[0]));
  });

  app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
  });
}

main();

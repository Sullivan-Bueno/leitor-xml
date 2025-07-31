const fs = require("fs");
const xml2js = require("xml2js");

function lerXml() {
  let xml = null;
  fs.readFile("xml.xml", (err, data) => {
    if (err) {
      console.log("Erro ao ler arquivo:", err);
      return;
    }

    xml2js.parseString(data, (err, result) => {
      if (err) {
        console.log("Deu erro:", err);
        return;
      }
      xml = result;
    });
    const products = xml.nfeProc.NFe[0].infNFe[0].det;
    const productNumber = {};
    const productDescription = {};
    const productQuantity = {};
    const productvalue = {};

    for (let i = 0; i < Object.keys(products).length; i++) {
      productNumber[i] = products[i].prod[0].cProd;
      productDescription[i] = products[i].prod[0].xProd;
      productQuantity[i] = products[i].prod[0].qCom;
      productvalue[i] = products[i].prod[0].vUnCom;
    }

    resolve({
      productNumber,
      productDescription,
      productQuantity,
      productvalue,
      products,
    });
  });
}

module.export = { lerXml };

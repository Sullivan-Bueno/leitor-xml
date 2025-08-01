const fs = require("fs");
const xml2js = require("xml2js");

function lerXml(arquivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(arquivo, (err, data) => {
      let xml = null;
      if (err) {
        reject(console.log("Não foi possível encontrar o arquivo"));
      }

      xml2js.parseString(data, (err, result) => {
        if (err) {
          reject(console.log(err));
        }
        xml = result;
      });

      const nfNumber = xml.nfeProc.NFe[0].infNFe[0].ide[0].nNF;
      const products = xml.nfeProc.NFe[0].infNFe[0].det;
      const productNumber = {};
      const productDescription = {};
      const productQuantity = {};
      const productValue = {};

      for (let i = 0; i < Object.keys(products).length; i++) {
        productNumber[i] = products[i].prod[0].cProd;
        productDescription[i] = products[i].prod[0].xProd;
        productQuantity[i] = products[i].prod[0].qCom;
        productValue[i] = products[i].prod[0].vUnCom;
      }

      resolve({
        products,
        productNumber,
        productDescription,
        productQuantity,
        productValue,
        nfNumber,
      });
    });
  });
}

module.exports = { lerXml };

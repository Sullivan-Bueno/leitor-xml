## LEITOR XML

<div style="display: inline_block"><br>
  <img align="center" alt="Sullivan-js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Sullivan-node.js" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
</div>

Utilizando xml2js fiz este leitor de XML, a necessidade surgiu quando no meu trabalho atual precisei analisar alguns arquivos xml (notas fiscais), pela dificuldade de analisar produto por produto em grande quantidade decidi me desafiar e desenvolver a lógica para poder adquirir essas informações mais rapidamente somente trocando o arquivo xml da pasta.

Eu precisava de que alguma forma as informações do xml fossem pra uma planilha, tentei ler o xml pelo Power automate mas por falta de experiência no PAD, não obtive sucesso.
Então tive uma ideia de fazer uma API com endpoints que me entregassem as informações q eu precisava, e pelo Power automate, acessasse esses endpoints no localhost mesmo e extraísse as informações para passar pra uma planilha.

Ao finalizar tudo testei e deu certo, consegui extrair numero da nota, descrição do produto, quantidade, valor e numero de série do produto que é o que eu precisava.
Pelo power automate, automatizei o processo de fazer uma planilha colocando essas informações em ordem.

Os requisitos pra rodar esse script e acessar as informações do xml, é criar uma pasta e por todos arquivos dentro dela, por o xml junto ao script e nomeá-lo: "xml.xml". Necessário também rodar o npm install, para criar a pasta node_modules antes de rodar o código.
Assim que iniciar o arquivo express.js com node, localhost:3000 estará acessível na sua máquina com todas informações da nota.

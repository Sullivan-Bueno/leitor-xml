## LEITOR XML

Utilizando xml2js fiz este leitor de XML, a necessidade surgiu quando no meu trabalho atual precisei analisar alguns arquivos xml, pela dificuldade de analisar produto por produto em grande quantidade decidi me desafiar e desenvolver a lógica para poder adquirir essas informações mais rapidamente somente trocando o arquivo xml da pasta.

Eu precisava de que alguma forma essas informações fossem pra uma planilha, tentei ler o xml pelo Power automate mas por falta de experiência no PAD, não obtive sucesso.
Então tive uma ideia de fazer uma API com endpoints que me entregassem as informações q eu precisava, e pelo Power automate, acessasse esses endpoints no localhost mesmo e extraísse as informações para passar pra uma planilha.

Ao finalizar tudo testei e deu certo, consegui extrair numero da nota, descrição do produto, quantidade, valor e numero de série do produto que é o que eu precisava.
Pelo power automate, automatizei o processo de fazer uma planilha colocando essas informações em ordem.

Única coisa necessaria pra rodar esse script e acessar as informações do xml, é por o arquivo dentro da pasta do script e nomeá-lo: "xml.xml"
Assim que rodar, localhost:3000 estará acessível na sua máquina com todas informações da nota.

# Por que usar o webpack?

O Webpack permite que um arquivo carregue suas dependencias na ordem correta e de maneira mais fácil. Por que isso é importante? Em uma página HTML, é necessário declarar, por exemplo, quais arquivos "js" e "css" estão sendo carregados. Caso um arquivo "js" seja carregado e ele tenha dependencia de um outro arquivo que ainda não foi carregado, a página apresentará um erro. O Webpack evita que isso aconteça e permite assim a utilização de padrões modernos como ES6 e ES7, além de deixar o código mais facil de manter.

## Por que usar um servidor de desenvolvimento através do Webpack?

Páginas carregadas localmente podem apresentar algumas divergências daquelas feitas por requisições http. Isso porque os arquivos estão locais e não apresentam latência, falhas de requisições e de entregas. Sendo assim, é um universo diferente do real e pode aumentar a chance de erros quando for pra produção.
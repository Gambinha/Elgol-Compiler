1. Criamos o arquivo "ElgolLexer.g4", com as definições léxicas da linguagem Elgol.
2. Utilizamos o Antlr para gerar o analisar léxico em Javascript, executando o comando "antlr4 -Dlanguage=JavaScript util/ElgolLexer.g4", que gerou o arquivo "util/ElgolLexer.js".

Para executar a análise léxica, rode o comando "npm run analisar-lex". O resultado dos tokens será escrito no arquivo "src resultado-analise-lexica.txt".

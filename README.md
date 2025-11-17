1. Criamos o arquivo "ElgolLexer.g4", com as definições léxicas da linguagem Elgol.
2. Utilizamos o Antlr para gerar o analisar léxico em Javascript, executando o comando "antlr4 -Dlanguage=JavaScript util/ElgolLexer.g4 util/ElgolParser.g4", que gerou o arquivo "util/ElgolLexer.js", "util/ElgolParser.js" e o ""util/ElgolParserListener.js".

No arquivo "/src/tests.js" ocorre a execução do analisador para os 5 exemplos disponívels. Basta descomentar o exemplo no Array. E, para rodar, "node src/tests.js".

Obs.: Quando ocorre erro sintático em relação à falta de "PONTO", ou então à falta de "SENAO", o analisador aponta erro apenas no início da próxima linha válida do programa.

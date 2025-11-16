import antlr4 from "antlr4";
import fs from "fs";


import ElgolLexer from "../util/ElgolLexer.js";
import ElgolParser from "../util/ElgolParser.js";


class ElgolSyntaxErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({ line, column, msg });
  }
}

function analisar(codigoFonte, nomeArquivo) {
  // =======================
  // 1) ANÁLISE LÉXICA
  // =======================
  const chars = new antlr4.InputStream(codigoFonte);
  const lexer = new ElgolLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);

  tokens.fill();

  let outputTokens = "";
  const errosLexicos = [];

  for (const token of tokens.tokens) {
    // pula EOF pra não sujar o output
    if (token.type === antlr4.Token.EOF) continue;

    const tokenTypeName =
      ElgolLexer.symbolicNames[token.type] || "UNKNOWN";

    const linha = token.line;
    const coluna = token.column;
    const texto = token.text;

    const outputTokenRow = `Token: ${tokenTypeName.padEnd(12)} | Texto: '${texto}' \t (Linha: ${linha}, Coluna: ${coluna})`;
    outputTokens += outputTokenRow + "\n";


    if (token.type === ElgolLexer.ERRO_LEXICO) {
      errosLexicos.push(
        `Erro léxico em ${nomeArquivo} (linha ${linha}, coluna ${coluna}): texto inválido '${texto}'`
      );
    }
  }


  fs.writeFileSync(
    "src/resultado-analise-lexica.txt",
    outputTokens + "\n",
    "utf-8"
  );

  if (errosLexicos.length > 0) {
    console.error("=== ERROS LÉXICOS ENCONTRADOS ===");
    for (const err of errosLexicos) {
      console.error(err);
    }
    console.error("Análise sintática não foi realizada devido a erro léxico.");
    return;
  }

  // =======================
  // 2) ANÁLISE SINTÁTICA
  // =======================


  tokens.seek(0);

  const parser = new ElgolParser(tokens);
  parser.buildParseTrees = true;


  parser.removeErrorListeners();
  const syntaxErrorListener = new ElgolSyntaxErrorListener();
  parser.addErrorListener(syntaxErrorListener);

  try {

    parser.program();
  } catch (e) {
    console.error("Exceção durante análise sintática:", e.message);
    return;
  }

  if (syntaxErrorListener.errors.length > 0) {
    console.error("=== ERROS SINTÁTICOS ENCONTRADOS ===");
    for (const err of syntaxErrorListener.errors) {
      console.error(
        `Erro sintático em ${nomeArquivo} (linha ${err.line}, coluna ${err.column})`

      );
    }
  } else {
    console.log(
      `Programa '${nomeArquivo}' sintaticamente correto (sem erros léxicos e sintáticos).`
    );
  }
}

function main() {
  const nomeArquivo = process.argv[2];

  if (!nomeArquivo) {
    console.error(
      "ERRO: Por favor, forneça o nome do arquivo Elgol como argumento."
    );
    console.log("Uso: node main.js <nome_do_arquivo.elg>");
    process.exit(1);
  }

  try {
    const codigo = fs.readFileSync(nomeArquivo, "utf-8");
    analisar(codigo, nomeArquivo);
  } catch (err) {
    console.error(`ERRO: Não foi possível ler o arquivo '${nomeArquivo}'.`);
    console.error(err.message);
    process.exit(1);
  }
}

main();

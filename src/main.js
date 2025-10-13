import antlr4 from "antlr4";
import fs from "fs";

import ElgolLexer from "../util/ElgolLexer.js";

function analisar(codigoFonte) {
  const chars = new antlr4.InputStream(codigoFonte);
  const lexer = new ElgolLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);

  tokens.fill();

  let output = "";
  for (const token of tokens.tokens) {
    const tokenTypeName = ElgolLexer.symbolicNames[token.type] || "UNKNOWN";

    const outputTokenRow = `Token: ${tokenTypeName.padEnd(12)} | Texto: '${
      token.text
    }' \t (Linha: ${token.line}, Coluna: ${token.column})`;

    output += outputTokenRow + "\n";
  }
  fs.writeFileSync("src/resultado-analise-lexica.txt", output + "\n");
}

function main() {
  const nomeArquivo = process.argv[2];

  if (!nomeArquivo) {
    console.error(
      "ERRO: Por favor, forneça o nome do arquivo Elgol como argumento."
    );
    console.log("Uso: node analisadorLexico.js <nome_do_arquivo.lg>");
    process.exit(1);
  }

  try {
    const codigo = fs.readFileSync(nomeArquivo, "utf-8");
    analisar(codigo);
  } catch (err) {
    console.error(`ERRO: Não foi possível ler o arquivo '${nomeArquivo}'.`);
    console.error(err.message);
    process.exit(1);
  }
}

main();

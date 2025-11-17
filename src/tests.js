import { execSync } from "child_process";

const arquivos = [
  // "./src/Exemplo1.elg",
  // "./src/Exemplo2.elg",
  // "./src/Exemplo3.elg",
  // "./src/Exemplo4.elg",
  // "./src/Exemplo5.elg",
];

for (const arq of arquivos) {
  console.log("======================================");
  console.log("Analisando:", arq);
  console.log("======================================");
  try {
    const saida = execSync(`node src/main.js "${arq}"`, { encoding: "utf-8" });
    console.log(saida);
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
  console.log("\n");
}
console.log("======================================");

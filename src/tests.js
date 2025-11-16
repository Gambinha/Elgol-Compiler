import { execSync } from "child_process";

const arquivos = [
    "Exemplo1.elg",
    "Exemplo2.elg",
    "Exemplo3.elg",
    "Exemplo4.elg",
    "Exemplo5.elg",
];

for (const arq of arquivos) {
    console.log("======================================");
    console.log("Analisando:", arq);
    console.log("======================================");
    try {
        const saida = execSync(`node main.js "${arq}"`, { encoding: "utf-8" });
        console.log(saida);
    } catch (e) {
        console.log(e.stdout?.toString() || "");
        console.log(e.stderr?.toString() || "");
    }
    console.log("\n");
}
console.log("======================================");
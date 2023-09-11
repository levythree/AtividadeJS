import listaDeAtividades from "./src/lista_de_atividades.js";

import add from "./teste.js";

export default function adicionar() {
    listaDeAtividades.push("oi!");
}

add();

console.log(listaDeAtividades);

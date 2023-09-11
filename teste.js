import listaDeAtividades from "./src/lista_de_atividades.js";

import adicionar from "./teste2.js";

export default function add() {
    listaDeAtividades.push("olá!");
}

adicionar();

console.log(listaDeAtividades);

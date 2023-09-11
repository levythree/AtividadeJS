import listaDeAtividades from "./lista_de_atividades.js";

import listarAtividades from "./listagem_de_atividades.js";

import prompt from "./prompt.js";

export default function removerAtividade() {
    while (true) {
        console.log(`----------------------------------------
          REMOÇÃO DE ATIVIDADE                    
----------------------------------------`);

        listarAtividades();

        console.log(`[${listaDeAtividades.length + 1}] - Voltar
----------------------------------------`);

        const opcao = Number(prompt("Escolha sua opção: "));

        if (opcao === listaDeAtividades.length + 1) { break; }
        else if (opcao % 1 !== 0) { console.log(`----------------------------------------
Por favor, escolha uma opção válida.`); }
        else if (opcao >= 1 && opcao < listaDeAtividades.length + 1) { listaDeAtividades.splice(opcao - 1, 1); }
        else { console.log(`----------------------------------------
Por favor, escolha uma opção válida.`); }
    }
}

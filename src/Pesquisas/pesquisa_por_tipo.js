import prompt from "../prompt.js";

import AtividadeDeLazer from "../../Atividades/AtividadeDeLazer.js";
import AtividadeDeTrabalho from "../../Atividades/AtividadeDeTrabalho.js";
import AtividadeFisica from "../../Atividades/AtividadeFisica.js";

import listaDeAtividades from "../lista_de_atividades.js";

export default function pesquisarPorTipo() {
    while (true) {
        console.log(`----------------------------------------
           PESQUISAR POR TIPO           
----------------------------------------
[1] - Atividade de lazer
[2] - Atividade de trabalho
[3] - Atividade física
[4] - Voltar
----------------------------------------`);

        const opcao = Number(prompt("Escolha uma opção: "));

        if (opcao === 1 || opcao === 2 || opcao === 3) { console.log("----------------------------------------"); }

        if (opcao === 1) {
            listaDeAtividades
                .filter(atividade => atividade.constructor === AtividadeDeLazer)
                .forEach(atividade => console.log(`${atividade}`));
        } else if (opcao === 2) {
            listaDeAtividades
                .filter(atividade => atividade.constructor === AtividadeDeTrabalho)
                .forEach(atividade => console.log(`${atividade}`));
        } else if (opcao === 3) {
            listaDeAtividades
                .filter(atividade => atividade.constructor === AtividadeFisica)
                .forEach(atividade => console.log(`${atividade}`));
        }
        
        else if (opcao === 4) { break; }
        else { console.log(`----------------------------------------
Por favor, escolhe uma opção válida.`); }
    }   
}

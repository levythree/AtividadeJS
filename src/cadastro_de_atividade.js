import prompt from "./prompt.js";

import AtividadeDeLazer from "../Atividades/AtividadeDeLazer.js";
import AtividadeDeTrabalho from "../Atividades/AtividadeDeTrabalho.js";
import AtividadeFisica from "../Atividades/AtividadeFisica.js";

import listaDeAtividades from "./lista_de_atividades.js";

export default function cadastrarAtividade() {
    while (true) {
        console.log(`----------------------------------------
                CADASTRO                
----------------------------------------
[1] - Atividade de lazer
[2] - Atividade de trabalho
[3] - Atividade física
[4] - Voltar
----------------------------------------`);

        const opcao = Number(prompt("Escolha uma opção: "));

        if (opcao === 4) { break; }

        else if (opcao !== 1 && opcao !== 2 && opcao !== 3) {
            console.log(`----------------------------------------
Por favor, escolha uma opção válida.`);
        }

        else {
            console.log("----------------------------------------");

            const descricao = prompt("Informe a descrição da atividade: ");
            const duracao = Number(prompt("Informe a duração da atividade (em minutos): "));
            const dataDeRealizacao = prompt("Informe a data de realização da atividade (dd/MM/yyyy): ");
            const satisfacao = Number(prompt("Informe a satisfação da atividade (1 para satisfatória, -1 para não satisfatória): "));
    
            try {
                if (opcao === 1) {
                    listaDeAtividades.push(new AtividadeDeLazer(descricao, duracao, dataDeRealizacao, satisfacao)); 
                }
                
                else if (opcao === 2) {
                    const dificuldade = prompt("Informe a dificuldade da atividade: ");
        
                    listaDeAtividades.push(new AtividadeDeTrabalho(descricao, duracao, dataDeRealizacao, satisfacao, dificuldade));
                }
        
                else if (opcao === 3) {
                    const intensidade = prompt("Informe a intensidade da atividade: ");
        
                    listaDeAtividades.push(new AtividadeFisica(descricao, duracao, dataDeRealizacao, satisfacao, intensidade));
                }
            }

            catch (e) {
                console.log(`----------------------------------------
${e}`);
            }
        }
    }
}

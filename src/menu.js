import prompt from "./prompt.js";

import cadastrarAtividade from "./cadastro_de_atividade.js";
import listarAtividades from "./listagem_de_atividades.js";
import pesquisarAtividades from "./pesquisa_de_atividade.js";
import removerAtividade from "./remocao_de_atividade.js";

export default function menu() {
    while (true) {
        console.log(`----------------------------------------
                  MENU                  
----------------------------------------
[1] - Cadastrar atividade
[2] - Listar todas as atividades
[3] - Pesquisar atividade
[4] - Atualizar atividade
[5] - Remover atividade
[6] - Sair
----------------------------------------`);
    
        const opcao = Number(prompt("Escolha uma opção: "));
    
        if (opcao === 1) { cadastrarAtividade(); }
        else if (opcao === 2) {
            console.log(`----------------------------------------
         ATIVIDADES CADASTRADAS          
----------------------------------------`)

            listarAtividades();
        }
        else if (opcao === 3) { pesquisarAtividades(); }
        else if (opcao === 4) { }
        else if (opcao === 5) { removerAtividade(); }
        else if (opcao === 6) { break; }
        else { console.log(`----------------------------------------
Por favor, escolha uma opção válida.`); }
    }
}

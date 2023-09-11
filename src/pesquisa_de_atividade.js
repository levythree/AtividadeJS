import prompt from "./prompt.js";

import pesquisarPorTipo from "./Pesquisas/pesquisa_por_tipo.js";
import pesquisarPorGasto from "./Pesquisas/pesquisa_por_gasto.js";

export default function pesquisarAtividades() {
    while (true) {
        console.log(`----------------------------------------
                PESQUISA                
----------------------------------------
[1] - Pesquisar por tipo
[2] - Pesquisar por data
[3] - Top 3 atividades com maior gasto de energia
[4] - Voltar
----------------------------------------`);

        const opcao = Number(prompt("Escolha uma opção: "));

        if (opcao === 1) { pesquisarPorTipo(); }
        else if (opcao === 2) { }
        else if (opcao === 3) { pesquisarPorGasto(); }
        else if (opcao === 4) { break; }
        else { console.log(`----------------------------------------
Por favor, escolha uma opção válida.`); }
    }
}

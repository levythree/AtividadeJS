import listaDeAtividades from "../lista_de_atividades.js";

export default function pesquisarPorGasto() {
    console.log("----------------------------------------");

    [...listaDeAtividades]
        .sort((a, b) => a.gastoDeEnergia - b.gastoDeEnergia)
        .reverse()
        .slice(0, 3)
        .forEach(atividade => console.log(`${atividade}`));
}

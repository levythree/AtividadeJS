import listaDeAtividades from "./lista_de_atividades.js";

export default function listarAtividades() {
    for (let i = 0; i < listaDeAtividades.length; i++) {
        console.log(`[${i + 1}] - ${listaDeAtividades[i]}`);
    }
}

import Atividade from "./Atividade.js";

export default class AtividadeFisica extends Atividade {
    #intensidade;

    constructor(descricao, duracao, dataDeRealizacao, satisfacao, intensidade) {
        super(descricao, duracao, dataDeRealizacao, satisfacao);

        this.intensidade = intensidade;
    }

    get intensidade() { return this.#intensidade; }

    set intensidade(intensidade) {
        if (intensidade === 2 || intensidade === 3 || intensidade === 4) { this.#intensidade = intensidade; }
        else { throw new Error("A intensidade precisa ser 2, 3 OU 4."); }
    }

    get gastoDeEnergia() { return this._duracao * this.#intensidade * 3; }

    toString() {
        return `${super.toString()} | Intensidade: ${this.#intensidade}`
    }
}

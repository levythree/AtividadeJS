import Atividade from "./Atividade.js";

export default class AtividadeDeTrabalho extends Atividade {
    #dificuldade;

    constructor(descricao, duracao, dataDeRealizacao, satisfacao, dificuldade) {
        super(descricao, duracao, dataDeRealizacao, satisfacao);

        this.dificuldade = dificuldade;
    }

    get dificuldade() { return this.#dificuldade; }

    set dificuldade(dificuldade) {
        if (dificuldade === 1 || dificuldade === 2 || dificuldade === 3) { this.#dificuldade = dificuldade; }
        else { throw new Error("A dificuldade precisa ser 1, 2 OU 3."); }
    }

    get gastoDeEnergia() { return this._duracao * this.#dificuldade * 2; }

    toString() {
        return `${super.toString()} | Dificuldade: ${this.#dificuldade}`;
    }
}

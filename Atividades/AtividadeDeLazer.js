import Atividade from "./Atividade.js";

export default class AtividadeDeLazer extends Atividade {
    constructor(descricao, duracao, dataDeRealizacao, satisfacao) {
        super(descricao, duracao, dataDeRealizacao, satisfacao);
    }

    get gastoDeEnergia() { return this._duracao; }

    toString() { return super.toString(); }
}

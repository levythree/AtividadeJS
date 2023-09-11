export default class Atividade {
    _descricao;
    _duracao;
    _dataDeRealizacao;
    _satisfacao;
    
    constructor(descricao, duracao, dataDeRealizacao, satisfacao) {
        if (this.constructor === Atividade) {
            throw new Error(`A classe abstrata "Atividade" não pode ser instanciada.`);
        }

        this.descricao = descricao;
        this.duracao = duracao;
        this.dataDeRealizacao = dataDeRealizacao;
        this.satisfacao = satisfacao;
    }

    get descricao() { return this._descricao; }

    set descricao(descricao) { this._descricao = descricao; }

    get duracao() { return this._duracao; }

    set duracao(duracao) {
        if (duracao > 0 && duracao % 0 === 1) { this._duracao = duracao; }
        else { throw new Error("A duração precisa ser um NÚMERO INTEIRO MAIOR QUE 0."); }
    }

    get dataDeRealizacao() { return this._dataDeRealizacao; }

    set dataDeRealizacao(dataDeRealizacao) { this._dataDeRealizacao = dataDeRealizacao; }

    get satisfacao() { return this._satisfacao; }

    set satisfacao(satisfacao) {
        if (satisfacao === 1 || satisfacao === -1) { this._satisfacao = satisfacao; }
        else { throw new Error("A satisfação precisa ser 1 OU -1."); }
    }

    get gastoDeEnergia() { }

    get bemEstar() { return (this.gastoDeEnergia * this._satisfacao) / 360 }

    toString() {
        return `Descrição: ${this._descricao} | Duração: ${this._duracao} | Data de realização: ${this._dataDeRealizacao} | Satisfação: ${this._satisfacao} | Gasto de energia: ${this.gastoDeEnergia} | Bem-estar: ${this.bemEstar}`;
    }
}

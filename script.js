let emprestimo = {
    valor: 0,
    parcelas: 0,

    calcularParcelas: function() {
        return (this.valor / this.parcelas).toFixed(2);
    },

    exibirParcelas: function() {
        for (let i = 1; i <= this.parcelas; i++) {
            console.log(`Parcela ${i}: R$ ${this.calcularParcelas()}`);
        }
    }
};

function iniciarSimulacao() {
    emprestimo.valor = Number(prompt("Digite o valor do empréstimo:"));
    emprestimo.parcelas = Number(prompt("Digite o número de parcelas:"));

    emprestimo.exibirParcelas();
}

iniciarSimulacao();
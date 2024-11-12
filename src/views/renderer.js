function fechar() {
    api.fecharJanela()
}

function clientes() {
    api.janelaClientes()
}

function fornecedores() {
    api.janelaFornecedores()
}

function produtos() {
    api.janelaProdutos()
}

function relatorios() {
    api.janelaRelatorios()
}

//Inserção da data de rodapé
function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return data.toLocaleDateString('pt-BR', options)
}
document.getElementById('dataAtual').innerHTML = obterData()

/* Processo de renderização - clientes.html */

//Array usado nos métodos para manipulação da estrutura de dados
let arrayCliente = []
//CRUD Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Passo 1 - Slide (capturar os dados dos inputs do form)
let formCliente = document.getElementById('frmClient')
let nomeCliente = document.getElementById('inputNameClient')
let foneCliente = document.getElementById('inputPhoneClient')
let emailCliente = document.getElementById('inputEmailClient')

//Evento associado ao botão adicionar (quando o botão for pressionado)
formCliente.addEventListener('submit', async (event) => {
    event.preventDefault()  //Evitar o comportamento padrão de envio em um form
    //Teste importante(fluxo de dados) console.log(nomeCliente.value, foneCliente.value, emailCliente.value)

    //Passo 2 - Slide (envio das informações para o main)
    //Criar um objeto 
    const cliente = {
        nomeCli: nomeCliente.value,
        foneCli: foneCliente.value,
        emailCli: emailCliente.value
    }
    api.novoCliente(cliente)
})
//Fim CRUD Creat <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//CRUD READ ------------------------------------------->
function buscarCliente(){
    //PASSO 1 (slides)
    let cliNome = document.getElementById('searchClient').value
    console.log(cliNome) //teste 1
    //PASSO 2
    api.buscarCliente(cliNome)
    //Passo 5 - Recebimento dos dados
    api.renderizarCliente((event, dadosCliente) => {
        //Teste de recebimento dos dados do cliente
        console.log(dadosCliente)
        
        //Passo 6 - renderização dos dados do cliente no formulário
        const clienteRenderizado = JSON.parse(dadosCliente)
        arrayCliente = clienteRenderizado
        console.log(arrayCliente) //teste para entendimento da lógica
        //Percorrer o array de clientes, extrair os dados e setar (preencher) os campos do formulário
        arrayCliente.forEach((c) => {
            document.getElementById('inputNameClient').value = c.nomeCliente
            document.getElementById('inputPhoneClient').value = c.foneCliente
            document.getElementById('inputEmailClient').value = c.emailCliente
            document.getElementById('inputClient').value = c._id
        })
    })
}

//<-----------------------------------------------------



//Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args) => {
    document.getElementById('inputNameClient').value = ""
    document.getElementById('inputPhoneClient').value = ""
    document.getElementById('inputEmailClient').value = ""
})
//Fim - RESET FORM <<<<<<<<<<<<<<<<<<<<

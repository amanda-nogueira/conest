/* Processo de renderização - clientes.html */

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

//Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args) => {
    document.getElementById('inputNameClient').value = ""
    document.getElementById('inputPhoneClient').value = ""
    document.getElementById('inputEmailClient').value = ""
})
//Fim - RESET FORM <<<<<<<<<<<<<<<<<<<<

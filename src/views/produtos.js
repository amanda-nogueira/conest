/* Processo de renderização - produtos.html */

//CRUD Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Passo 1 - Slide (capturar os dados dos inputs do form)
let formProduto = document.getElementById('frmProduct')
let nomeProduto = document.getElementById('inputNameProduct')
let codProduto = document.getElementById('inputBarProduct')
let precoProduto = document.getElementById('inputPrecoProduct')

//Evento associado ao botão adicionar (quando o botão for pressionado)
formProduto.addEventListener('submit', async (event) => {
    event.preventDefault()  //Evitar o comportamento padrão de envio em um form
    //Teste importante(fluxo de dados) console.log(nomeCliente.value, foneCliente.value, emailCliente.value)

    //Passo 2 - Slide (envio das informações para o main)
    //Criar um objeto 
    const produto = {
        nomePro: nomeProduto.value,
        codPro: codProduto.value,
        precoPro: precoProduto.value
    }
    api.novoProduto(produto)
})
//Fim CRUD Creat <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args) => {
    document.getElementById('inputNameProduct').value = ""
    document.getElementById('inputBarProduct').value = ""
    document.getElementById('inputPrecoProduct').value = ""
})
//Fim - RESET FORM <<<<<<<<<<<<<<<<<<<<

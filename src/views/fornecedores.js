/* Processo de renderização - fornecedores.html */

//CRUD Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Passo 1 - Slide (capturar os dados dos inputs do form)
let formFornecedor = document.getElementById('frmSupplier')
let nomeFornecedor = document.getElementById('inputNameSupplier')
let foneFornecedor = document.getElementById('inputPhoneSupplier')
let siteFornecedor = document.getElementById('inputSiteSupplier')

//Evento associado ao botão adicionar (quando o botão for pressionado)
formFornecedor.addEventListener('submit', async (event) => {
    event.preventDefault()  //Evitar o comportamento padrão de envio em um form
    //Teste importante(fluxo de dados) console.log(nomeFornecedor.value, foneFornecedor.value, siteFornecedor.value)

    //Passo 2 - Slide (envio das informações para o main)
    //Criar um objeto 
    const fornecedor = {
        nomeForn: nomeFornecedor.value,
        foneForn: foneFornecedor.value,
        siteForn: siteFornecedor.value
    }
    api.novoFornecedor(fornecedor)
})
//Fim CRUD Creat <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args) => {
    document.getElementById('inputNameSupplier').value = ""
    document.getElementById('inputPhoneSupplier').value = ""
    document.getElementById('inputSiteSupplier').value = ""
})
//Fim - RESET FORM <<<<<<<<<<<<<<<<<<<<

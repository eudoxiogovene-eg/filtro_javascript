

const dados=[
    {nome:'eudoxio',sobrenome:'govene',idade:22,pais:'brasil',cidade:'sao paulo'},
    {nome:'sousa',sobrenome:'rafael',idade:25,pais:'estados unidos',cidade:'nova york'},
    {nome:'eugenio',sobrenome:'luxo',idade:27,pais:'alemanha',cidade:'berlim'},
    {nome:'cipriano',sobrenome:'sitoe',idade:24,pais:'franca',cidade:'paris'},
    {nome:'custodio',sobrenome:'cossa',idade:52,pais:'mocambique',cidade:'xai-xai'},
    {nome:'fedula',sobrenome:'djeje',idade:24,pais:'italia',cidade:'roma'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
]

let arrayDados=dados

const searchInput=document.getElementById('searchInput')

const listagem=document.getElementById('listagem')

dados.map((dado)=>{
    listagem.innerHTML+=`
    <tr>
        <td>${dado.nome}</td>
        <td>${dado.sobrenome}</td>
        <td>${dado.pais}</td>
        <td>${dado.cidade}</td>
        <td>${dado.idade}</td>
    </tr>
    `
})

// let dados2
// dados.map((dadosgeral)=>{
//     let contentGeral =dadosgeral.nome + dadosgeral.sobrenome+dadosgeral.idade+dadosgeral.pais+dadosgeral.cidade
//     dadosgeral.contentGeral=contentGeral
//     console.log(dadosgeral)
//     //contentGeral=...dadosgeral
//     dados2=[...dadosgeral]
//     console.log(dados2)
// })



searchInput.addEventListener('keyup',()=>{
  let  dadosFiltrados=document.getElementById('searchInput').value
  
    if(!dadosFiltrados){
        arrayDados=dados
        
    }else{
        arrayDados=dados.filter((item)=>{
         
            if(item.nome.toLowerCase().indexOf(dadosFiltrados.toLowerCase())>-1){
                console.log(item)
                return true
            }else{
                return false
            }
        })
    }
   
     
    listagem.innerHTML=''
    arrayDados.map((dado)=>{
        listagem.innerHTML+=`
        <tr>
            <td>${dado.nome}</td>
            <td>${dado.sobrenome}</td>
            <td>${dado.pais}</td>
            <td>${dado.cidade}</td>
            <td>${dado.idade}</td>
        </tr>
        `
    })
})

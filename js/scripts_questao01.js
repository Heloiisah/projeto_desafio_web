//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoal')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO 
formDados.addEventListener('submit', (evt)=>{
       evt.preventDefault()

       const objFormDados = new FormData(formDados)

       let n1= objFormDados.get('num1')
       let n2 = objFormDados.get('num2')
       let n3 = objFormDados.get('num3')

let media = parseFloat ((n1 + n2 + n3))/ parseFloat

divResultado


divResultado.innerHTML = situacaoIdade

     let situacaoIdade = ''

     if (idade >= 18 ){
         situacaoIdade = `${nome}, vc é maior de idade`
     }else{ 
        situacaoIdade = `${nome}, vc é menor de idade`
     }

     divResultado.innerHTML = situacaoIdade

})
    

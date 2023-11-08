function enserir(num){
    var numero = window.document.getElementById('res').innerHTML;
    window.document.getElementById('res').innerHTML = numero + num;
}
function limpar()
{
    var limpar = window.document.getElementById('res').innerText = ""
}
 function deletar(){
    var deletar = window.document.getElementById('res').innerHTML;
    window.document.getElementById('res'). innerHTML = deletar.substring(0, deletar.length -1)
 }
 function resolver(){
 var resultado = document.getElementById('res').innerHTML;
 if(resultado)
 {
    document.getElementById('res').innerHTML = eval(resultado)
 } else
 {
    document.getElementById('res').innerHTML = 'NULL...'
 }
}
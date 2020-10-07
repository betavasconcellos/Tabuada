function tabuada(){
    var stab = document.getElementById('stab')
var res = document.getElementById('res')
var tnum = document.getElementById('tnum')
var num = Number(tnum.value)
var c=1
stab.innerHTML = ''
if (tnum.value == '')
{
alert('Número Inválido')
}
else {
while(c<=10){
    var item = document.createElement('option')
    var resultado = num * c
   item.text = `${num} x ${c} = ${resultado}`
   stab.appendChild(item)
c++    
}
}
}
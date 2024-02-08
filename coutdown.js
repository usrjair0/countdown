const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const specifday = "12 june 2024"

function countdown() {
    const datalancamento = new Date(specifday)
    const hoje = new Date()

    const segtotal = (datalancamento - hoje)/1000; //como o js entende em ms preciso dividir por mil
    //para que o resultado seja dado em segundos

    const finaldias = Math.floor(segtotal /60 /60 /24);
    //o math.floor pega apenas o numero inteiro resultante dessa divisao
    const finalhoras = Math.floor(segtotal /60 /60) % 24; 
    //o % 24 é como se ele tivesse pegando oq resta da divisao por 24 e escrevendo isso. 
    //exemplo: se o math.floor(segtotal /60/ 60) der 25 ele vai pegar o resto da divisao por 
    //24 que é 1
    const finalminutos = Math.floor(segtotal /60) % 60;
    const finalsegundos = Math.floor(segtotal) % 60;

    dia.innerHTML = finaldias
    hora.innerHTML = formato(finalhoras)
    minuto.innerHTML = formato(finalminutos)
    segundo.innerHTML = formato(finalsegundos)
}
function formato(tempo) {
    return tempo < 10? `0${tempo}` : tempo; //esses dois pontos seriam um "se não"
}

countdown(); // aqui estou chamando a função e executando-a
setInterval(countdown, 1000) //estou dizendo o intervalo que será 1 segundo ou 1000 ms
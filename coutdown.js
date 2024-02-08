const dia = window.document.getElementById('dia');
const hora = window.document.getElementById('hora');
const minuto = window.document.getElementById('minuto');
const segundo = window.document.getElementById('segundo');

const theDay = '12 june 2024'
const countdown = () =>{

    const dataLancamento = new Date(theDay)
    const hoje = new Date()

    const segTotal = (dataLancamento - hoje)/1000;
    const finalDias = Math.floor(segTotal/60/60/24);
    console.log(finalDias);
    const finalHoras = Math.floor(segTotal/60/60)%24;
    console.log(finalHoras);
    const finalMinutos = Math.floor(segTotal/60)%60;
    console.log(finalMinutos);
    const finalSegundos = Math.floor(segTotal)%60;
    console.log(finalSegundos);

    const formato = (tempo) =>{
        return tempo <10 ? `0${tempo}`: tempo ;
    }

    dia.innerHTML = finalDias;
    hora.innerHTML= formato(finalHoras);
    minuto.innerHTML = formato(finalMinutos);
    segundo.innerHTML= formato(finalSegundos); 
}

setInterval(countdown,1000)
countdown();





































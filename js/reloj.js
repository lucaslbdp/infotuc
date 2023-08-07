const $tiempo = document.querySelector(".tiempo"),
$fecha = document.querySelector(".fecha");

function relojDigital(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth()+1,
    año = f.getFullYear(),
    diaSemana= f.getDay();

    dia= ("0"+dia).slice(-2);
    mes=("0"+mes).slice(-2);

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML= timeString;

    let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${showSemana} ${dia}-${mes}-${año}`
}
setInterval(()=>{
    relojDigital()
}, 1000);
//capturar los ingresos numericos - variable
//capturo los o el ingrso de operacion - variable
//ruta del DOM del resultado o visor
// eventos tenemos en todos los botones

const display = document.getElementById("resultado").textContent;
let numero1 = parseInt(document.querySelector("#btn_1").innerHTML);
let numero2 = parseInt(document.querySelector("#btn_2").innerHTML);

let operacion = document.querySelector("btn_sum").innerHTML;


const botonesMenu = document.querySelectorAll(".btn-group");
botonesMenu.forEach(btn => {
    btn.addEventListener("click", e)
})

function operacion(op, numero1, numero2) {
    if (op == "+") {
        return numero1 + numero2
    };
}

display.textContent = operaciones(operacion, numero1, numero2)
console.log(display);

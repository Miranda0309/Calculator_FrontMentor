const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tipCustom = document.querySelector(".tip-custom");
const tips = document.querySelectorAll(".tips");
const resetBtn = document.querySelector(".reset");

function resetFun() {
    // Restablecer los valores de entrada
    document.getElementById("bill-input").value = ""; 
    document.getElementById("people-input").value = "";
    document.getElementById("tip-custom").value = "";

    // Restablecer estilos de error
    let errorText = document.querySelector(".error");
    if (errorText) errorText.style.display = "none";
    document.getElementById("peopleInput").style.border = "none";

    // Quitar selección de los botones de propina
    let tips = document.querySelectorAll(".tip-btn");
    tips.forEach(btn => btn.classList.remove("active-tip"));

    // Restablecer valores en pantalla
    document.getElementById("tipAmount").innerText = "$0.00";
    document.getElementById("totalAmount").innerText = "$0.00";

    // Resetear variables
    billValue = 0;
    peopleValue = 0;
    tipValue = 0;
}

// Escuchar el evento de click en el botón Reset
resetBtn.addEventListener("click", resetFun);



billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
    val.addEventListener("click" , handleClick);
});
tipCustom.addEventListener("input", tipInputFun);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billvalue = 0.0;
let peoplevalue = 1;
let tipValue = 0.15;

function billInputFun(){
    billvalue = parseFloat(billInput.value);
   calculateTip()
}

function peopleInputFun(){
    peoplevalue = parseFloat(peopleInput.value);
    if (peoplevalue <= 0 || isNaN(peoplevalue)) {
        document.querySelector(".error").style.display = "block";
        peopleInput.style.border = "2px solid red"; // Marcar el input con error
    } else {
        document.querySelector(".error").style.display = "none";
        peopleInput.style.border = "none"; // Restaurar el borde
        calculateTip();
    }
}

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value /100);
    if (!isNaN(tipValue) && tipValue > 0) {
        tips.forEach(function (val) {
            val.classList.remove("active-tip"); // Desactivar botones de propina
        });
        calculateTip();
    }
}

function handleClick(event){
    tips.forEach(function (val) {
        val.classList.remove("active-tip");
        if (event.target.innerHTML === val.innerHTML){
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML.replace('%', ''))/100
        }
    });
    console.log(tipValue);
}

function calculateTip(){
    if (peoplevalue >= 1){
        let tipAmount = (billvalue * tipValue) / peoplevalue;
        let total = (billvalue * (1 + tipValue)) / peoplevalue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}    
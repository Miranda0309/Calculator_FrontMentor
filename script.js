const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById(".tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tipCustom = document.querySelector(".tip-custom");

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
    calculateTip()
}

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value /100);

    tips.forEach(function (val) {
        val.classList.remove("active-tip");
    });
    calculateTip();
}

function handleClick(event){
    tips.forEach(function (val) {
        val.classlist.remove("active-tip");
        if (event.target.innerHTML === val.innerHTML){
            val.classlist.add("active-tip");
            tipValue = parseFloat(val.innerHTML)/100
        }
    });
    console.log(tipValue);
}

function calculateTip(){
    if (peoplevalue >= 1){
        let tipAmount = (billvalue * tipValue) / peoplevalue;
        let total = (billvalue + tipAmount) / peoplevalue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}    
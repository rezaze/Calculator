const theNumbers = document.querySelectorAll("#numbers");
const showText = document.getElementById("show");
const btnDeel = document.getElementById("delAll")
const btnOpertion = document.querySelectorAll("#op");
const showAn = document.getElementById("calc");
const float = document.getElementById("fl");
const Back = document.getElementById("del");

let opertion;
let number1;
let number2;
let setPoint = false;
let number1Set = false;
let answerd = false;
let setNanResult;
let result;
let arrayOper = [];

const showNumber = (e) => {
    if (showText.innerHTML == "0.0") {
        showText.innerHTML = theNumbers[e].innerHTML;
    } else {
        showText.innerText += theNumbers[e].innerHTML;
    }

}

const showOpertion = (e) => {
    2
    opertion = btnOpertion[e].innerText;
    arrayOper = showText.innerHTML.split("");
    if (!showText.innerHTML.includes("/")) {
        if (showText.innerHTML === "0.0" && !showText.innerHTML.includes("-") && !showText.innerHTML.includes("+") && !showText.innerHTML.includes("*")) {
            showText.innerHTML = "0";
        } else {
            showText.innerHTML += opertion;

        }
    }


    if (!number1Set) {
        number1 = +(showText.innerText);
        number1Set = true;
    }

}

const delBack = () => {
    let len = showText.innerHTML.length;
    if (len > 1) {
        showText.innerHTML = showText.innerHTML.slice(0, len - 1);
        console.log(len);

    } else {
        showText.innerHTML = "0.0";
        setPoint = false;
        setPoint = false;
        answerd = false;
    }

}


const delEveryShow = () => {
    number1Set = false;
    number1 = 0;
    number2 = 0;
    showText.innerHTML = "0.0";
    setPoint = false;
    answerd = false;
}

const theAnswer = e =>
    showText.innerHTML =
    parseFloat(eval(showText.innerHTML).toFixed(2));



float.addEventListener("click", () => {
    if (setPoint == false) {
        showText.innerText += '.';
        setPoint = true;
    }
});

showAn.addEventListener("click", theAnswer);

btnDeel.addEventListener("click", delEveryShow);

Back.addEventListener("click", delBack);
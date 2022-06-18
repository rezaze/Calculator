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


theNumbers.forEach(e => {
    e.addEventListener("click", event => {
        if (showText.innerHTML == "0.0") {
            showText.innerHTML = e.innerHTML;
        } else {
            showText.innerText += e.innerHTML;
        }
    })
})

const showOpertion = (e) => {

    opertion = btnOpertion[e].innerText;
    if (!showText.innerHTML.includes("/") && !showText.innerHTML.includes("-") && !showText.innerHTML.includes("+") && !showText.innerHTML.includes("*")) {
        if (showText.innerHTML === "0.0") {
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
        if (showText.innerHTML === "0.0") {
            showText.innerHTML = "0.";
        } else {
            showText.innerText += '.';
        }

        setPoint = true;
    }
});

showAn.addEventListener("click", theAnswer);

btnDeel.addEventListener("click", delEveryShow);

Back.addEventListener("click", delBack);
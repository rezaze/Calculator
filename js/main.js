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

const showNumber = (e) => {
    if (showText.innerHTML == "0.0") {
        showText.innerHTML = theNumbers[e].innerHTML;
    } else {
        showText.innerText += theNumbers[e].innerHTML;
    }

}

const showOpertion = (e) => {
    opertion = btnOpertion[e].innerText;
    console.log('opertion: ');
    console.log(opertion);

    if (!number1Set) {
        number1 = parseFloat(showText.innerText);
        number1Set = true;
    }

    showText.innerHTML = "";
    //console.log(opertion + number1);
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

const theAnswer = () => {

    number2 = parseFloat(showText.innerHTML);

    setNanResult = isNaN(result);
    let setNanNumber = isNaN(number2);
    console.log(setNanResult + " " + setNanNumber);
    if (setNanResult == false && setNanNumber == false) {

        if (!answerd) {
            number1Set = false;
            answerd = true;
            console.log('number1: ' + number1);
            console.log('number2: ' + number2);
            console.log('operation: ' + opertion);

            switch (opertion) {
                case '+':
                    result = number1 + number2;
                    break;
                case '*':
                    result = number1 * number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;
                case '÷':
                    result = number1 / number2;
                    break;
                default:
                    break;

            }
            showText.innerHTML = result + " = " + number2 + " " + opertion + " " + number1;

        }


    } else {
        number2 = 1;
        result = number1;

    }

}


float.addEventListener("click", () => {
    if (setPoint == false) {
        showText.innerText += '.';
        setPoint = true;
    }
});

showAn.addEventListener("click", theAnswer);

btnDeel.addEventListener("click", delEveryShow);

Back.addEventListener("click", delBack);
let num1;
let num2;
let operator;
let result;
let finished = false;

const resultOutput = document.getElementById("result-text");
const clearBtn = document.getElementById("clear-btn");
const numberKeysBtns= document.querySelectorAll("#numbers-div button");
const opKeysBtns = document.querySelectorAll("#op-div button");
const equalsBtn = document.getElementById("bntEquals");

numberKeysBtns.forEach(button => {
    button.addEventListener("click", () => {
        //console.log(`teste key ${button.textContent}`);
        // if(finished){
        //     clean();
        // }
        if(button.textContent != "="){   
            if(resultOutput.textContent == "0" || finished){
                clean();
                resultOutput.textContent = button.textContent;
            } else {
                resultOutput.textContent += button.textContent;
                if(operator != undefined){
                    const expression = resultOutput.textContent.split(" ");
                    num1 = expression[0];
                    num2 = expression[2];
                } 
            }
        }
        
        
    })
});

function clean(){
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    //resultOutput.textContent = "0";
    finished = false;
}

clearBtn.addEventListener("click", () => {
    clean();
    resultOutput.textContent = "0";
});

opKeysBtns.forEach(button => {
    button.addEventListener("click", () => {
        console.log(`finished: ${finished}`);
        if(operator == undefined){
            operator = button.textContent;
            resultOutput.textContent += ` ${button.textContent} `;
            //console.log(`num1: ${num1}\nnum2: ${num2}\noperator: ${operator}`);
            console.log("chega aqui");
        } else if(num1 != undefined && num2 != undefined){
            if(num1 != undefined && num2 != undefined && operator != undefined){
                operate(operator, num1, num2);
                resultOutput.textContent = result + ` ${button.textContent} `;
                operator = button.textContent;
                console.log(`Result: ${result}`);
                finished = true;
            }
            console.log("chega aqui2");
        }
    })
});

equalsBtn.addEventListener("click", () => {
    // const expression = resultOutput.textContent.split(" ");
    // num1 = expression[0];
    // num2 = expression[2];
    //console.log(`expression: ${expression}\nnum1: ${num1}\nnum2: ${num2}\noperator: ${operator}`);
    if(num1 != undefined && num2 != undefined && operator != undefined){
        operate(operator, num1, num2);
        resultOutput.textContent = result;
        console.log(`Result: ${result}`);
        finished = true;
    }
});

function add(num1, num2){
    numberA = parseFloat(num1);
    numberB = parseFloat(num2);
    return Math.round((numberA + numberB) * 100) / 100;
}

function subtract(num1, num2){
    numberA = parseFloat(num1);
    numberB = parseFloat(num2);
    return Math.round((numberA - numberB) * 100) / 100;
}

function multiply(num1, num2){
    numberA = parseFloat(num1);
    numberB = parseFloat(num2);
    return Math.round((numberA * numberB) * 100) / 100;
}

function divide(num1, num2){
    numberA = parseFloat(num1);
    numberB = parseFloat(num2);
    if(numberB != 0){
        return Math.round((numberA / numberB) * 100) / 100;
    } else {
        return "Can't divide by 0"
    }
}

function operate(operator, num1, num2){
    switch (operator){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "Error"
            break;

    }
}




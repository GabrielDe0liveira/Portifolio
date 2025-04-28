function outcome () {
    let num1 = Number(document.getElementById('num-one').value);
    let num2 = Number(document.getElementById('num-two').value);
    let total = 0;

    // Verifica a condição específica primeiro
    if (num1 === 2 && num2 === 2 && document.getElementById('box1').checked) {
        total = "Hello World!";
    } else {
        // Condições gerais
        if (document.getElementById('box1').checked)
            total = num1 + num2;
        else if (document.getElementById('box2').checked)
            total = num1 - num2;
        else if (document.getElementById('box3').checked)
            total = num1 * num2;
        else
            total = num1 / num2;
    }
    
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total);
}

function AppendToDisplay(value) {
    if(activeInput){
        const display = document.getElementById(activeInput);
        display.value = display.value + value;
    } else {
        console.error('No active input found');
    }
}

let activeInput= 'num-one';

function setActiveInput(inputId){
    activeInput = inputId;
    document.getElementById(inputId).focus();
}
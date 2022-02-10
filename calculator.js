function calculator() {
    const operations = prompt(
        'Escolha uma operação: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão real \n 5 - Divisão inteira \n 6 - Potenciação'
    );

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let result;

    function sum() {
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`);
    }

    function sub() {
        result = n1 - n2;
        alert(`${n1} - ${n2} = ${result}`);
    }

    function mul() {
        result = n1 * n2;
        alert(`${n1} * ${n2} = ${result}`);
    }

    function realDiv() {
        result = n1 / n2;
        alert(`${n1} / ${n2} = ${result}`);
    }

    
    if (operations == 1) {
        sum();
    } else if (operations == 2) {
        sub();
    } else if (operations == 3) {
        mul();
    } else if (operations == 4) {
        realDiv();
    } else if (operations == 5) {
        intDiv();
    } else if (operations == 6) {
        pot();
    }
}


/* switch(operations) {
    case '1':
        // sum()    
        console.log('helo');  
        break;
   case 2:
        console.log('helo'); 
    default:
        break;
}  */


calculator();

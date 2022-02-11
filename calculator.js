function calculator() {
    const operations = Number(prompt(
        'Escolha uma operação: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão real \n 5 - Divisão inteira \n 6 - Potenciação \n 7 - Sair'
    ));

    if (operations < 7) {
        var n1 = Number(prompt('Insira o primeiro valor:'));
        var n2 = Number(prompt('Insira o segundo valor'));
        var result;
        
    } else if (!operations || operations >=8) {
        alert('Erro - operação inválida!');
        calculator();
    }

    function sum() {
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`);
        newOperation();
    }

    function sub() {
        result = n1 - n2;
        alert(`${n1} - ${n2} = ${result}`);
        newOperation();
    }

    function mul() {
        result = n1 * n2;
        alert(`${n1} * ${n2} = ${result}`);
        newOperation();
    }

    function realDiv() {
        result = n1 / n2;
        alert(`${n1} / ${n2} = ${result}`);
        newOperation();
    }

    function intDiv() {
        result = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${result}`);
        newOperation();
    }

    function pot() {
        result = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${result}`);
        newOperation();
    }

    function outCalc() {
        alert('Até mais!');
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
    } else if (operations == 7) {
        outCalc();
    }
}

function newOperation() {
    let option = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não');

    if (option == 1) {
        calculator();
    } else if (option == 2) {
        alert('Até mais!');
    } else {
        alert('Digite uma opção válida!');
        newOperation();
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

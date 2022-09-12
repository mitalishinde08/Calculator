'use strict'

let num1 = parseFloat(document.querySelector('input').value);
let num2 = parseFloat(document.querySelector('input').value);
let operator = ''


// AC
const AC = document.getElementById('ac')
AC.addEventListener('click',reset)

function reset() {
    document.querySelector('input').value = 0;
}

// DEL
const DEL = document.getElementById('del')
DEL.addEventListener('click',delete_el)

function delete_el() {
    let n = document.querySelector('input').value;
    document.querySelector('input').value = Math.floor(n/10);
}

// numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");

one.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'1')
two.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'2')
three.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'3')
four.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value +'4')
five.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'5')
six.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'6')
seven.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'7')
eight.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'8')
nine.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'9')
zero.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value+'0')
dot.addEventListener('click',() => document.querySelector('input').value = document.querySelector('input').value + ".")


// addition
const add = document.getElementById('add')
add.addEventListener('click',addition)

function addition() {
    num1 = parseFloat(document.querySelector('input').value);
    operator = '+';
    document.querySelector('input').value = 0;
}

// subtraction
const sub = document.getElementById('sub')
sub.addEventListener('click',subtraction)

function subtraction() {
    num1 = parseFloat(document.querySelector('input').value);
    operator = '-';
    document.querySelector('input').value = 0;
}

// multiply
const mul = document.getElementById('multiply')
mul.addEventListener('click',multiplication)

function multiplication() {
    num1 = parseFloat(document.querySelector('input').value);
    operator = '*';
    document.querySelector('input').value = 0;
}

// Divide
const div = document.getElementById('divide')
div.addEventListener('click',division)

function division() {
    num1 = parseFloat(document.querySelector('input').value);
    operator = '/';
    document.querySelector('input').value = 0;
}


// evaluation
const equal = document.getElementById('equals')
equal.addEventListener('click',evaluate)


function evaluate() {
    num2 = parseFloat(document.querySelector('input').value);
    if (operator === '+') {
        document.querySelector('input').value = num1 + num2;
        operator='';
        return 0;
    }
    if (operator === '-') {
        document.querySelector('input').value = num1 - num2;
        operator='';
        return 0;
    }
    if (operator === '*') {
        document.querySelector('input').value = num1 * num2;
        operator='';
        return 0;
    }
    if (operator === '/') {
        document.querySelector('input').value = num1 / num2;
        operator='';
        return 0;
    }
    else {
        document.querySelector('input').value = num2;
    }
    
}


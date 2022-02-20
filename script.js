let header = document.getElementById('myHeader');
let rgbas = document.getElementById('rgba');
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let firstInput = document.getElementById('firstInput');
let secondInput = document.getElementById('secondInput');
let thirdInput = document.getElementById('thirdInput');
let fourthInput = document.getElementById('fourthInput');
let mySpan = document.getElementById('mySpan');


first.innerHTML = "R : " + firstInput.value;
second.innerHTML = "B : " + secondInput.value;
third.innerHTML = "B : " + thirdInput.value;
fourth.innerHTML = "B : " + fourthInput.value;

rgbas.innerHTML = `rgba ( ${firstInput.value} , ${secondInput.value}, ${thirdInput.value}, 1)`;

firstInput.addEventListener('input', ()=> {
    first.innerHTML = "R : " + firstInput.value;
    rgbas.innerHTML = `rgba ( ${firstInput.value} , ${secondInput.value}, ${thirdInput.value}, 1)`;
    header.style.backgroundColor = `rgba(${firstInput.value}, ${secondInput.value}, ${thirdInput.value}, ${fourthInput.value})`;
})

secondInput.addEventListener('input', ()=> {
    second.innerHTML = "B : " + secondInput.value;
    rgbas.innerHTML = `rgba ( ${firstInput.value} , ${secondInput.value}, ${thirdInput.value}, 1)`;
    header.style.backgroundColor = `rgba(${firstInput.value}, ${secondInput.value}, ${thirdInput.value}, ${fourthInput.value})`;
})

thirdInput.addEventListener('input', ()=> {
    third.innerHTML = "B : " + thirdInput.value;
    rgbas.innerHTML = `rgba ( ${firstInput.value} , ${secondInput.value}, ${thirdInput.value}, 1)`;
    header.style.backgroundColor = `rgba(${firstInput.value}, ${secondInput.value}, ${thirdInput.value}, ${fourthInput.value})`;
})

mySpan.addEventListener('click', ()=> {
    

    // alert when click to copy

    alert(`Copied rgba ( ${firstInput.value} , ${secondInput.value}, ${thirdInput.value}, 1)`);
})


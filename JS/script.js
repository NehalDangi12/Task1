const navEl = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled')
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled')
    }
});

setInterval(() => {
    console.log("hey")
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}, 3000)

// 


// var copy = document.querySelector('clients img').cloneNode(true);
// document.querySelector('.img').appendChild(copy);

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if (counter == 65) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%"
    }
}, 20);
let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
    if (counter1 == 80) {
        clearInterval();
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + "%"
    }
}, 20);
let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if (counter2 == 90) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + "%"
    }
}, 20);
let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if (counter3 == 50) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + "%"
    }
}, 20);
let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
    if (counter4 == 20) {
        clearInterval();
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + "%"
    }
}, 20);



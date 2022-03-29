let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allColors;

firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');

btn1 = document.getElementById("changebtn1");
btn2 = document.getElementById("changebtn2");
btn3 = document.getElementById("changebtn3");
btnall = document.getElementById("changebtnall");

function changeBoxOne() {
    firstbox.style.backgroundColor = "blue";
    firstbox.style.border = "5px solid yellow";
}

btn1.addEventListener("click", changeBoxOne);
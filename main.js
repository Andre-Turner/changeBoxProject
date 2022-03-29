let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allColors, allBorders, btn4, btn5, btn6, hbtnall;

allColors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "maroon", "silver", "gold", "lavender", "cyan", "white", "darkgreen", "pink"];

allBorders = ["dotted", "dashed", "solid", "double", "ridge", "inset", "outset", "groove"];


firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');

// Hide Button Elements
btn4 = document.getElementById("hidebtn1");
btn5 = document.getElementById("hidebtn2");
btn6 = document.getElementById("hidebtn3");
hbtnall = document.getElementById("hidebtnall");

btn1 = document.getElementById("changebtn1");
btn2 = document.getElementById("changebtn2");
btn3 = document.getElementById("changebtn3");
btnall = document.getElementById("changebtnall");

function changeBoxOne() {
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "5px solid " + allColors[Math.floor(Math.random() * allColors.length)];
}

function changeBoxTwo() {
    secondbox.style.backgroundColor = allColors[Math.floor(Math.
random() * allColors.length)];
    secondbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)]; + " " + allColors[Math.floor
(Math.random() * allColors.length)];
}

function changeBoxThree() {
    thirdbox.style.backgroundColor = allColors[Math.floor(Math.
random() * allColors.length)];
    thirdbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)]; + " " + allColors[Math.floor
(Math.random() * allColors.length)];
}

function changeAllBoxes() {
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "5px solid " + allColors[Math.floor(Math.random() * allColors.length)];

    secondbox.style.backgroundColor = allColors[Math.floor(Math.
        random() * allColors.length)];
            secondbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)]; + " " + allColors[Math.floor
        (Math.random() * allColors.length)];
    
    
    thirdbox.style.backgroundColor = allColors[Math.floor(Math.
        random() * allColors.length)];
            thirdbox.style.border = "5px " + allBorders[Math.floor(Math.random() * allBorders.length)]; + " " + allColors[Math.floor
        (Math.random() * allColors.length)];
}

function hideBoxOne() {
    firstbox.style.display = "none";
}

function hideBoxTwo() {
    firstbox.style.display = "none";
}

function hideBoxThree() {
    firstbox.style.display = "none";
}

function hideAllBoxes() {
    firstbox.style.display = "none";
}


//Change Button Events
btn1.addEventListener("click", changeBoxOne);
btn2.addEventListener("click", changeBoxTwo);
btn3.addEventListener("click", changeBoxThree);
btnall.addEventListener("click", changeAllBoxes);

// Hide Button Events
btn4.addEventListener("click", hideBoxOne);
btn5.addEventListener("click", hideBoxTwo);
btn6.addEventListener("click", hideBoxThree);
hbtnall.addEventListener("click", hideAllBoxes);






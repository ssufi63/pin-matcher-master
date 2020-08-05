// hide notify section
document.getElementById("pinNotMatched").style.display = "none";
document.getElementById("pinMatched").style.display = "none";

// random pin generator
let pinBtn = document.getElementById("randomPinGenerateBtn");
pinBtn.addEventListener("click", function(){
        let randomPin = Math.random() * 8999 + 1000;
        let fourDigitRandomPin = Math.floor(randomPin);
        document.getElementById("pinArea").value = fourDigitRandomPin;
})

// button area
function buttonNumber(id) {
    return document.getElementById(id);
    }
    function addingEventHandler() {
    let btn = document.getElementsByClassName("button");
    for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {
    let numberBtn = e.target.innerHTML;
    if (numberBtn === "C") {
    return buttonNumber("numbersArea").value = ""; // clear all button
    } 
    else if (numberBtn === "&lt;") {
    let areaNumber = document.getElementById("numbersArea");
    return buttonNumber("numbersArea").value = areaNumber.value.slice(0, areaNumber.value.length - 1); // backspace button
    } 
    else {
    buttonNumber("numbersArea").value += numberBtn; // number button
    }
    });
    }
    }
    addingEventHandler();

// pin match section
let count = 3;
function matchThePin(){
    let randomPin = buttonNumber("pinArea").value;
    let typingPin = buttonNumber("numbersArea").value;

    if(randomPin === typingPin){
        buttonNumber("pinMatched").style.display = "block";
    }
    else{ 
        if(count === 1){
            document.getElementById("disableSubmit").disabled = true;
        }
        count--;
        document.querySelector("span").innerText = count;  
        buttonNumber("pinNotMatched").style.display = "block";   
    }
}
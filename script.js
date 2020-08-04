document.getElementById("hide-section").style.display = "none";

let pinBtn = document.getElementById("randomPinGenerateBtn");
pinBtn.addEventListener("click", function(){
        let randomPin = Math.random() * 8999 + 1000;
        let fourDigitRandomPin = Math.floor(randomPin);
        document.getElementById("pinArea").value = fourDigitRandomPin;
})

function buttonNumber(id){
    return document.getElementById(id);
}

function addingEventHandler() {
    let btn = document.getElementsByClassName("button");
    for(i = 0; i < btn.length; i++){
        btn[i].addEventListener("click", function(){
            let numberBtn = this.innerHTML;
            if(numberBtn == "C"){
                buttonNumber("numbersArea").value = "";
            }
            else if(numberBtn == "<") {
                let numberBtn = buttonNumber("numbersArea").value;
                let removeNumber = numberBtn.slice(0, -1);
                buttonNumber("numbersArea").value = removeNumber;

            }
            else{
                buttonNumber("numbersArea").value += numberBtn;
            }
        });

    }

}

let count = 3;
function matchThePin(){
    let randomPin = buttonNumber("pinArea");
    let typingPin = buttonNumber("numbersArea");

    if(randomPin == typingPin){
        buttonNumber("pinMatched").style.display = "block";
    }
    else{ 
        if(count == 1){
            document.getElementById("disableSubmit").disabled = true;
        }
        count--;
        document.querySelector("span").innerText = count;  
        catchElement("pinNotMatched").style.display = "block";   
    }
}
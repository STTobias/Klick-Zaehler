let count = 0;
let resetCount = 0;
const maxCount = 10;
let maxReset = 10;
let maxResetEnabled = true;

const button = document.getElementById("meinKnopf");
const counter = document.getElementById("counter");

button.addEventListener("click", function(){
    if(count < maxCount){      
        count = count + 1;
        console.log(count);
        counter.textContent = count 
    } else {
        alert("Maximum erreicht! Bitte zurücksetzten!!")   
    }

    counter.classList.remove("green", "yellow", "red");

    if (count <= 3) {
        counter.classList.add("green");
    } else if (count <= 7) {
        counter.classList.add("yellow");
    } else {
        counter.classList.add("red");
    }
});

const resetbutton = document.getElementById("resetKnopf");
const resetText = document.getElementById("reset")

resetbutton.addEventListener("click", function(){
    if(resetCount == maxReset){

    } else {
            if(count = 10){
                count = 0;
                counter.textContent = count;
                resetCount = resetCount +1;
                resetText.textContent = resetCount;

                counter.classList.remove("green", "yellow", "red");

                if (resetCount <= 3) {
                    resetText.classList.add("green");
                } else if (resetCount <= 7) {
                    resetText.classList.add("yellow");
                } else {
                    resetText.classList.add("red");
                }
            }
        }
});

const setbutton = document.getElementById("setStartValue");
const startInput = document.getElementById("startValue");

setbutton.addEventListener("click", function() {
    const inputValue = startInput.value; 
    count = parseInt(inputValue);
    counter.textContent = count;

    counter.classList.remove("green", "yellow", "red");

    if (count <= 3) {
        counter.classList.add("green");
    } else if (count <= 7) {
        counter.classList.add("yellow");
    } else {
        counter.classList.add("red");
    }
});

const toggleMaxResetButton = document.getElementById("toggleMaxReset");
toggleMaxResetButton.addEventListener("click", function() {
    if(maxResetEnabled === true) {
        maxReset = Infinity;
        toggleMaxResetButton.textContent = "Max Reset = An";
        maxResetEnabled = false;
    } else {
        maxReset = 10;
        toggleMaxResetButton.textContent = "Max Reset = Aus";
        maxResetEnabled = true;
    }
}); 
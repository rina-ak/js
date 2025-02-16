let clickCount = 0;
const clickButton = document.getElementById("clickButton");
const clickMessage = document.getElementById("clickMessage");

clickButton.addEventListener("click", () => {
    clickCount++;
    clickButton.textContent = `Нажми меня! (${clickCount}/15)`;
    
    if (clickCount >= 15) {
        clickButton.disabled = true;
        clickMessage.textContent = "Больше не кликаешь! (｡•́︿•̀｡)";
    }
});


let countdown = 10;
const timerDisplay = document.getElementById("timerDisplay");
const startTimerButton = document.getElementById("startTimerButton");
const resetTimerButton = document.getElementById("resetTimerButton");
let countdownInterval;

startTimerButton.addEventListener("click", () => {
    countdownInterval = setInterval(() => {
        countdown--;
        timerDisplay.textContent = countdown;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "Время вышло! (≧◡≦)";
        }
    }, 1000);

    startTimerButton.disabled = true;
    resetTimerButton.disabled = false;
});

resetTimerButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    countdown = 10;
    timerDisplay.textContent = countdown;
    startTimerButton.disabled = false;
    resetTimerButton.disabled = true;
});


let stopwatchTime = 0;
let stopwatchInterval;
const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", () => {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        stopwatchDisplay.textContent = stopwatchTime;
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
});

stopButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
});

resetButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchDisplay.textContent = stopwatchTime;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
});

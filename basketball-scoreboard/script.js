let homeScore = 0;
let guestScore = 0;
let timerSeconds = 90; // 1.5 минуты (90 секунд)
let timerInterval = null;
let isTimerRunning = false;

function addPoints(team, points) {
    if (team === 'home') {
        homeScore = Math.min(homeScore + points, 99);
        document.getElementById('home-score').textContent = homeScore;
    } else if (team === 'guest') {
        guestScore = Math.min(guestScore + points, 99);
        document.getElementById('guest-score').textContent = guestScore;
    }
    updateLeader();
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
    resetTimer();
    updateLeader();
}

function updateLeader() {
    const homeElement = document.getElementById('home-score');
    const guestElement = document.getElementById('guest-score');

    homeElement.classList.remove('leading');
    guestElement.classList.remove('leading');

    if (homeScore > guestScore) {
        homeElement.classList.add('leading');
    } else if (guestScore > homeScore) {
        guestElement.classList.add('leading');
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = display;

    // Меняем цвет в зависимости от времени
    timerElement.classList.remove('warning', 'danger');
    if (timerSeconds <= 30 && timerSeconds > 10) {
        timerElement.classList.add('warning'); // оранжевый < 30 сек
    } else if (timerSeconds <= 10) {
        timerElement.classList.add('danger'); // красный < 10 сек
    }
}

function startTimer() {
    if (!isTimerRunning && timerSeconds > 0) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();

            if (timerSeconds <= 0) {
                pauseTimer();
                timerSeconds = 0;
                updateTimerDisplay();
            }
        }, 1000);
    }
}

function pauseTimer() {
    isTimerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 90;
    updateTimerDisplay();
}

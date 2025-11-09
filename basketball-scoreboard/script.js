let homeScore = 0;
let guestScore = 0;

function increment(team, points) {
    if (team === 'home') {
        homeScore += points;
        homeScore = Math.min(homeScore, 99);
        document.getElementById('home-score').textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        guestScore = Math.min(guestScore, 99);
        document.getElementById('guest-score').textContent = guestScore;
    }
    updateLeader();
}

function updateLeader() {
    const homeElement = document.getElementById('home-score');
    const guestElement = document.getElementById('guest-score');

    homeElement.classList.remove('leader');
    guestElement.classList.remove('leader');
    if (homeScore > guestScore) {
        homeElement.classList.add('leader');
    } else if (guestScore > homeScore) {
        guestElement.classList.add('leader');
    }
}
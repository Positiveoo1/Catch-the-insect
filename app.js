const btn = document.getElementById('btn');
const main = document.getElementsByTagName('main')[0];
const title1 = document.getElementById('title1');
const control = document.getElementsByClassName('control')[0];
const time = document.getElementById('time');
const score = document.getElementById('score');

let timer = 0;
let scores = 0; 
let timerInterval;
let insectInterval;
// TODO updater the time
function updateTimer() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    time.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// TODO appears insect randomly  with its interval
function randomInsect() {
    const insect = document.createElement('img');
    insect.src = 'insect.png'; 
    insect.style.position = 'absolute';
    
    const mainRect = main.getBoundingClientRect();
    const insectX = Math.floor(Math.random() * (mainRect.width - 60)); 
    const insectY = Math.floor(Math.random() * (mainRect.height - 60)); 
    insect.style.top = insectY + 'px';
    insect.style.left = insectX + 'px';
    insect.style.width = '60px';
    
    insect.addEventListener('click', () => {
        if (main.contains(insect)) {
            main.removeChild(insect);
            scores++;
            score.innerText = 'Score: ' + scores;
            // Do not call randomInsect() here
        }

    });

    main.appendChild(insect);

    setTimeout(() => {
        if (main.contains(insect)) {
            main.removeChild(insect);
        }
    }, 8000);
}
btn.addEventListener('click', () => {
    btn.style.cssText = 'transform: translateY(-370px); transition: all .5s ease-in-out';
    title1.style.cssText = 'transform: translateY(-370px); transition: all .5s ease-in-out;'
    control.style.cssText = 'opacity: 1; transition:  all .5s ease-in-out; position: absolute; top: 30px; left: 0px; ';

    timerInterval = setInterval(() => {
        timer++;
        updateTimer();
    }, 1000);

    insectInterval = setInterval(randomInsect, 800);
});

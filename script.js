// ============================================================
// EDIT ME: the target date/time for your 10-month anniversary.
// Format: new Date(year, monthIndex, day, hour, minute)
// Note: monthIndex is 0-based, so September = 8.
// ============================================================
const TARGET_DATE = new Date(2020, 8, 10, 0, 0, 0);

const countdownScreen = document.getElementById('countdown-screen');
const giftScreen = document.getElementById('gift-screen');

function msRemaining() {
  return TARGET_DATE.getTime() - Date.now();
}

function renderCountdown() {
  const remaining = msRemaining();

  if (remaining <= 0) {
    showGift();
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
}

function showGift() {
  countdownScreen.hidden = true;
  giftScreen.hidden = false;
  if (countdownTimer) clearInterval(countdownTimer);
}

// Decide which screen to show on load, then keep the countdown ticking
// in case the page is left open right through midnight.
let countdownTimer = null;
if (msRemaining() <= 0) {
  showGift();
} else {
  renderCountdown();
  countdownTimer = setInterval(renderCountdown, 1000);
}


// ============================================================
// GIFT SCENES
// ============================================================
const sceneCat = document.getElementById('scene-cat');
const sceneBouquet = document.getElementById('scene-bouquet');
const sceneLetter = document.getElementById('scene-letter');

const charImg = document.getElementById('char-img');
const charSpeech = document.getElementById('cat-speech');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const cardBtn = document.getElementById('card-btn');
const balloonLayer = document.getElementById('balloon-layer');

function launchBalloons() {
  const positions = [8, 22, 38, 52, 66, 80, 92];
  const images = ['images/balloon1.png', 'images/balloon2.png'];
  // three vertical "levels" queued below the screen so the cluster looks fuller
  // as it rises, rather than a single thin row.
  const rows = [
    { bottom: -20, delayBase: 0 },
    { bottom: -50, delayBase: 0.12 },
    { bottom: -80, delayBase: 0.22 }
  ];

  rows.forEach((row, rowIndex) => {
    positions.forEach((leftPercent, i) => {
      const img = document.createElement('img');
      img.src = images[(i + rowIndex) % images.length];
      img.className = 'balloon-pop';
      img.alt = '';
      const size = 46 + Math.random() * 34;
      img.style.width = `${size}px`;
      // offset each row's x positions slightly so balloons don't stack in a perfect grid
      const jitter = rowIndex * 5 - 5;
      img.style.left = `${leftPercent + jitter}%`;
      img.style.bottom = `${row.bottom}%`;
      img.style.animationDelay = `${row.delayBase + Math.random() * 0.2}s`;
      balloonLayer.appendChild(img);

      img.addEventListener('animationend', () => img.remove());
    });
  });
}

let noClicks = 0;

btnNo.addEventListener('click', () => {
  noClicks += 1;

  charImg.src = 'images/afterNo.png';
  charImg.classList.remove('state-mad', 'state-veryMad');
  // restart the shake animation each click, even if the same class was already applied
  void charImg.offsetWidth;

  if (noClicks === 1) {
    charImg.classList.add('state-mad');
    charSpeech.textContent = 'Intenta otra vez!';
  } else if (noClicks === 2) {
    charImg.classList.add('state-veryMad');
    charSpeech.textContent = 'QUE INTENTES OTRA VEZ 🤬';
  }else if (noClicks === 3){
    charImg.classList.add('state-veryMad');
    charSpeech.textContent = 'YAAAAAAAAAAAAAAAAAAAAAAA 🤬';
  }else if (noClicks === 4){
    charImg.classList.add('state-veryMad');
    charSpeech.textContent = 'SI LE DAS OTRA VEZ A NO ERES GEI';
  }else if (noClicks === 5){
    charImg.classList.add('state-veryMad');
    charSpeech.textContent = 'ADIOS GEI';
  }else{
    charImg.classList.add('state-veryMad');
    charSpeech.textContent = '...';
  }
});

btnYes.addEventListener('click', () => {
  sceneCat.hidden = true;
  sceneBouquet.hidden = false;
});

cardBtn.addEventListener('click', () => {
  launchBalloons();
  sceneBouquet.hidden = true;
  sceneLetter.hidden = false;
});
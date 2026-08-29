// ============================================================
// EDIT ME: the target date/time for your 10-month anniversary.
// Format: new Date(year, monthIndex, day, hour, minute)
// Note: monthIndex is 0-based, so September = 8.
// ============================================================
const TARGET_DATE = new Date(2026, 8, 10, 0, 0, 0);

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
  clearInterval(countdownTimer);
}

// Decide which screen to show on load, then keep the countdown ticking
// in case the page is left open right through midnight.
if (msRemaining() <= 0) {
  showGift();
} else {
  renderCountdown();
}
const countdownTimer = setInterval(renderCountdown, 1000);


// ============================================================
// GIFT SCENES
// ============================================================
const sceneCat = document.getElementById('scene-cat');
const sceneBouquet = document.getElementById('scene-bouquet');
const sceneLetter = document.getElementById('scene-letter');

const catSvg = document.getElementById('cat-svg');
const catMouth = document.getElementById('cat-mouth');
const catSpeech = document.getElementById('cat-speech');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const cardBtn = document.getElementById('card-btn');

const MOUTHS = {
  happy: 'M100 140 Q120 158 140 140',
  mad: 'M102 148 Q120 134 138 148',
  veryMad: 'M100 150 Q120 130 140 150 M105 150 Q120 140 135 150'
};

let noClicks = 0;

btnNo.addEventListener('click', () => {
  noClicks += 1;

  if (noClicks === 1) {
    catSvg.classList.remove('state-veryMad');
    catSvg.classList.add('state-mad');
    catMouth.setAttribute('d', MOUTHS.mad);
    catSpeech.textContent = 'Try again!';
  } else {
    catSvg.classList.remove('state-mad');
    catSvg.classList.add('state-veryMad');
    catMouth.setAttribute('d', MOUTHS.veryMad);
    catSpeech.textContent = 'I SAID TRY AGAIN';
  }
});

btnYes.addEventListener('click', () => {
  sceneCat.hidden = true;
  sceneBouquet.hidden = false;
});

cardBtn.addEventListener('click', () => {
  sceneBouquet.hidden = true;
  sceneLetter.hidden = false;
});

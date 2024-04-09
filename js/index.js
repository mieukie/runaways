//hehehehehe
function superSecret() {
    window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
}

function rollD20() {
    if (rollCool == true) {
        var dice = document.getElementById('d20Pic');
        dice.style.scale = '(1.1)';
        dice.style.filter = 'opacity(90%)';
        dice.classList.add('wiggleRoll');
        var result = Math.floor(Math.random() * 20) + 1;
        dice.innerHTML = result;
        setTimeout(function() {
        dice.classList.remove('wiggleRoll');
        dice.style.scale = 1;
        dice.style.filter = 'opacity(75%)';
        }, 1000);
        lockRoll();
    }
}

function lockRoll() {
    console.log('roll locked');
    rollCool = false;
    document.getElementById('luckBuff').style.display = 'block';
    document.getElementById('wannaRoll').innerHTML = '...';
    setTimeout(unlockRoll, 1000);
}

function unlockRoll() {
    rollCool = true;
    document.getElementById('luckBuff').style.display = 'none';
    document.getElementById('wannaRoll').innerHTML = 'TEST YOUR LUCK?';
}

var rollCool = true  
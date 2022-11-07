
function rollD20() {
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
}




// SECTION OF CODE FOR MARQUEE SCROLL FROM GABRIEL FAUCON - https://codepen.io/fif7y/pen/NWNyajd -------------
var outer = document.querySelector("#outer");
  var content = outer.querySelector('#content');

  repeatContent(content, outer.offsetWidth);

  var el = outer.querySelector('#loop');
  el.innerHTML = el.innerHTML + el.innerHTML;

  function repeatContent(el, untill) {
    var html = el.innerHTML;
    var counter = 0; // prevents infinite loop

    while (el.offsetWidth < untill && counter < 100) {
      el.innerHTML += html;
      counter += 1;
    }
  }

  var outer2 = document.querySelector("#outer2");
  var content2 = outer2.querySelector('#content2');

  repeatContent2(content2, outer2.offsetWidth);

  var el2 = outer2.querySelector('#loop2');
  el2.innerHTML = el2.innerHTML + el2.innerHTML;

  function repeatContent2(el2, untill2) {
    var html2 = el2.innerHTML;
    var counter2 = 0; // prevents infinite loop

    while (el2.offsetWidth < untill2 && counter2 < 100) {
      el2.innerHTML += html2;
      counter2 += 1;
    }
  }

// ---------------------------------------------------------------------------------------------------------------



//stop elements from transitioning for window resize
let resizeTimer; window.addEventListener("resize", () => {   document.body.classList.add("resize-animation-stopper");   clearTimeout(resizeTimer);   resizeTimer = setTimeout(() => {     document.body.classList.remove("resize-animation-stopper");   }, 400); });


//hehehehehe
function superSecret() {
  window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
}
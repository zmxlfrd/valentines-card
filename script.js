// script.js

function sendBums(choice) {
    if (choice === 'yes') {
      alert("I Love You, Now Give Me Bums");
    }
  }

  function runAway() {
    moveNoButton();
  }

  function moveNoButton() {
    const button = document.getElementById("no-button");
    const newPositionX = Math.random() * (window.innerWidth - button.offsetWidth);
    const newPositionY = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = newPositionX + "px";
    button.style.top = newPositionY + "px";
  }

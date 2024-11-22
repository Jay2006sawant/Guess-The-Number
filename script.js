
document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('s');
    const gameContainer = document.getElementById('gameContainer');
    const startGameButton = document.getElementById('startGameButton');
    const submitButton = document.getElementById('submit');
    const resBtn = document.getElementById('resBtn');
    const inp = document.getElementById('inp');
    const msg = document.getElementById('msg');
    const attemptDisplay = document.getElementById('Attempt');
    let attempts = 0;
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    startGameButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameContainer.style.display = 'block';
    });


    submitButton.addEventListener('click', () => {
        const userGuess = parseInt(inp.value);
        attempts++;
        attemptDisplay.textContent = attempts;

        if (isNaN(userGuess) || inp.value.trim() === '') { 
            msg.textContent = 'Please enter a valid number!'; 
            msg.style.color = 'red'; 
            return;
        }

        if (userGuess === randomNumber) {
            msg.textContent = 'Congratulations! You guessed the correct number!';
            msg.style.color = 'green';
            resBtn.style.display = 'block';
            submitButton.disabled = true;
        } else if (userGuess > randomNumber) {
            msg.textContent = 'Too high! Try again.';
        } else {
            msg.textContent = 'Too low! Try again.';
        }
    },);

    resBtn.addEventListener('click', () => {
        attempts = 0;
        attemptDisplay.textContent = attempts;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        msg.textContent = '';
        inp.value = '';
        resBtn.style.display = 'none';
        submitButton.disabled = false;
    });
    setTimeout(()=>{
        userinp.value="";
        message.innerHTML="";
      },1000);
   }
   
);


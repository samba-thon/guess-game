var secretNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById('submit-btn').addEventListener('click', function() {
    var guess = parseInt(document.getElementById('guess-input').value);
    var message = document.getElementById('message');
    
    if (guess === secretNumber) {
        message.textContent = '✅ CASE CLOSED! You found it!';
        message.className = 'correct';
    } else if (guess > secretNumber) {
        message.textContent = '❌ Too high!';
        message.className = 'too-high';
    } else if (guess < secretNumber) {
        message.textContent = '❌ Too low!';
        message.className = 'too-low';
    }
});

document.getElementById('guess-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('submit-btn').click();
    }
});
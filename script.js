// Get elements
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const messagePopup = document.getElementById('message-popup');
const celebrationOverlay = document.getElementById('celebration-overlay');

// Messages for the moving button
const messages = ["Hey hey, don’t go there!", "Nope, not allowed!", "Nice try!", "Too slow! 😜"];

// Function to show a random message briefly
function showMessage() {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    messagePopup.textContent = randomMsg;
    messagePopup.style.opacity = '1';
    setTimeout(() => {
        messagePopup.style.opacity = '0';
    }, 1000);
}

// Move the "No" button when mouse gets close (within 100px)
document.addEventListener('mousemove', (e) => {
    const rect = noBtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;
    const distance = Math.sqrt((e.clientX - btnCenterX) ** 2 + (e.clientY - btnCenterY) ** 2);
    
    if (distance < 100) {
        // Teleport to a random position within the viewport
        const newX = Math.random() * (window.innerWidth - rect.width);
        const newY = Math.random() * (window.innerHeight - rect.height);
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
        showMessage();
    }
});

// Handle "Yes" button click
yesBtn.addEventListener('click', () => {
    // Trigger confetti animation (simple JS confetti)
    createConfetti();
    
    // Show celebration overlay after a short delay
    setTimeout(() => {
        celebrationOverlay.classList.add('show');
    }, 2000);
});

// Simple confetti function (creates falling elements)
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '-10px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => confetti.remove(), 5000);
    }
}

// CSS for confetti fall (add to styles.css if needed, but inline here for simplicity)
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to { transform: translateY(100vh); }
    }
`;
document.head.appendChild(style);

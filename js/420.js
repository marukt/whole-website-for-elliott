




console.log('Score:', score);
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.image {
    width: 200px;
    height: 200px;
    margin: 20px;
    cursor: pointer;
}

.jackpot {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
}
    reels = [random.choice(list(symbols.keys())) for _ in range(3)]
    

    
    values = [symbols[symbol]['value'] for symbol in reels]
    counts = Counter(values)
        screen.blit(symbols['jackpot']['image1.png'], (300, 0))
    
    pygame.display.flip()


    for (let i = 0; i < reels.length; i++) {
        const symbol = reels[i];
        screen.blit(symbols[symbol]['image1.png'], (i * 200, 0));
    }


    let score = 0;

const images = document.querySelectorAll('.image');
const jackpot = document.getElementById('jackpot');

images.forEach(image => {
    image.addEventListener('click', () => {
        const value = parseInt(image.getAttribute('data-value'));
        score += value;

        if (images.every(img => img.getAttribute('data-value') === image.getAttribute('data-value'))) {
            jackpot.style.display = 'block';
        }

        console.log('Score:', score);
    });
});
let score = 0;
let isSpinning = false;

const images = document.querySelectorAll('.image');
const jackpot = document.getElementById('jackpot');
const spinButton = document.getElementById('spin-button');

spinButton.addEventListener('click', () => {
    if (!isSpinning) {
        isSpinning = true;
        spinReels();
    }
});

function spinReels() {
    let currentIndex = 0;
    let intervalId = setInterval(() => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';

        if (currentIndex === 0) {
            clearInterval(intervalId);
            checkForJackpot();
            isSpinning = false;
        }
    }, 100);
}

function checkForJackpot() {
    const currentValue = parseInt(images[0].getAttribute('data-value'));
    if (images.every(img => img.getAttribute('data-value') === images[0].getAttribute('data-value'))) {
        jackpot.style.display = 'block';
        score += currentValue * 10; // Multiply by 10 for a 3 of a kind jackpot
    } else {
        score += currentValue;
    }
    console.log('Score:', score);
}
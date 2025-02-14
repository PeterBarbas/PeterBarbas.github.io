function noClicked() {
    document.querySelector('.box1').classList.add('hidden');
    document.querySelector('.box2').classList.remove('hidden');
}

function goBack2() {
    document.querySelectorAll('.box1, .box2, .box3, .box4').forEach(box => box.classList.add('hidden'));
    document.querySelector('.box1').classList.remove('hidden');
}

function goBack3() {
    document.querySelectorAll('.box1, .box2, .box3, .box4').forEach(box => box.classList.add('hidden'));
    document.querySelector('.box1').classList.remove('hidden');
}

function goBack4() {
    document.querySelectorAll('.box1, .box2, .box3, .box4').forEach(box => box.classList.add('hidden'));
    document.querySelector('.box3').classList.remove('hidden');
}

function yesClicked() {
    document.querySelectorAll('.box1, .box2').forEach(box => box.classList.add('hidden'));
    document.querySelector('.box3').classList.remove('hidden');
}

function redeem() {
    const button = document.querySelector('.box3 .redeemButton');
    button.classList.add('loading');
    button.textContent = "";

    setTimeout(() => {
        button.classList.remove('loading');
        button.classList.add('redeemed');
        button.textContent = "Redeemed";
        
        setTimeout(() => {
            document.querySelector('.box3').classList.add('hidden');
            document.querySelector('.box4').classList.remove('hidden');
        }, 1000);
    }, 1000);
}


function startHeartAnimation() {
    launchFirework(); // Start fireworks
    setTimeout(() => fireworks = [], 4000); // Clear after 4 seconds

    for (let i = 0; i < 100; i++) {
        setTimeout(() => createHeart(), Math.random() * 2000);
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random positions & sizes
    const startX = Math.random() * 100; // Random X position
    const startY = Math.random() * 100; // Random Y position (not always from bottom)
    const size = Math.random() * 30 + 10; // Random size

    heart.style.left = `${startX}vw`;
    heart.style.top = `${startY}vh`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Different speeds

    document.getElementById("heartsContainer").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}




// Fireworks

const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let fireworks = [];

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.exploded = false;
        this.velocity = { x: (Math.random() - 0.5) * 3, y: Math.random() * -7 - 3 };
        this.particles = [];
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    update() {
        if (!this.exploded) {
            this.y += this.velocity.y;
            this.velocity.y += 0.1; // Gravity
            if (this.velocity.y >= 0) {
                this.explode();
            }
        } else {
            this.particles.forEach((p) => p.update());
        }
    }

    draw() {
        if (!this.exploded) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        } else {
            this.particles.forEach((p) => p.draw());
        }
    }

    explode() {
        this.exploded = true;
        for (let i = 0; i < 10; i++) {
            this.particles.push(new Particle(this.x, this.y, this.color));
        }
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4,
        };
        this.alpha = 1;
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.02;
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks = fireworks.filter((fw) => fw.exploded ? fw.particles.some(p => p.alpha > 0) : true);
    fireworks.forEach((fw) => {
        fw.update();
        fw.draw();
    });
    requestAnimationFrame(animateFireworks);
}

function launchFirework() {
    for (let i = 0; i < 20; i++) {
        fireworks.push(new Firework(Math.random() * canvas.width, canvas.height));
    }
}

function yesClicked() {
    document.querySelectorAll('.box1, .box2').forEach(box => box.classList.add('hidden'));
    document.querySelector('.box3').classList.remove('hidden');

    launchFirework(); // Start fireworks
    setTimeout(() => fireworks = [], 4000); // Clear after 4 seconds
}

animateFireworks();

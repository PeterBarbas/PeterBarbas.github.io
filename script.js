document.getElementById('no').addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById('yes').addEventListener('click', function() {
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * window.innerWidth}px`;
        firework.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * window.innerWidth}px`;
            heart.style.top = `${Math.random() * window.innerHeight}px`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }, i * 100);
    }
});
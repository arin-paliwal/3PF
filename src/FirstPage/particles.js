const particle = document.getElementById("particles");
const pt = particle.getContext('2d');
particle.width = window.innerWidth;
particle.height = window.innerHeight;
let particlesArray;
// mouse position
let mouse = {
    x: null,
    y: null,
    radius: (particle.height / 80) * (particle.width / 80),
}
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);
// create particle
class Particle {
    constructor(x, y, directionX, directionY, size,
        color) {
        this.x = x
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;

    }
    // method to draw individual particle
    draw() {
        pt.begin();
        pt.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        pt.fillStyle = '#8C5523';
        pt.fill();
    }
    // check particle position, check mouse position, move the particle, draw the particle
    update() {
        // check if particle is still within  particle
        if (this.x > particle.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > particle.width || this.y < 0) {
            this.directionY = -this.directionY;
        }
        // check collisoin detection , mouse position - particle composition
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < particle.width - this.size * 10) {
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if (mouse.y < this.y && this.y < particle.height - this.size * 10) {
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        } // move
        this.x += this.directionX;
        this.y += this.directionY;
        // draw
        this.draw();
    }
}

// create particle array
function init() {
    particlesArray = []
    let numberOfParticles = (particle.height * particle.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5
        let color='#8C5523'
        particlesArray.push(new Particle(x,y,directionX,directionY,size,color));
    }
}
// animation
function animate(){
    requestAnimationFrame(animate);
    pt.clearRect(0,0,innerWidth,innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
}
init();
animate();
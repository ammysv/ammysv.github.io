class Particulapequeña {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-0.1, 0.1), random(0.2, 0.6));
    this.tamaño = random(1, 5);
  }
  update() {
    this.pos.add(this.vel);

    // si sale por abajo, vuelve arriba
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.pos.x = random(width);
    }
  }

  display() {
    noStroke();
    fill(255);
    circle(this.pos.x, this.pos.y, this.tamaño);
  }
}

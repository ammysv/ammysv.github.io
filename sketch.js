let particulas = [];
let jugador = 35;
let fondo;
let clic;
let jugadorimg;

function preload() {
  fondo = loadSound("terraria.mp3");
  clic = loadSound("arcade_fx.mp3");
  jugadorimg = loadImage("estrella.png");
}

function setup() {
  let area = createCanvas(windowWidth, windowHeight);
  area.position(0, 0);
  area.style("z-index", "-1"); // enviar al fondo
  fondo.loop();
  fondo.setVolume(0.2);

  for (let i = 0; i < 300; i++) {
    particulas.push(new Particulapequeña(random(width), random(height)));
  }
}

function mousePressed() {
  clic.play();
  clic.setVolume(1);
}

function draw() {
  clear();

  for (let i = particulas.length - 1; i >= 0; i--) {
    particulas[i].update();
    particulas[i].display();

    let comida = dist(mouseX, mouseY, particulas[i].pos.x, particulas[i].pos.y);

    if (comida < jugador / 2) {
      particulas.splice(i, 1);
      particulas.push(new Particulapequeña(random(width), random(height)));
      jugador += 0.7;
    }
  }

  imageMode(CENTER);
  image(jugadorimg, mouseX, mouseY, jugador, jugador);

  if (
    mouseX < jugador / 2 ||
    mouseX > width - jugador / 2 ||
    mouseY < jugador / 2 ||
    mouseY > height - jugador / 2
  ) {
    jugador = 35;
  }
}

var inbox;

function preload()
{
    inbox = loadImage('screens/inbox.png');
}

function setup() {
  // put setup code here
  createCanvas(1334,750);
}

function draw() {
  // put drawing code here
  image (inbox,0,0);
}

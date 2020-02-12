//LUCKY NUMBER

// function setup() {
//     // createCanvas(windowWidth, windowHeight);
//     // let titleText = createElement('h1', 'my lucky number is 9')
//     // let numText = createElement('p', '14');
//     // console.log(numText);
    
// }

// function mousePressed() {
//     createP('my lucky number is 0' + random(0,3));
// }

// function draw() {
//     background(220);
// }


//HELLO CLICKER

// let button
// let greeting

// function setup() {
//   createCanvas(windowWidth, windowHeight)

//   button = createButton('Try Me');
//   button.position(width / 2, height / 2)
//   button.mousePressed(greet)

//   greeting = createElement('h2', 'Say Hello!')
//   greeting.position(width / 2, height / 3)

//   textAlign(CENTER)
//   textSize(50)
// }

// function greet() {
//   greeting.html('HELLO!')

//   for (let i = 0; i < 200; i++) {
//     push();
//     fill(random(255), 255, 255);
//     translate(random(width), random(height))
//     rotate(random(2 * PI));
//     text('HELLO', 0, 0);
//     pop();
//   }
// }

//BANANA CATCHER

let banana

function setup () {
    createCanvas(windowWidth, windowHeight);
    banana = createImg('https://mycodingclass.co/wp-content/uploads/2020/02/banana-300x150.png');
    banana.mousePressed(youWin);
    heading = createElement('h1', 'Click the Banana!');
    heading.position = (width / 3, height / 4);
    frameRate(.25);
}

function draw() {
    banana.position(random(windowWidth),random(windowHeight))
}

function youWin() {
    heading.html('You Win!')
    remove(banana);
}
    
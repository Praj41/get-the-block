var canvas;
var canvasContext;
var posx1 = -200;
var posy1 = 300;
var movedirLR = 1;
var movedirUD = 1;
var moveside = 1;
let xposfd = 200;
let yposfd = 200;
let ctr = 0;
let speed = 0.5;        // adjust this and timeout on line 18 for lower refresh rate displays currently setup for 144Hz

window.onload = function () {
    console.log("Hello");
    var i;
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(draw , 7); // increase timeout to reduce speed
}

function draw() {
    move();
    kbinput();
    //console.log(posx1 , posx1 - 110 , posx1 - 220 , posx1 - 330);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(posx1, posy1, 50, 50);
    if((posx1 < xposfd - 50 || posx1 > xposfd + 50) || (posy1 < yposfd - 50 || posy1 > yposfd + 50))
    {
        canvasContext.fillStyle = 'red';
        canvasContext.fillRect( xposfd , yposfd , 50, 50);
    }
    else
    {
        xposfd = Math.random() * 750;
        yposfd = Math.random() * 750;
        ctr++;
        speed = speed + 0.1;
        console.log("Score is : " + ctr);
    }
}

function kbinput()
{
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37: {
                movedirLR = -speed;
                moveside = 1;
                break;
            }
            case 39:
            {
                movedirLR = speed;
                moveside = 1;
                break;
            }
            case 40 :
            {
                movedirUD = speed;
                moveside = 0;
                break;
            }
            case 38 :
            {
                movedirUD = -speed;
                moveside = 0;
                break;
            }
            default :
                break;
        }
    }
}

function move() {
    if(moveside == 1) {
        posx1 = posx1 + movedirLR;
    }
    else {
        posy1 = posy1 + movedirUD ;
    }
    if(posx1 >= 1130 || posy1 >= 900 || posy1 <= -100 || posx1 <= -300) {
        posx1 = 0;
        posy1 = 0;

    }
}
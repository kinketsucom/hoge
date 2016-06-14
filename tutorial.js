//testcase

var x = 0.0;
var y = 0.0;
var yspeed=10.0

var NUM = 10;
var ctx;
var canvas;
var counter = 0;


function init(){
    canvas = document.getElementById('tutorial');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');
    }
}

function add(){

    if (canvas.getContext){
        ctx.globalAlpha = 0.2;
        //円
        ctx.beginPath();
        ctx.arc(200,0,20,0,Math.PI*2.0,true);
        ctx.fill();
    setInterval(move,33);

    counter += 1;
    }
}



function move(){
    //円
    if(y <0||y>300){
        yspeed *= -1;
    }
    y += yspeed;
    ctx.globalCompositeOperation = "source-out";
    ctx.beginPath();
    ctx.arc(200,y,20,0,Math.PI*2.0,true);
    ctx.fill();
}


function draw(){
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
            //全体の透明度
            ctx.globalAlpha = 0.2;
            //円
            ctx.beginPath();
            ctx.arc(200,150,20,0,Math.PI*2.0,true);
            ctx.fill();
        }
    }
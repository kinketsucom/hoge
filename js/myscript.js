    var speedX = 0.0;
    var speedY = 0.0;
    var locX = 200;
    var locY = 0;
    var ctx;
    const FPS = 60;
    const TIME = 1000/FPS;
    const GRAVITY = 9.8;

    function init(){
    var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
            ctx = canvas.getContext('2d');
            setInterval(draw, TIME);
        }
    }

    function draw(){
    ctx.clearRect(0,0,400,500);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(8,8,12,.2)";
    // ctx.fillRect(0, 0, 400, 1000);

    //位置を更新
    locX += speedX;
    speedY += GRAVITY*TIME/1000;
    locY += speedY;
    
    //更新した座標で円を描く
    ctx.beginPath();
        ctx.fillStyle = '#3399FF';
        ctx.arc(locX, locY, 10, 0, Math.PI*2.0, true);
        ctx.fill();


    }
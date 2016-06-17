    var NUM =2;
    var speedX = new Array(NUM);
    var speedY = new Array(NUM);
    var locX = new Array(NUM);
    var locY = new Array(NUM);
    var r =  new Array(NUM);
    var g =  new Array(NUM);
    var b =  new Array(NUM);
    // var speedX = 0.0;
    // var speedY = 0.0;
    // var locX = 200;
    // var locY = 0;
    var ctx;
    const FPS = 30;
    const TIME = 1000/FPS;
    const GRAVITY = 9.8;

    function init(){
    var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
            ctx = canvas.getContext('2d');
            for(var i=0;i<NUM;i++){
                speedX[i]=0.0;
            //     speedY[i]=0.0;
                locX[i]=300;
            //     locY[i]=0;
                r[i] = Math.floor(Math.random() * 64);
                g[i] = Math.floor(Math.random() * 64);
                b[i] = Math.floor(Math.random() * 64);
            }
            speedY[0]=0.0;
            speedY[1]=-15;
            locY[0]=0.0;
            locY[1]=500;

            setInterval(draw, TIME);
        }
    }

    function draw(){
    ctx.clearRect(0,0,600,600);
    ctx.globalCompositeOperation = "source-over";

    //衝突判定




    //位置を更新
    for(var i=0; i<NUM; i++){
    locX[i] += speedX[i];
    speedY[i] += GRAVITY*TIME/1000;
    locY[i] += speedY[i];
    
    //更新した座標で円を描く
    ctx.beginPath();
        ctx.fillStyle = 'rgb(' + r[i] + ',' + g[i] + ',' + b[i] + ')';
        ctx.arc(locX[i], locY[i], 10, 0, Math.PI*2.0, true);
        ctx.fill();

    }
    

    }

    var NUM =2;
    var mass = new Array(NUM);
    var tmpspeedX1 = 0.0;
    var tmpspeedX2 = 0.0;
    var speedX = new Array(NUM);
    var speedY = new Array(NUM);
    var locX = new Array(NUM);
    var locY = new Array(NUM);
    var radius = new Array(NUM);
    var rebound = new Array(NUM);
    var averebound = 0.0;
    var r =  new Array(NUM);
    var g =  new Array(NUM);
    var b =  new Array(NUM);
    var distance = 0.0;
    var x=0;
    var y=0;
    var ctx;
    const FPS = 60;
    const TIME = 1000/FPS;
    const GRAVITY = 9.8;

    function init(){
    var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
            ctx = canvas.getContext('2d');
            for(var i=0;i<NUM;i++){
                mass[i]=1.0;
                speedX[i]=0.0;
                speedY[i]=0.0;
                locX[i]=300;
                locY[i]=0;
                radius[i]=30;
                rebound[i]=1.0;
                r[i] = Math.floor(Math.random() * 64);
                g[i] = Math.floor(Math.random() * 64);
                b[i] = Math.floor(Math.random() * 64);
            }
            speedY[0]=0.0;
            speedY[1]=-10;
            locY[0]=0.0;
            locY[1]=500;

            setInterval(draw, TIME);
        }
    }

    function draw(){
    ctx.clearRect(0,0,600,600);
    ctx.globalCompositeOperation = "source-over";

    //衝突判定ブロードブロードフェーズ(現在球のみ)
    for(var i=0; i<NUM;i++){
        for(var j=i+1;j<NUM;j++){
            x = Math.pow(locX[i]-locX[j],2);
            y = Math.pow(locY[i]-locY[j],2);
           if(Math.sqrt(x+y) < radius[i]+radius[j]){
                document.getElementById("str").textContent="衝突";
                //衝突判定ナローフェーズ
                //球の場合はもう不必要なので追記するだけ
                //相加平均で捉える
                averebound = (rebound[i]+rebound[j])/2;
                //衝突時の初速の更新
                tmpspeedX1 = (mass[i]-mass[j]*averebound)*speedX[i]+mass[j]*(1+averebound)*speedX[j];
                tmpspeedX2 = mass[i]*speedX[i]*(1+averebound)+(-mass[i]*averebound+mass[j])*speedX[j];
                speedX[i] = tmpspeedX1 / (mass[i]+mass[j]);
                speedX[j] = tmpspeedX2 / (mass[i]+mass[j]);

                tmpspeedY1 = (mass[i]-mass[j]*averebound)*speedY[i]+mass[j]*(1+averebound)*speedY[j];
                tmpspeedY2 = mass[i]*speedY[i]*(1+averebound)+(-mass[i]*averebound+mass[j])*speedY[j];
                speedY[i] = tmpspeedY1 / (mass[i]+mass[j]);
                speedY[j] = tmpspeedY2 / (mass[i]+mass[j]);
                console.log(speedY[i])
           }else{
                document.getElementById("str").textContent="はなれた";
           }
        }
    }

    //位置を更新
    for(var i=0; i<NUM; i++){
    locX[i] += speedX[i];
    speedY[i] += GRAVITY*TIME/1000;
    locY[i] += speedY[i];
    
    //更新した座標で円を描く
    ctx.beginPath();
        ctx.fillStyle = 'rgb(' + r[i] + ',' + g[i] + ',' + b[i] + ')';
        ctx.arc(locX[i], locY[i], radius[i], 0, Math.PI*2.0, true);
        ctx.fill();

    }
    

    }




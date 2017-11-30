var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 100
var y = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function deleteCanvas(){
    ctx.clearRect(0, 0, 200, 100);
    ctx.beginPath();
}

async function draw() {
    while(x < 5000) {
        x = y/2;
        y++;
        if(x == 1000) {
            x = 1;
        } else {
            ctx.moveTo(100,50);
            ctx.lineTo(200,x);
            ctx.stroke();
            await sleep(10);
            deleteCanvas();
        }
        
    }
}



draw();
    

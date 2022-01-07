canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

r_w= 100;
r_h= 90;

b_img="mars.jpg";
r_img="rover.png"

r_y=10;
r_x=10;

function add() {
    b_imgTag=new Image();
b_imgTag.onload=uploadBackround;
b_imgTag.src=b_img;


r_imgTag=new Image();
r_imgTag.onload=uploadRover;
r_imgTag.src=r_img;
}

function uploadBackround() {
    ctx.drawImage(b_imgTag,0,0,canvas.width,canvas.height);

}

function uploadRover() {
    ctx.drawImage(r_imgTag,r_x,r_y,r_w,r_h);
    
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    
    console.log (keyPressed);
    if (keyPressed=='38')   {
        up();
        console.log("up");
        
    }
    if (keyPressed=='40')   {
        down();
        console.log("Down");
        
    }
    if (keyPressed=='37')   {
        left();
        console.log("left");
    }
    if (keyPressed=='39')   {
        right();
        console.log("Right");
    }
}

function up() {
if (r_y>0){
    r_y=r_y-10;
    uploadBackround();
    uploadRover();
}
}

function down () {
    if (r_y<500) {
        r_y=r_y+10;
        uploadBackround();
        uploadRover();
    }


}


function left () {
    if (r_x>0) {
        r_x=r_x-10;
        uploadBackround();
        uploadRover();
    }


}

function right () {
    if (r_x<700) {
        r_x=r_x+10;
        uploadBackround();
        uploadRover();
    }


}













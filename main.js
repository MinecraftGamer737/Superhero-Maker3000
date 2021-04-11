var canvas=new fabric.Canvas("myCanvas");

playerX=10;
playerY=10;

blockimgwidth=30;
blockimgheight=30;

var playerobjt="";
var blockimgobjt="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        playerobjt=Img;
        playerobjt.scaleToWidth(150);
        playerobjt.scaleToHeight(140);


        playerobjt.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerobjt);
    }
    );
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        blockimgobjt=Img;
        blockimgobjt.scaleToWidth(blockimgwidth);
        blockimgobjt.scaleToHeight(blockimgheight);
        blockimgobjt.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockimgobjt);
    }
    );
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true&&keypressed=="80")
    {
        console.log("P&shift pressed together")
        blockimgwidth=blockimgwidth+10;
        blockimgheight=blockimgheight+10;
        document.getElementById("current_width").innerHTML=blockimgwidth;
        document.getElementById("current_height").innerHTML=blockimgheight;
        
    }
    if(e.shiftKey==true&&keypressed=="77")
    {
        console.log("M&shift pressed together")
        blockimgwidth=blockimgwidth-10;
        blockimgheight=blockimgheight-10;
        document.getElementById("current_width").innerHTML=blockimgwidth;
        document.getElementById("current_height").innerHTML=blockimgheight;
        
    }

    if(keypressed=="38")
    {
         up();
         console.log("up");
    }

    if(keypressed=="40")
    {
         down();
         console.log("down");
    }

    if(keypressed=="37")
    {
         left();
         console.log("left");
    }

    if(keypressed=="39")
    {
         right();
         console.log("right");
    }

    if(keypressed=="72")
    {
         new_image("hulkd_body.png")
         console.log("h");
    }

    if(keypressed=="83")
    {
         new_image("spiderman_face.png")
         console.log("s");
    }

    if(keypressed=="84")
    {
         new_image("thor_right_hand.png")
         console.log("t");
    }

    if(keypressed=="73")
    {
         new_image("ironman_legs.png")
         console.log("i");
    }

    if(keypressed=="67")
    {
         new_image("captain_america_left_hand.png")
         console.log("c");
    }

    
}
function left()
{
    if(playerX>0)
    {
        playerX=playerX-10;
        console.log("when left arrow is pressed, X= "+playerX+" &Y= "+playerY);
        canvas.remove(playerobjt);
        player_update();
    }
}

function right()
{
    if(playerX<=850)
    {
        playerX=playerX+10;
        console.log("when right arrow is pressed, X= "+playerX+" &Y= "+playerY);
        canvas.remove(playerobjt);
        player_update();
    }
}

function up()
{
    if(playerY>=0)
    {
        playerY=playerY-10;
        console.log("when up arrow is pressed, X= "+playerX+" &Y= "+playerY);
        canvas.remove(playerobjt);
        player_update();
    }
}

function down()
{
    if(playerY<=500)
    {
        playerY=playerY+10;
        console.log("when down arrow is pressed, X= "+playerX+" &Y= "+playerY);
        canvas.remove(playerobjt);
        player_update();
    }
}
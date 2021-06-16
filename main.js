var canvas = new fabric.Canvas('myCanvas');

block_w = 30; block_h = 30;

player_x = 10; player_y = 10;


var player_object = "";

//player_object is used to create the minecraft_player on the screen--> 
function player_update(){

    fabric.Image.fromURL("player.png", function(Img){

        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

        top:player_y,
        left:player_x
        });

        canvas.add(player_object);
    });
}

var block_object = "";

//New_Image function is creating the block_image-->
function new_image(get_image){

    fabric.Image.fromURL(get_image, function(Img){
    block_object = Img;

    block_object.scaleToWidth(block_w);
    block_object.scaleToHeight(block_h);
    block_object.set({
    top:player_y,
    left:player_x

    });
    canvas.add(block_object);

    });
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == '80'){

        console.log("p and Shift is Pressed together");

        block_w = block_w + 10;
        block_h = block_h + 10;
        document.getElementById("current_width").innerHTML = block_w;
        document.getElementById("current_height").innerHTML = block_h;
        
    }



    if(e.shiftKey == true && keypressed == '77'){

        console.log("m and Shift is Pressed together");

        block_w = block_w - 10;
        block_h = block_h - 10;
        document.getElementById("current_width").innerHTML = block_w;
        document.getElementById("current_height").innerHTML = block_h;
        
    }

    if(keypressed == '37'){

        left();
        console.log("Left");
    }

    if(keypressed == '38'){

        up();
        console.log("Up");
    }

    if(keypressed == '39'){

        right();
        console.log("Right");
    }

    if(keypressed == '40'){

        down();
        console.log("Down");
    }

    if(keypressed == '87'){

        console.log("w");
        new_image('wall.jpg');
    }

    if(keypressed == '71'){

        console.log("g");
        new_image('ground.png');
    }

    if(keypressed == '76'){

        console.log("l");
        new_image('light_green.png');
    }

    if(keypressed == '84'){

        console.log("t");
        new_image('trunk.jpg');
    }

    if(keypressed == '82'){

        console.log("r");
        new_image('roof.jpg');
    }

    if(keypressed == '89'){

        console.log("y");
        new_image('yellow_wall.png');
    }

    if(keypressed == '68'){

        console.log("d");
        new_image('dark_green.png');
    }

    if(keypressed == '67'){

        console.log("c");
        new_image('cloud.jpg');
    }

    if(keypressed == '85'){

        console.log("u");
        new_image('unique.png');
    }
}

function up(){

    if( player_y >= 0){

        player_y = player_y - block_h;
        console.log("Block Image Height = "+ block_h);
        console.log("When up arrow key is pressed, x =" + player_x + " And y = " + player_y);
        canvas.remove(player_object);
        player_update();
    } 
}

function down(){

    if( player_y <= 500){

        player_y = player_y + block_h;
        console.log("Block Image Height = "+ block_h);
        console.log("When Down arrow key is pressed, x =" + player_x + " And y = " + player_y);
        canvas.remove(player_object);
        player_update();
    } 
}

function left(){

    if( player_x >= 0){

        player_x = player_x - block_w;
        console.log("Block Image Width = "+ block_w);
        console.log("When left arrow key is pressed, x =" + player_x + " And y = " + player_y);
        canvas.remove(player_object);
        player_update();
    } 
}

function right(){

    if( player_x <= 850){

        player_x = player_x + block_w;
        console.log("Block Image Width = "+ block_w);
        console.log("When Right arrow key is pressed, x =" + player_x + " And y = " + player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
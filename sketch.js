var gameState = 0;
var button;

function preload(){
    loading_screen = loadImage("./images/loadingscreen.png")
    plank = loadImage("./images/plank.png");
    level_one = loadImage("./images/levelone.png");
    bubbles = loadSound("./sounds/bubbles.mp3")
    tunaImg = loadImage("./images/fish_two.png")

}
function setup(){
    createCanvas(1280,670);
    game = new Game();
    game.start();
    console.log(bubbles);
    // bubbles.play();
    wood_plank = createSprite(100,100);
    wood_plank.addImage(plank);
    wood_plank.scale = 0.5;
}
function draw(){

    if(gameState === 0) {

        background(loading_screen)
    }
    if(gameState === 1) {
        background(level_one);
        first_level();
        controls(wood_plank)
        drawSprites();
    }


}

function first_level(){
        var fishRandom = Math.round(random(0,2));
  
        if(fishRandom === 1){
            console.log(3)
            if(frameCount%110 === 0){
                tuna1 = createSprite(1200, random(70,600));
                tuna1.addImage(tunaImg)
                tuna1.velocityX = -3.4
                tuna2 = createSprite(tuna1.x+60, tuna1.y+30);
                tuna2.addImage(tunaImg)
                tuna2.velocityX = -3.4
                tuna3 = createSprite(tuna1.x+40, tuna1.y-40);
                tuna3.addImage(tunaImg)
                tuna3.velocityX = -3.4
            }
        }
        else{
            console.log(5)
            if(frameCount%110 === 0){
                tuna1 = createSprite(1200, random(70,600));
                tuna1.addImage(tunaImg)
                tuna1.velocityX = -3.4
                tuna2 = createSprite(tuna1.x+60, tuna1.y+30);
                tuna2.addImage(tunaImg)
                tuna2.velocityX = -3.4
                tuna3 = createSprite(tuna1.x+40, tuna1.y-40);
                tuna3.addImage(tunaImg)
                tuna3.velocityX = -3.4
                tuna4 = createSprite(tuna1.x+95, tuna1.y);
                tuna4.addImage(tunaImg)
                tuna4.velocityX = -3.4
                tuna5 = createSprite(tuna1.x-40, tuna1.y+40);
                tuna5.addImage(tunaImg)
                tuna5.velocityX = -3.4
            }
        }  
}

function controls(sprite){
    sprite.velocityY = 1
    if(keyDown(UP_ARROW)){
        sprite.velocityY -= 3
    }
    if(keyDown(DOWN_ARROW)){
        sprite.velocityY += 2.5
    }
    if(keyDown("R")){
        sprite.rotation += 10;
    }
}
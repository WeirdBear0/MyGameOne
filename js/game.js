class Game {
    constructor(){
        this.button = createButton("PLAY")
    }
    start(){
        background(loading_screen);
        this.button.position(880,630);
        this.button.mousePressed(() => {
            this.button.hide();
            gameState = 1;
        })
        this.button.addClass('buttonPlay')
    }
    stage_one(){

    }

}
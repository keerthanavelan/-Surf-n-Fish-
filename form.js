class Form{
    constructor(){
        this.button = createButton("Start Surfing");
        //this.story = createElement('h2');
        this.instruction1 = createElement('h2');
        this.instruction2 = createElement('h2');
        this.instruction3 = createElement('h2');
        this.score = createElement('h2');
        this.lives = createElement('h2');
        //this.next = createButton("Instructions");
    }
    hide(){
        this.button.hide();
        //this.story.hide();
        this.instruction1.hide();
        this.instruction2.hide();
        this.instruction3.hide();
    }
    // show(){
    //     this.reset.show();
    // }
    display(){
        //image(title, 0, displayWidth/2, displayHeight/2, 300);
        //this.reset.hide();
        this.button.style('color', 'white');
        this.button.style('background', 'darkblue');
        this.button.position(displayWidth/2, displayHeight/2 + 100, 200, 200);
        this.button.style('width', '200px');
        this.button.style('height', '40px');

        // this.story.html("You and your friend go to the beach and your friend goes to surf. She reaches an Island and asks you to come after collecting 20fishes. So you decide to Surf 'n' Fish!")
        // this.story.position(displayWidth-300, displayHeight/2 - 200);

        this.instruction1.style('color', 'red');
        this.instruction1.html("Collect the fishes and avoid the rocks, sea weed and waves.");
        this.instruction1.position(displayWidth/2-500, displayHeight/2-100);

        this.instruction2.style('color', 'red');
        this.instruction2.html("The rocks and sea weed make you lose a fish and waves make you lose lives");
        this.instruction2.position(displayWidth/2-500, displayHeight/2-50);

        this.instruction3.style('color', 'red');
        this.instruction3.html("You need to collect 20 fishes and you have only 5 lives.");
        this.instruction3.position(displayWidth/2-500, displayHeight/2);

        

        noStroke();
        this.button.style('color', 'darkblue');
        this.button.style('background', 'skyblue');
        this.button.position(displayWidth/2, displayHeight/2 + 100, 200, 200);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        //.button.scale = 1;
        this.button.mousePressed(()=>{
            gameState = 1;
            this.score.html("Score: " + score);
            this.score.position(displayWidth/4-100, displayHeight/4 - 100);
            this.lives.html("Lives: " + score);
            this.lives.position(displayWidth/4-100, displayHeight/4 - 100);
        });
        // this.reset.mousePressed(()=>{
        //     gameState = 0;
        // });
    }   
}
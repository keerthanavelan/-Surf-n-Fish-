var water, player, rock, fish, player_img, rock_img, form, waves, seaWeed, fish_img, waves_img, title, t, seaWeed_img;
var score, Fish_group, backgroundScene, Rocks_group, SeaWeed_group, Waves_group, friend;
var gameState = 0, lives, gameOver, gameOver_img, youWin, youWin_img, scene1, scene2;
var game, story, scoreD, livesD;

function preload(){
    water = loadImage("imgs/ocean background.jpeg");
    seaWeed_img = loadImage("imgs/seaWeed.png");
    player_img = loadImage("imgs/down.png");
    rock_img = loadImage("imgs/rock.png");
    fish_img = loadImage("imgs/fish.png");
    youWin_img = loadImage("imgs/youWin.png");
    friend = loadImage("imgs/Friend.png");
    waves_img = loadImage("imgs/wave.png")
    title = loadImage("imgs/title.png");
    gameOver_img = loadImage("imgs/gameOver.png");
    scene1 = loadImage("imgs/instruct2.png");
    scene2 = loadImage("imgs/instruct.jpeg");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    console.log(windowWidth);
    console.log(windowHeight);
    score = 0;
    scoreD = createElement('h2');
    lives = 5;

    
    
    Fish_group = createGroup();
    Rocks_group = createGroup();
    SeaWeed_group = createGroup();
    Waves_group = createGroup();
    player = createSprite(75, 200, 10, 10);
    player.addImage("player", player_img);
    player.scale = 0.3;
    game = new Game();
    form = new Form();
}

function draw(){
    // if(backgroundScene)
       

    // fill("black");
    // textSize(25);
    // text("Score: " + score, windowWidth/2, windowHeight/2 - 100);
    // fill("black");
    // textSize(25);
    // text("Lives: " + lives, windowWidth/2-100, windowHeight/2 - 100);

    player.depth = player.depth + 100;
   
   console.log
    if(gameState === 0){
        form.display();
        background(scene1);
        t=createSprite(windowWidth/2-550, windowHeight/2-250, 10, 10);
        t.addImage("title", title);
        t.scale=0.3;
        //backgroundScene.addImage("scene1", scene1);
    }

    else if(gameState === 1){
        form.score.html("Score: " + scoreD)
        form.score.position(windowWidth/4-100, windowHeight/4 - 100);
        form.lives.html("Lives: " + livesD)
        form.lives.position(windowWidth/4-100, windowHeight/4 - 50);
        game.play();
        form.hide();
        game.score();
        backgroundScene = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
        backgroundScene.depth = backgroundScene.depth-100;
        backgroundScene.addImage("bg", water);
        backgroundScene.scale = 5.2;
        scoreD = score.toFixed();
        livesD = lives.toFixed();

        //backgroundScene = createSprite(windowWidth/2, windowHeight/2, 10, 10);
        //backgroundScene.addImage("bg", water);
        backgroundScene.velocityX = -10;
        backgroundScene.depth = backgroundScene.depth-1;
        if(backgroundScene.x < 0){
            backgroundScene.x = backgroundScene.width/2;
        }
        if(player.isTouching(Fish_group)){
            score=score+0.1;
            Math.round(score * 10)/10;
            fish.destroy();
            Fish_group.visible = false;
            //score.toFixed(1);
        }
        if(player.isTouching(Rocks_group)){
            score=score-0.1;
            Math.round(score * 10)/10;
            console.log(score);
            rock.destroy();
            //score.toFixed(1);
        }
        
        if(player.isTouching(Waves_group) ){
            lives=lives-0.1;
            Math.round(lives * 10)/10;
            console.log( "lives " + lives);
            waves.destroy();
            //lives.toFixed(1);
        }
        if(player.isTouching(SeaWeed_group)){
            score=score-0.1;
            Math.round(score * 10)/10;
            console.log(score);
            seaWeed.destroy();
            //score.toFixed(1);
        }
        if(score<=0){
            score=0;
        }
        if(lives<=0){
            lives=0;
            gameState = 3;
        }
        player.y = mouseY;
        game.display();
        if(score >= 20){
            gameState=2;
        }
    }
    else if(gameState === 2){
        game.end();
        background(friend);
        player.destroy();
        backgroundScene.destroy();
        seaWeed.destroy();
        waves.destroy();
        fish.destroy();
        rock.destroy();
        youWin = createSprite(windowWidth/2, windowHeight/2);
        youWin.addImage("you win", youWin_img);
        //form.show();
    }
    else if(gameState === 3){
        // player.destroy();
        // backgroundScene.destroy();
        // seaWeed.destroy();
        // waves.destroy();
        // fish.destroy();
        // rock.destroy();
        gameOver = createSprite(windowWidth/2, windowHeight/2);
        gameOver.addImage("game over", gameOver_img);
        backgroundScene.velocityX = 0;
        seaWeed.velocityX = 0;
        rock.velocityX = 0;
        waves.velocityX = 0;
        form.show();
    }
    drawSprites();
    //keyPressed();
}

function keyPressed(){
    if(keyCode === 32 && gameState === 2 || gameState === 3){
        gameState = 0;
        score = 0;
        lives = 0;
    }
}

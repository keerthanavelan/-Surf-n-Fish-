class Game{
    constructor(){

    }
    display(){
                
    }
    play(){
        if(World.frameCount % 60 === 0){
            fish = createSprite(displayWidth, random(10, displayHeight), 40, 40);
            fish.addImage("fish", fish_img);
            fish.scale = 0.3;
            fish.velocityX = -10;
            Fish_group.add(fish);
        }
        if(World.frameCount % 86 === 0){
            seaWeed = createSprite(displayWidth, random(10, displayHeight), 20, 20);
            seaWeed.addImage("sea weed", seaWeed_img);
            seaWeed.scale = 0.3;
            seaWeed.velocityX = -10;
            SeaWeed_group.add(seaWeed);
        }
        if(World.frameCount % 70 === 0){
            waves = createSprite(displayWidth, random(10, displayHeight), 35, 35);
            waves.addImage("wave", waves_img);
            waves.scale = 0.2;
            waves.velocityX = -10;
            Waves_group.add(waves);
        }
        if(World.frameCount % 106 === 0){
            rock = createSprite(displayWidth, random(10, displayHeight), 50, 50);
            rock.addImage("rock", rock_img);
            rock.scale = 0.2;
            rock.velocityX = -10;
            Rocks_group.add(rock);
        }
    }

    end(){
        
        if(score >= 20 && score <= 21){
            console.log("GAME OVER!");
            image(friend, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
            //friend.scale = 5.2;
        }
    }

    score(){
        
    }
}
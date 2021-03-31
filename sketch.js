var backGround, backgroundIMG;
var hero, heroIMG;
var invisibleGround;
var zombie1,zombie2,zombie3;

function preload(){

backgroundIMG = loadImage("images/background.png")

heroIMG = loadImage("images/hero.png");

zombie1 = loadImage("images/zombie1.png");

zombie2 = loadImage("images/zombie2.png");

zombie3 = loadImage("images/zombie3.png");



}


function setup() {
createCanvas(600,300)

backGround= createSprite(width/2,height/2,width,height);
backGround.addImage("ground",backgroundIMG);
backGround.scale=1.5;

hero = createSprite(100,height-50,20,50);
hero.addImage("hero",heroIMG);
hero.scale=0.2;
//hero.debug=true;
hero.setCollider("rectangle",0,0,180,340);
invisibleGround= createSprite(50,height,150,10);
invisibleGround.visible=false;




}




function draw() { 
    background(0);

backGround.velocityX=-1;
if(backGround.x<0){
    backGround.x=300;
}

if(keyDown("space")){
    hero.velocityY=-7;
}
hero.velocityY+=0.5;
hero.collide(invisibleGround);

spawnZombies();

drawSprites();
}



function spawnZombies(){

    if(frameCount%200===0){

        var zombie = createSprite(width,height-50,50,100);
        zombie.velocityX=-2;
        var rand=Math.round(random(1,3));

            switch(rand){
                case 1: zombie.addImage("zombie",zombie1);
                        
                        zombie.scale=0.3;
                        break;
                case 2: zombie.addImage("zombie",zombie2);
                        zombie.y=height-70;
                        zombie.scale=0.2;
                        break;
                case 3: zombie.addImage("zombie",zombie3);
                        zombie.scale=0.4;
                        break;
            } 

        
    }







}
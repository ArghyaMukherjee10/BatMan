var str = "string" // string
console.log(str)
var no = 10 // number
console.log(no)

var bool = true;  // boolean
console.log(bool)
var obj ;     // undefined
console.log(obj)
obj = null;  // null
console.log(obj)
var arr = [true,30,"string",[false,87,"string1"]] 
console.log(arr)
console.log(arr[0])
console.log(arr[3][1])

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var man,walkImage;
var thunderCreatedFrame,thunder,thunder1,thunder2,
thunder3,thunder4;
var rainDrop = [];

function preload(){
    walkImage = loadAnimation("walking_1.png","walking_2.png","walking_3.png",
    "walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(650,800);
    
    man = createSprite(325,600,100,100);
    man.addAnimation("walking",walkImage)
    man.scale = 0.5;

    
    if (frameCount%80===0){
        var maxDrops = 100;
        for(var i = 0 ; i<maxDrops ; i++){
            rainDrop.push(new Drop(random(0,400), random(0,400)))
        }
    }
    
}

function draw(){
    background(0)
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder =createSprite(random(10,370),random(40,60),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime = 60
    }
    for (var j = 0 ; j<maxDrops ; j++){
        rainDrop[j].rainPosition();
        rainDrop[j].display(); 
    }
    drawSprites();
}   


//Create variables here
var dog
var happyDog 
var database 
var foodS
var foodStock
var dog1,dog2

function preload(){

  dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")

}

function setup(){
  database = firebase.database()
  console.log(database)
  
	createCanvas(500, 500);

  dog = createSprite(250,250)
  dog.addImage(dog1)
  dog.scale = 0.2

  foodStock = database.ref("Food")
  foodStock.on("value",readStock);
  foodStock.set(20)

}


function draw() {  
  background("lightpink") 

  textSize(20);
  fill("black")
  text("Note: Press UP_ARROW Key to feed 'ROCKY' milk",25,50);
  textSize(30);
  fill("red")
  text("Food Remaining = " + foodS , 40,100);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1)
    dog.addImage(dog2)
 }

  drawSprites();
}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}


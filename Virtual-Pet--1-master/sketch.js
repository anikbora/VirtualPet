//Create variables here
var dogImg;
var happyDogImg;
var database;
var foodS;
var foodStock;
var dog;
var happyDog;

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")

	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 10, 10)
  dog.addImage('dog', dogImg)
  database = firebase.database()
  
  foodStock = database.ref('food')
  foodStock.on("value", readStock)
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy)
  }

  //add styles here


}




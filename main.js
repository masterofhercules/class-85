canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
 nasa_mars_image_array=["mars land.jpg","download.jpg","alien.jpg","mountain.jpg"]
 randomnumber=Math.floor(Math.random()*4)
 console.log(randomnumber)
roverwidth=100
roverheight=90
backgroundimage=nasa_mars_image_array[randomnumber]

roverimage="rover.png"
roverx=10
rovery=10
function add(){
    background_imgtag=new Image()
    background_imgtag.onload=uploadbackground
    background_imgtag.src=backgroundimage
   
    rover_imgtag=new Image()
    rover_imgtag.onload=uploadrover
    rover_imgtag.src=roverimage
} 
 function uploadbackground(){
     ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
 }

 function uploadrover(){
    ctx.drawImage(rover_imgtag,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown",my_keydown)

function my_keydown(e) {
    keyPressed=e.keyCode
    console.log(keyPressed)
    if(keyPressed=="38") {
        up()
        console.log("up")
    }
    if(keyPressed=="40") {
        down()
        console.log("down")
    }
    if(keyPressed=="37") {
        left()
        console.log("left")
    }
    if(keyPressed=="39") {
        right()
        console.log("right")
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10
        console.log("when up arrow is pressed,x="+roverx+"y="+rovery)
        uploadbackground()
        uploadrover()
    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10
        console.log("when down arrow is pressed,x="+roverx+"y="+rovery)
        uploadbackground()
        uploadrover()
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10
        console.log("when left arrow is pressed,x="+roverx+"y="+rovery)
        uploadbackground()
        uploadrover()
    }
} 
function right(){
    if(roverx<=700){
        roverx=roverx+10
        console.log("when right arrow is pressed,x="+roverx+"y="+rovery)
        uploadbackground()
        uploadrover()
    }
}
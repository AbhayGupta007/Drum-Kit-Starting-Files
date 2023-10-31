for (var i = 0; i < document.querySelectorAll(".drum").length; i++) 
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    makesound(this.innerHTML);
    buttonanimation(keypressed);
  });
}

function makesound(name) {
  switch (name) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    default:
      console.log(this.innerHTML);
      break;
    }
}

document.addEventListener("keypress", drumkey);

function drumkey(event){
    var keypressed = event.key;
    makesound(keypressed);
    buttonanimation(keypressed);
}

function buttonanimation(currentkey){
    var currentclass = document.querySelector("." + currentkey);
    currentclass.classList.add("pressed");
    
    setTimeout(function(){
      currentclass.classList.remove("pressed");
    }, 200);
}
var numberOfButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        addAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function(event){
    
    makeSound(event.key);

    addAnimation(event.key);

});

function makeSound(key){

        switch(key){
            case "a":
                var tom1 = new Audio('tom-1.mp3');
                tom1.play();
                break;

            case "s":
                var tom2 = new Audio('tom-2.mp3');
                tom2.play();
                break;

            case "d":
                var tom3 = new Audio('tom-3.mp3');
                tom3.play();
                break;

            case "f":
                var tom4 = new Audio('tom-4.mp3');
                tom4.play();
                break;

            case "g":
                var snare = new Audio('snare.mp3');
                snare.play();
                break;

            case "h":
                var kicks = new Audio('kick-bass.mp3');
                kicks.play();
                break;

            case "j":
                var crash = new Audio('crash.mp3');
                crash.play();
                break;

            default:
                console.log(key);
        }
    }




    function addAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}
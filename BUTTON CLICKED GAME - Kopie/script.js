var clickedamount = 0;
const clickmebutton = document.getElementById("btn");
const timer = document.getElementById("timesclicked")
const comm = document.getElementById("comments")
const mouseclicksound = new Audio('soundeffects/mixkit-classic-click-1117.wav');
const blingsound = new Audio('soundeffects/ding-idea-40142.mp3');




clickmebutton.addEventListener('click', function() {

clickedamount++;   

mouseclicksound.play();

 timer.textContent = clickedamount;
 
 if (clickedamount == 25) {

    blingsound.play();

    comm.textContent = ("KEEP GOING :D") 


    
}



})



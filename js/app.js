/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let newGame=new Game();

let kwertyKeys=document.getElementById("qwerty");//qwertydiv


let startButton=document.getElementById("btn__reset");
//let overlay=document.getElementById("overlay");


//add event listener to start button
//Call startGame when the startButton is clicked
startButton.addEventListener("click", e=>
{
   newGame.startGame()
    //overlay.style.display="none";
})


kwertyKeys.addEventListener("click",e=>
{
    if(e.target.tagName=="BUTTON")
    {
        console.log(e.target.innerHTML);
    }
})


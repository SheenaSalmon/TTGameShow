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


//adds event listener to the kwerty div,
//check wether a button was press and if so, calls handleIneraction
kwertyKeys.addEventListener("click",e=>
{
    if(e.target.tagName=="BUTTON")
    {
        //console.log(e.target.innerHTML);
        console.log(e.target.innerHTML);
       
        newGame.handleInteraction(e);
        
    }
})
document.addEventListener("keyup", e=>
{
    console.log(e.key);
    let keyPressed=e.key;
    if( /^[a-z]$/i.test(keyPressed) == true)
    {
        console.log(`The key presse is ${keyPressed}`);
   
    let screenKeys=Array.from(document.querySelectorAll(".key"));
    let newkep=screenKeys.filter( kep =>
        {
            return kep.innerHTML==keyPressed.toLowerCase();
        });

        console.log(newkep[0]);
    
        newkep[0].click();

       // console.log(screenKeys);
    //console.log(screenKeys[1].innerHTML)
    }
}
)



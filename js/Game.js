/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
/**
 * Creates a new Game
 * @class
 */
 class Game
 {
    /**
     * Represents a Game
     * @constructor
     * 
     */ 
  

     constructor(){
         this.missed=0;
         this.phrases=this.initializePhrases();
         this.ActivePhrase=null;
     }
     //removes the game overlay
     startGame()
     {
        let overlay=document.getElementById("overlay");
        overlay.style.display="none";
        this.ActivePhrase=this.getRandomPhrase();
        //console.log(this.ActivePhrase);
        this.ActivePhrase.addPhraseToDisplay();

     }
     //Array that holds a string of phrase 
      phraseArray=["A Piece of Cake", "let bygones be bygones","Slow And Steady Wins The Race","Swinging For The Fences","Roll With The Punches"];

      //Create the array of a phrase objects
     initializePhrases()
     {
        return this.phraseArray.map( phr=>
            {
                let phrase=new Phrase(phr);
               // console.log(phrase);
                return phrase;
            })
     }
     /**
      * Returns a randomly selected string phrase
      * @return {string} a phrase
      */
     getRandomPhrase()
     {
         let num=Math.floor(Math.random()*this.phrases.length);
         return(this.phrases[num]);
     }

     handleInteraction(e)
     {
        
        e.target.disabled=true;
        let letter=e.target.innerHTML;
        if(this.ActivePhrase.checkLetter(letter)==true)
        {
            e.target.className = e.target.className +" chosen";
            this.ActivePhrase.showMatchedLetter(letter);
            this.checkForWin();

        }
        else{
            e.target.className = e.target.className +" wrong";
            this.removeLife();
        }
     }

     removeLife()
     {
         let heartLife=document.querySelectorAll("#scoreboard ol li img");
         heartLife[this.missed].setAttribute("src","images/lostHeart.png");
         this.missed++;
         if(this.missed>=5)
         {
            this.gameOver(false);
         }
     }

     checkForWin()
     {
        let hiddenLetters=document.getElementsByClassName("hide");
        if (hiddenLetters.length==0)
        {
           setTimeout(()=>this.gameOver(true),2000);
            
            //return true;
        }
        else
        {
            return false;
        }
     }

     /**
      * 
      * @param {boolean} win
      * Dispalys Wether the user won the game, and then calls reserGame() 
      */
     gameOver(win)
     {
        let overlay=document.getElementById("overlay");
        let gameMessage=document.getElementById("game-over-message");
        //gameMessage.innerText="Congratulations, You are the Winner";
        overlay.style.display="";
        if(win==true)
        {
            overlay.className="win";
            gameMessage.innerText="Congratulations, You are the Winner";
        }
        else{
            overlay.className="lose";
            gameMessage.innerText="Sorry,  You ran out of lives.  Let's Play Again";
        }
        this.resetGame();
     }
     /**
      * Method Resets the Game with hears, resets onscreen keyboard
      */
     resetGame()
     {
        let phraseUL= document.querySelector("#phrase ul");
        phraseUL.innerHTML="";
        let keys=document.getElementsByClassName("key");
        for(let i=0; i<keys.length; i++)
        {
            keys[i].className="key";
            keys[i].disabled=false;
        }

        let heartLife=document.querySelectorAll("#scoreboard ol li img");
        for(let i=0; i<heartLife.length; i++)
        {
         heartLife[i].setAttribute("src","images/liveHeart.png");

        }
     }


 }
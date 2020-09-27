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
        console.log(this.ActivePhrase);
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
                console.log(phrase);
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

 }
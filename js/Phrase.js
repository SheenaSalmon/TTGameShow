/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase
 {
     constructor(phrase)
     {
        this.phrase=phrase.toLowerCase();

     }

     addPhraseToDisplay()
     {
        let phraseUL= document.querySelector("#phrase ul");
       // console.log(phraseUL);
        //phraseUL.insertAdjacentHTML("afterbegin","<li>Hello There</li>");
        let phraseOut="";
        for(let i=0; i< this.phrase.length ; i++)
        {
            if(this.phrase[i]==" ")
            {
                phraseOut +=`<li class="space hide ${phrase[i]}" id="${i}">${this.phrase[i]}</li>`;

            }
            else{
                phraseOut+=`<li class="letter hide ${phrase[i]}" id="${i}">${this.phrase[i]}</li>`
            }
           
        }
        phraseUL.innerHTML=phraseOut;
        console.log(phraseUL.innerHTML);

        
     }

     //Check if letter selected by the user is a part of the hrase
     checkLetter()
     {
        return false;
     }

     showMatchedLetter()
     {

        
     }


 }
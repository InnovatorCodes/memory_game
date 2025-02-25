//import { useState,useEffect } from "react";
import Card from "./Card";
import logo from './assets/friends_logo_white.png'
import helpsvg from './assets/help_white.svg'

export default function MemoryGame(){
    //const [selected, setSelected] = useState([])
    const characters=["Ross", "Chandler", "Joey", "Monica", "Rachel", "Phoebe","Janice", "Mike", "Richard","Emily", "Frank", "Estelle", "Gunther", "Ben", "Marcel"];
    const shuffledCharacters=shuffle(characters);
    const characterCards=shuffledCharacters.map((character,index)=><Card name={character} key={index} />);
    function shuffle(array){ 
        let shuffledArray=[];
        array.forEach((character)=>shuffledArray.push(character));
        for (let i = shuffledArray.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
        } 
        return shuffledArray; 
    }
    


    return(
        <>
            <div className="header">
                <img src={logo} alt="FRIENDS Logo" className="logo" />
                <img src={helpsvg} alt="Help" className="help" />
            </div>
            <div className="main">
                <div className="cards">
                    {characterCards}
                </div>
            </div>
        </>
    )
}
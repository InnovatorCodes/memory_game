import { useState } from "react";
import Card from "./Card";
import logo from "./assets/friends_logo_white.png";
import helpsvg from "./assets/help_white.svg";
import characters from "./characters";

export default function MemoryGame() {
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  //const characters=["Ross", "Chandler", "Joey", "Monica", "Rachel", "Phoebe","Janice", "Mike", "Richard","Emily", "Carol", "Estelle", "Gunther", "Jack", "Judy"];
  const [shuffledCharacters, setShuffledCharacters] = useState(
    shuffle(characters),
  );
  const characterCards = shuffledCharacters.map((character) => (
    <Card
      name={character.name}
      key={character.id}
      image={character.image}
      clickHandler={clickHandler}
    />
  ));
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function clickHandler(name) {
    let selectedCharacter = shuffledCharacters.find(
      (character) => character.name == name,
    );
    console.log(shuffledCharacters.find((character) => character.name == name));
    if (
      selected.findIndex((character) => character == selectedCharacter.name) ==
      -1
    ) {
      let newSelected = [...selected];
      newSelected.push(selectedCharacter.name);
      setSelected(newSelected);
      setScore(score + 1);
      if (score == highscore) setHighscore(score + 1);
    } else {
      if (score > highscore) setHighscore(score);
      setScore(0);
      setSelected([]);
    }
    let newShuffledCharacters = [...shuffledCharacters];
    shuffle(newShuffledCharacters);
    setShuffledCharacters(newShuffledCharacters);
  }

  const helpcontent = [
    "Don't select the same card twice.",
    "The cards shuffle after every click, so stay sharp!",
    "Try to get the highest score possible.",
  ];
  const helpDivs = helpcontent.map((content, index) => (
    <div key={index}>{content}</div>
  ));

  return (
    <>
      <div className="header">
        <img src={logo} alt="FRIENDS Logo" className="logo" />
        <div className="scores">
          <div className="highscore">Highscore: {highscore}</div>
          <div className="score">Current Score: {score}</div>
        </div>
      </div>
      <div className="main">
        <div className="cards">{characterCards}</div>
        <div>
          <img src={helpsvg} alt="help" className="help" />
          <div className="help-content">{helpDivs}</div>
        </div>
      </div>
    </>
  );
}

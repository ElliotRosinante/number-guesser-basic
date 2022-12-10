import "./styles.css";

import React, { useState } from "react";
const randomNum = Math.floor(Math.random() * 9) + 1;
console.log(randomNum);

export default function App() {
  const [numInput, setNumInput] = useState("");
  const [correctGuess] = useState(randomNum);
  const [chance, setChance] = useState(3);
  const [userWin, setUserWin] = useState(false);
  const [userGuessed, setUserGuessed] = useState(false);
  const [message, setUserMessage] = useState("");
  //state to store all the user guesses
  const [allUserGuesses, setAllUserGuesses] = useState([]);
  function handleChange(event) {
    const input = event.target.value;
    setNumInput(input);
  }

  function handleGuessCheck() {
    //onClick , just decrement the chances by one and display the number of guesses left
    //if guess is correct render a div with a success message
    //if guess is greater than correctGuess render a div with a specific message
    //if guess is  less than correctGuess render a div with a specific message
    setUserGuessed(true);
    setChance(chance - 1);
    setAllUserGuesses([...allUserGuesses, numInput]);
    //why does this highlight parseInt but it doesn't highlight Number
    if (Number(numInput) === correctGuess) {
      setUserWin(true);
    } else if (numInput > correctGuess) {
      //display the message, your guess was too high try again
      setUserMessage("Your guess was too high");
    } else if (numInput < correctGuess) {
      //display the message, your guess was too low try again
      setUserMessage("Your guess was too low");
    }
    setNumInput("");
  }
  return (
    <div className="App">
      <div className="container">
        <div>
          <div>
            <h2>This is a number guesser game</h2>
            <p>Enter a number between 1 and 10</p>
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter your number here"
              value={numInput}
              onChange={handleChange}
              disabled={chance === 0 ? true : false}
            />
            <input
              type="button"
              value="submit Guess"
              onClick={handleGuessCheck}
              disabled={chance === 0 ? true : false}
            />
          </div>
        </div>
        {userWin ? (
          <div
            className="success-message"
            style={{
              display: userGuessed ? "block" : "none",
              marginTop: "10px",
            }}
          >
            You win! your guess was right!
          </div>
        ) : (
          <div
            className="try-again"
            style={{ display: userGuessed ? "block" : "none" }}
          >
            Your guesses :{" "}
            {allUserGuesses.map((val, index) => (
              <p
                style={{ border: "1px solid ", background: "#92469E19" }}
                key={index}
              >
                {val}
              </p>
            ))}
            <p>{message}</p>
            <h3 style={{ color: "green" }}>You have {chance} chances left.</h3>
            <h3>Try Again</h3>
          </div>
        )}
      </div>
    </div>
  );
}

/* 
project plans.
1. do all my logic before attempting any styling
2. this is a number guesser app with react
3. this is a fairly simple component all I need is just one component
4. To increase the difficulty of this challenge, I am going to 
display the users previous guesses.

I need a state to handle the input
I need a state to store the correct guess
I need to make it such that you only have three guesses so if user exhausts all of them

**disable the button after all the chances get exhausted*/

// so even if you pass an empty array as a parameter
//to useEffect, it will still run twice

/* why was I trying to use useEffect for something as simple as this
I tried to use window.addEventListener to add an onload event to my 
component so that anytime the window loads, I can set a new random number
 */

//disable button on exhausting all chances

//later on I will add validation so users get notified if
//they enter values outside the range

//but come on this should be a simple app so which animal
//will enter wierd numbers on purpose. At least everyone can read

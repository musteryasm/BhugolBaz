// Multiplayer.js
import React, { useState } from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin: 50px;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5em; /* Increase font size for impact */
`;

const ImageContainer = styled.div`
  width: 800px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #333; /* Set a background color to match the style */
`;

const StateImage = styled.img`
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  justify-content: center;
  margin-top: 20px;
  height: 40px; /* Adjust the height as needed */
`;

const GuessInput = styled.input`
  padding: 8px; /* Increase padding for input */
  font-size: 18px; /* Increase font size for input */
`;

const SubmitButton = styled.button`
  margin-left: 10px;
  height : 40px;
  font-size: 18px; /* Increase font size for button */
  cursor: pointer;
  background-color: rgb(94, 239, 237);
  color: black;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

const ResultText = styled.p`
  font-weight: bold;
  font-size: 18px; /* Increase font size for result */
  margin-top: 20px;
`;

const Multiplayer = () => {
  const stateList = ['maharashtra', 'goa', 'bihar', 'assam'];
  const [stateName, setStateName] = useState(getRandomState());

  function getRandomState() {
    const randomIndex = Math.floor(Math.random() * stateList.length);
    return stateList[randomIndex];
  }

  const [userGuess, setUserGuess] = useState('');
  const [result, setResult] = useState('');

  const startNewRound = () => {
    const newStateName = getRandomState();
    setStateName(newStateName);
    setUserGuess('');
    setResult('');
  };
  const stateImages = {
    maharashtra: './maharashtra.png',
    goa: './goa.png',
    bihar: './bihar.png',
    assam: './assam.png',
    // Add more state images as needed
  };
  const checkGuess = () => {
    const trimmedGuess = userGuess.trim().toLowerCase();
    const isCorrect = trimmedGuess === stateName;

    setResult(isCorrect ? `Correct! It's ${stateName}!` : 'Incorrect. Try again!');
  };

  return (
    <GameContainer>
      <Title>Guess the Indian State!</Title>

      <ImageContainer>
        <StateImage src={`./images/${stateName}.png`} alt={stateImages[stateName]} />
      </ImageContainer>

      <InputContainer>
        <GuessInput
          type="text"
          id="guess"
          placeholder="Enter your guess"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <SubmitButton onClick={checkGuess}>Submit Guess</SubmitButton>
        <SubmitButton onClick={startNewRound}>Next Image</SubmitButton>
      </InputContainer>

      <ResultText>{result}</ResultText>
    </GameContainer>
  );
};

export default Multiplayer;

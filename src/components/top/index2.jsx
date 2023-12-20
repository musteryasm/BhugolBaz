import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #3498db;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
  animation: ${fadeIn} 3s ease-in-out;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 0em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
  animation: ${fadeIn} 4s ease-in-out;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 3em;
`;

const DonateButton = styled.button`
  flex: 1;
  outline: none;
  border: none;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-right: 1em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  animation: ${fadeIn} 4s ease-out forwards;

  &:hover {
    background-color: transparent;
    border: 2px solid #3498db;
  }
`;

// Move handleMultiplayerButtonClick outside the component
const handleMultiplayerButtonClick = (onMultiplayerButtonClick) => {
  if (onMultiplayerButtonClick) {
    onMultiplayerButtonClick();
  }
};

export function TopSection2({ onPlayButtonClick, onMultiplayerButtonClick, onHardButtonClick }) {
  const handlePlayButtonClick2 = () => {
    if (onPlayButtonClick) {
      onPlayButtonClick();
    }
  };

  // Use handleMultiplayerButtonClick within the component
  const handleMultiplayerClick = () => {
    handleMultiplayerButtonClick(onMultiplayerButtonClick);
  };

  const handleHardButtonClick = () => {
    if (onHardButtonClick) {
      onHardButtonClick();
    }
  };

  return (
    <TopSectionContainer>
      <Logo>LESSGOOO!!!</Logo>
      <Slogan>Pick a Game Mode</Slogan>
      <Paragraph>Choose 'EASY' for a relaxed exploration </Paragraph>
      <Paragraph>'HARD' for a challenging adventure</Paragraph>
      <Paragraph>'DUO' to compete in real-time with friends and fellow explorers</Paragraph>
     
      <ButtonsContainer>
        <DonateButton onClick={handlePlayButtonClick2}>EASY</DonateButton>
        <DonateButton onClick={handleMultiplayerClick}>STATE</DonateButton>
        <DonateButton onClick={handleHardButtonClick}>HARD</DonateButton>
      </ButtonsContainer>
    </TopSectionContainer>
  );
}

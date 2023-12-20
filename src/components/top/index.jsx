import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Define a keyframe for the fade-in animation

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
  font-weight: 700;
  font-size: 80px;
  animation: ${fadeIn} 2s ease-out; /* Apply the fade-in animation */
`;

const Slogan = styled.h4`
  margin: 0;

  color: aqua;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
  animation: ${fadeIn} 3s ease-out; /* Delayed fade-in */
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 40%;
  text-align: center;
  animation: ${fadeIn} 4s ease-out; /* Further delayed fade-in */
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: background-color 350ms ease-in-out; /* Only transition background-color */

  opacity: 0;
  animation: ${fadeIn}  4s ease-out forwards;

  &:hover {
    background-color: transparent;
    border: 2px solid #3498db;
  }
`;

export function DelayedTopSection({ onPlayButtonClick }) {
  const [showTopSection, setShowTopSection] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowTopSection(true);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  return showTopSection ? (
    <TopSectionContainer>
      <Logo>BHUGOLBAZ</Logo>
      <Slogan>Team : init 0</Slogan>
      <Paragraph>
      Dive into an educational journey with our geospatial game, exploring India's landscapes through satellite images. Challenge your geographical knowledge with themed quizzes, dynamic difficulty, and real-time multiplayer. Immerse yourself in iconic landmarks and hidden gems, enhancing problem-solving skills. Designed for all, our game seamlessly combines entertainment and learning, fostering geospatial awareness. Join us in promoting a deeper appreciation for India's diverse geography!
      </Paragraph>
      <DonateButton onClick={onPlayButtonClick}>PLAY</DonateButton>
    </TopSectionContainer>
  ) : null;
}

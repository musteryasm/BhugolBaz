import React, { useState, useEffect } from 'react';
import './LocationCard.css';
import { airport, stadium } from './questions';

const LocationCard = ({ question, image, answers, handleCardClick, flippedCards }) => (
  <div className="location-card">
    <h3>{question}</h3>
    <img src={image} alt="Location" />
    <div className="answers">
      <div className="card-row">
        <div className="card-container">
          {answers.slice(0, 2).map((answer, index) => (
            <div
              key={index}
              className={`card ${flippedCards[index] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="front">
                <p>{answer.text}</p>
              </div>
              <div className="back">
                <p>
                  {flippedCards[index] && answer.isCorrect ? 'Correct!' : flippedCards[index] ? 'Wrong!' : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="card-container">
          {answers.slice(2).map((answer, index) => (
            <div
              key={index + 2}
              className={`card ${flippedCards[index + 2] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index + 2)}
            >
              <div className="front">
                <p>{answer.text}</p>
              </div>
              <div className="back">
                <p>
                  {flippedCards[index + 2] && answer.isCorrect ? 'Correct!' : flippedCards[index + 2] ? 'Wrong!' : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MCQGame = () => {
  const [selectedCategory, setSelectedCategory] = useState('airport');
  const selectedQuestions = selectedCategory === 'airport' ? airport : stadium;

  const totalQuestions = selectedQuestions.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState(Array(selectedQuestions[0].answers.length).fill(false));
  const [score, setScore] = useState(Array(totalQuestions).fill(0));
  const [correctAnswers, setCorrectAnswers] = useState(Array(totalQuestions).fill('-'));
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  useEffect(() => {
    setFlippedCards(Array(selectedQuestions[currentQuestionIndex].answers.length).fill(false));
  }, [currentQuestionIndex, selectedQuestions]);

  const handleCardClick = (index) => {
    const updatedFlippedCards = flippedCards.map((card, i) => (i === index ? !card : card));
    setFlippedCards(updatedFlippedCards);

    if (currentQuestionIndex === totalQuestions - 1 && updatedFlippedCards[index]) {
      setAllQuestionsAnswered(true);
    }

    if (updatedFlippedCards[index] && !selectedQuestions[currentQuestionIndex].answers[index].isCorrect) {
      setScore((prevScore) => {
        const updatedScore = [...prevScore];
        updatedScore[currentQuestionIndex] = 0;
        return updatedScore;
      });

      const correctAnswerIndex = selectedQuestions[currentQuestionIndex].answers.findIndex((answer) => answer.isCorrect);

      setCorrectAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = correctAnswerIndex + 1;
        return updatedAnswers;
      });

      setTimeout(() => {
        nextQuestion();
      }, 2000);
    } else if (updatedFlippedCards[index] && selectedQuestions[currentQuestionIndex].answers[index].isCorrect) {
      setScore((prevScore) => {
        const updatedScore = [...prevScore];
        updatedScore[currentQuestionIndex] = 1;
        return updatedScore;
      });
      setCorrectAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] =
          selectedQuestions[currentQuestionIndex].answers.findIndex((answer) => answer.isCorrect) + 1;
        return updatedAnswers;
      });
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      setAllQuestionsAnswered(true);
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setFlippedCards(Array(selectedQuestions[0].answers.length).fill(false));
    setScore(Array(totalQuestions).fill(0));
    setCorrectAnswers(Array(totalQuestions).fill('-'));
    setAllQuestionsAnswered(false);
  };

  useEffect(() => {
    if (allQuestionsAnswered) {
      const totalScore = score.reduce((acc, curr) => acc + curr, 0);
      alert(`Total Score: ${totalScore}`);
    }
  }, [allQuestionsAnswered, score]);

  return (
    <div className="game-container">
      <div className="test-card">
        <div className="mcq-game">
          <LocationCard
            question={selectedQuestions[currentQuestionIndex].question}
            image={selectedQuestions[currentQuestionIndex].image}
            answers={selectedQuestions[currentQuestionIndex].answers}
            handleCardClick={handleCardClick}
            flippedCards={flippedCards}
          />
        </div>
      </div>
      <div className="score-column">
        <div className="score-table">
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Score</th>
                <th>Correct Option</th>
              </tr>
            </thead>
            <tbody>
              {score.map((s, index) => (
                <tr key={index}>
                  <td>{`Question ${index + 1}`}</td>
                  <td>{s}</td>
                  <td>{correctAnswers[index]}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td>{score.reduce((acc, curr) => acc + curr, 0)}</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="category-dropdown">
          <label htmlFor="category">Select Category: </label>
          <select id="category" onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="airport">Airport</option>
            <option value="stadium">Stadium</option>
          </select>
        </div>
        <div className="reset-button">
          <button onClick={resetGame}>Play Again</button>
        </div>
      </div>
    </div>
  );
};

export default MCQGame;

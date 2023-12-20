import air1 from "./images/airport/Ahmedabad- airport.jpg";
import air2 from "./images/airport/aurangabad-airport.jpg";
import air3 from "./images/airport/Bhopal-airport.jpg";
import air4 from "./images/airport/chandigarh-airport.jpg";
import air5 from "./images/airport/Chattisgarh-Airport.jpg";

import std1 from "./images/stadium/Ahmedabad- Sardarpatel stadium.jpg";
import std2 from "./images/stadium/aurangabad-stadium.jpg";
import std3 from "./images/stadium/chandigarh-punjabcricket stadium.jpg";
import std4 from "./images/stadium/chennai-Chidambaram stadium.jpg";
import std5 from "./images/stadium/coimbattore-Nehru stadium.jpg";


const airport = [
    {
      question: "Identify the Airport",
      image: air1,
      answers: [
        { text: "Bhopal Airport", isCorrect: false },
        { text: "Ahmedabad Airport", isCorrect: true },
        { text: "Chennai Airport", isCorrect: false },
        { text: "Pune Airport", isCorrect: false },
      ],
    },
    {
      question: "Identify the Airport",
      image: air2,
      answers: [
        { text: "Delhi Airport", isCorrect: false },
        { text: "Chandigarh Airport", isCorrect: false },
        { text: "Aurangabad Airport", isCorrect: true },
        { text: "Shrinagar Airport", isCorrect: false },
      ],
    },
    {
      question: "Identify the Airport",
      image: air3,
      answers: [
        { text: "Rajkot Airport", isCorrect: false },
        { text: "Bhopal Airport", isCorrect: true },
        { text: "Coimbattore Airport", isCorrect: false },
        { text: "HYD - Begumpet Airport", isCorrect: false },
      ],
    },
    {
      question: "Identify the Airport",
      image: air4,
      answers: [
        { text: "Delhi Airport", isCorrect: false },
        { text: "Rajkot Airport", isCorrect: false },
        { text: "Pune Airport", isCorrect: false },
        { text: "Chandigarh Airport", isCorrect: true },
      ],
    },
    {
      question: "Identify the Airport",
      image: air5,
      answers: [
        { text: "Chattisgarh Airport", isCorrect: true },
        { text: "Delhi Airport", isCorrect: false },
        { text: "Rajkot Airport", isCorrect: false },
        { text: "Srinagar Airport", isCorrect: false },
      ],
    },

  ];

  const stadium = [
    {
      question: "Identify the Stadium",
      image: std1,
      answers: [
        { text: "Aurangabad Stadium", isCorrect: false },
        { text: "Ahmedabad - Sardarpatel Stadium", isCorrect: true },
        { text: "Chandigarh Stadium", isCorrect: false },
        { text: "Chennai Stadium", isCorrect: false },
      ],
    },
    {
      question: "Identify the Stadium",
      image: std2,
      answers: [
        { text: "Aurangabad Stadium", isCorrect: true },
        { text: "Chennai Stadium", isCorrect: false },
        { text: "Pune Stadium", isCorrect: false },
        { text: "Mumbai Stadium", isCorrect: false },
      ],
    },
    {
      question: "Identify the Stadium",
      image: std3,
      answers: [
        { text: "Rajkot Stadium", isCorrect: false },
        { text: "Kolkatta Stadium", isCorrect: false },
        { text: "Chandigarh Stadium", isCorrect: true },
        { text: "Raipur Stadium", isCorrect: false },
      ],
    },
    {
      question: "Identify the Stadium",
      image: std4,
      answers: [
        { text: "Pune Stadium", isCorrect: false },
        { text: "Combattore Stadium", isCorrect: false },
        { text: "Mumbai Stadium", isCorrect: false },
        { text: "Chennai Stadium", isCorrect: true },
      ],
    },
    {
      question: "Identify the Stadium",
      image: std5,
      answers: [
        { text: "Coimbattore Stadium", isCorrect: true },
        { text: "Raipur Stadium", isCorrect: false },
        { text: "Chandigarh Stadium", isCorrect: false },
        { text: "Rajkot Stadium", isCorrect: false },
      ],
    },
  ];
  
  export { airport, stadium };
  
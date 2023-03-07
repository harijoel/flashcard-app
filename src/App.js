import React, {useState, useEffect, useRef} from "react";
import FlashcardList from "./FlashcardList";
import './app.css'

import Header from "./Header";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  

  return (
    <>
      <Header setFlashcards={setFlashcards} />
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}







const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'What is the derivative Acceleration with respect of time?',
    answer: 'Jerk',
    options: [
      'Slide',
      'Bump',
      'Jerk',
      'Shift'
    ]
  }
]

export default App;

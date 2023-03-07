import React, {useState, useEffect, useRef} from 'react'
import GenerateBtn from './GenerateBtn'
import InputQuestionNo from './InputQuestionNo'
import SelectCategory from './SelectCategory'
import axios from "axios";

export default function Header({setFlashcards}) {
  const [categories, setCategories] = useState([])
  const categoryEl = useRef()
  const ammountEl = useRef()

  useEffect(() => {
      axios.get('https://opentdb.com/api_category.php')
      .then(res => {
        setCategories(res.data.trivia_categories)
      })
    }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
    .get('https://opentdb.com/api.php', {
      params: {
        amount: ammountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(res => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)), 
          answer
        ];
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - 0.5)
        }
      })
      );
    })
  }
  
  return (
    <form className="header" onSubmit={handleSubmit}>
      <SelectCategory categories={categories} categoryEl={categoryEl} />
      <InputQuestionNo ammountEl={ammountEl} />
      <GenerateBtn />
    </form>
  )
}

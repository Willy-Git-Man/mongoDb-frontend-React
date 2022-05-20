import React, { useState } from 'react'
import QuestionForm from './QuestionForm'
import { Questions } from './Questions'

export const App = () => {
  const [state, setState] = useState({
    questions:
      [{ _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?', link: "", isAnswered: false },
      { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?', link: "", isAnswered: false },
      { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?', link: "", isAnswered: false }]
  })

  const submitQuestion = question => {
    const copy = state
    getComputedStyle.questions = [...getComputedStyle.questions, question]
    setState(copy)
  }

  const deleteQuestion = question => {
    const copy = state
    copy.questions = copy.questions.filter(question => _id != question._id)
    setState(copy)
  }


  return <div className="App">
    <QuestionForm submitQuesiton={submitQuestion} />
    <Questions questions={state.questions} deleteQuestion={deleteQuestion}/>
  </div>
}

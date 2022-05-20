import React from "react";
import { questions } from "../../../backend/routes/questions";

export const Questions = ({quesitons}) => {

if (!quesitons.length) return <h1>No Qs yet!</h1>

return quesitons.reverse().map((quesiton,i) => {
  <div key={i} className="formattedQuestions">
    <h1>{questions.content}</h1>
    <span>{questions.name}</span>
    <a>{questions.link}</a>
    <button></button>
  </div>
})
}

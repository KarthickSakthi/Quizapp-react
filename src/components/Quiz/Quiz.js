import React,{useState,useEffect} from "react";
import style from './Quiz.module.css'

const Quiz = ({quiz})=>{
const option=[quiz.correct_answer,...quiz.incorrect_answers]
return(
    <div className={style.card}>
        <h1 className={style.quesno}>Question {0}</h1>
        <div className={style.QuizContainer}>
        <div className={style.Question}>
            <div className={style.ques}>
          <h2>{quiz.question}</h2>
          </div>
        </div>
        <div className={style.options}>
            <div className={style.answer}>
          {
           option.map(opt=><h3 className={style.option}>{opt}</h3>) 
          }
          </div>
        </div>
        </div>
    </div>
)
}
export default Quiz
import React,{useState,useEffect} from "react";
import style from './Quiz.module.css'

const Quiz = ({quiz,index,option,correctAnswer,TotalQuestions,score,displayScore,handleClick})=>{
  console.log("Option :"+ option)
return(
  
    <div className={style.card}>
      {displayScore ?(<div className={style.displayScore}><h2>Your Score is {score} / {TotalQuestions}</h2></div>) :
     ( <div>
       <h1 className={style.quesno}>Question {index+1} </h1>
        <div className={style.QuizContainer}>
        <div className={style.Question}>
            <div className={style.ques}>
          <h2>{quiz.question}</h2>
          </div>
        </div>
        <div className={style.options}>
            <div className={style.answer}>
          {
            
           option.map((opt,i)=>(
            <div key={i} className={style.singleOption}>
           <h3 key={i} className={style.option} onClick={()=>handleClick(opt,correctAnswer)}>{opt}</h3>
           </div>)) 
          
          }
          </div>
        </div>
        </div> 
        </div> ) }
    </div>
)
}
export default Quiz
import React,{useState,useEffect} from "react";
import style from './Quiz.module.css'

const Quiz = ({quiz,index,option,correctAnswer,TotalQuestions,score,displayScore,handleClick})=>{
  
return(
    <div className={style.card}>
      {displayScore ?(<div className={style.displayScore}><h2>Your Score is <h2 style={{display:'inline'}}>{score}</h2> / {TotalQuestions}</h2></div>) :
     ( <div  >
       <h1 className={style.quesno}>Question <h3 style={{display:'inline'}}>{index+1}</h3> /<h6 style={{display:'inline'}}>{TotalQuestions}</h6></h1>
        <div className={style.QuizContainer}>
          <h2 className={style.ques}>{String(quiz.question).includes("&quot;")?String(quiz.question).replaceAll("&quot;","'"):
          String(quiz.question).includes("&#039;")?String(quiz.question).replaceAll("&#039;","'"):quiz.question}</h2>
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
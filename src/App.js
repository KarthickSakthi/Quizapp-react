import React,{useState,useEffect} from "react";
import {api} from './Api/api'
import Quiz from "./components/Quiz/Quiz";
import style from './App.module.css'
import { Header } from "./components";
const App = ()=>{
 const [apiData,setApiData] = useState([]);
 const [userName,setUserName]=useState("");
 const [userInput,setUserInput]=useState("");
 const [quesnum,setQuesNum]=useState(0);
 const [option,setOption]=useState([]);
 const [score,setScore]=useState(0);
 const [displayScore,setDisplayScore]=useState(false);
 useEffect(async ()=>{
 const apiVal =await fetch(api);
 const apiJson = await apiVal.json()
 const {results} = apiJson

 setApiData(results)

},[])
function userSubmit(e){
 e.preventDefault();
setUserName(userInput)
}
function handleClick(optionVal,correctAnswer){
 
  if(optionVal==correctAnswer){
    setScore(score+1)
  }  
  const nextQues = quesnum+1;

  if(quesnum<apiData.length-1){
    setQuesNum(nextQues)
  }
  else{
   setDisplayScore(true)
  }
}
return(
 
  <div className={style.App}>
   
    
    
    {userName ? ( 
      
      <div className={style.QuizContainer}>
         <h1 className={style.Header2}>Quiz App</h1>
        <div className={style.QuizContainerContent}>
        <h1 className={style.welcome,style.username}>Welcome <span style={{display:"inline"}} >{userName} </span></h1>
        <Quiz
        key={quesnum}
        index={quesnum<apiData.length ?quesnum :apiData.length-1 }
        quiz={quesnum<apiData.length ? apiData[quesnum]: apiData[apiData.length-1]}
        option={quesnum<apiData.length ? [apiData[quesnum].correct_answer,...apiData[quesnum].incorrect_answers].sort(()=>Math.random() - 0.5) :[apiData[apiData.length-1].correct_answer,...apiData[apiData.length-1].incorrect_answers].sort(()=>Math.random() - 0.5)  }
        correctAnswer={quesnum<apiData.length ?apiData[quesnum].correct_answer:"None"}
        TotalQuestions={apiData.length}
        score={score}
        displayScore={displayScore}
        handleClick={handleClick}/>
        </div>
    </div>
    ) : (
      <div className={style.Form}>
         <h1 className={style.Header}>Quiz App</h1>
        <h1 className={style.subHeading}>Enter the Required details to Attend Quiz</h1>
      <form onSubmit={userSubmit} className={style.formInput}>
        <label className={style.labelField}>Enter Your Name : </label>
      <input className={style.inputField} spellCheck="true" type='text' value={userInput} onChange={(e)=>setUserInput(e.target.value)} required></input>
      <button className={style.submit} type="submit" >Submit</button>
      </form>
      </div>
    )}
   
  </div>
)
}
export default App
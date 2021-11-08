import React,{useState,useEffect} from "react";
import {api} from './Api/api'
import Quiz from "./components/Quiz/Quiz";
import style from './App.module.css'

const App = ()=>{
 const [apiData,setApiData] = useState([]);
 const [userName,setUserName]=useState("");
 const [userInput,setUserInput]=useState("");
 const [quesnum,setQuesNum]=useState(0);
 const [option,setOption]=useState([]);
 const [score,setScore]=useState(0);
 useEffect(async ()=>{
 const apiVal =await fetch(api);
 const apiJson = await apiVal.json()
 const {results} = apiJson
 setApiData(results)

},[])
function userSubmit(e){
 e.preventDefault();
setUserName(userInput)
//setOption(apiData[quesnum].correct_answer,...apiData[quesnum].incorrect_answers)
console.log("User name "+userName)
}
function handleClick(){
  const nextQues = quesnum+1;
  if(quesnum<apiData.length){
    setQuesNum(nextQues)
    //setOption(apiData[quesnum].correct_answer,...apiData[quesnum].incorrect_answers)
    console.log(option)
  }
  else{
   alert("You Have Reached the End of Quiz")
  }
}
return(
 
  <div className={style.App}>
    { userName ? ( 
      <div className={style.QuizContainer}>
        <div className={style.QuizContainerContent}>
        <h1 className={style.welcome}>Welcome {userName} </h1>
        {/*
        apiData.map((q,i)=>(       
          <Quiz key={i}
          quiz={q}
            index={i}
          />  
        )) */}
        <Quiz
        key={quesnum}
        index={quesnum<apiData.length ?quesnum :apiData.length-1 }
        quiz={quesnum<apiData.length ? apiData[quesnum]: apiData[apiData.length-1]}
        option={quesnum<apiData.length ? [apiData[quesnum].correct_answer,...apiData[quesnum].incorrect_answers] :[apiData[apiData.length-1].correct_answer,...apiData[apiData.length-1].incorrect_answers]  }
        handleClick={handleClick}/>
        </div>

    </div>
    ) : (
      <div className={style.formInput}>
      <form onSubmit={userSubmit}>
      <input type='text' value={userInput} onChange={(e)=>setUserInput(e.target.value)} ></input>
      <button type="submit" >Submit</button>
      </form>
      </div>
    )}
   
      {/*apiData.map(q=><Quiz question={q.question}/>)*/}
  </div>
)
}
export default App
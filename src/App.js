import React,{useState,useEffect} from "react";
import {api} from './Api/api'
import Quiz from "./components/Quiz/Quiz";
import style from './App.module.css'

const App = ()=>{
 const [apiData,setApiData] = useState([]);
 const [userName,setUserName]=useState("");
 const [userInput,setUserInput]=useState("");
 useEffect(async ()=>{
 const apiVal =await fetch(api);
 const apiJson = await apiVal.json()
 const {results} = apiJson
 setApiData(results)

},[])
function userSubmit(e){
 e.preventDefault();
setUserName(userInput)
console.log("User name "+userName)
}
return(
 
  <div className={style.App}>
    { userName ? ( 
      <div className={style.QuizContainer}>
        <div className={style.QuizContainerContent}>
        <h1 className={style.welcome}>Welcome {userName} </h1>
        <Quiz quiz={apiData[0]}/>
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
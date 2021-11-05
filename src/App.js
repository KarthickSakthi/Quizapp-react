import React,{useState,useEffect} from "react";
import {api} from './Api/api'
import Quiz from "./components/Quiz";

const App = ()=>{
 const [apiData,setApiData] = useState(null);
 useEffect(async ()=>{
 const apiVal =await fetch(api);
 const apiJson = await apiVal.json()
 const {results} =apiJson
 setApiData(results)

},[])
return(
  <div>
  {
   
   apiData.map(q=><Quiz question={q.question}/>)
   
 }
  </div>
)
}
export default App
import { useState } from "react"
import { Link } from 'react-router-dom'




function Firstpage() {
   const [value, setvalue] = useState("")




   const checkans=()=> {

      if (value === "two") {
         alert("corret answer")
      
   }
   }

   return <>
   
      <form class="main">
         <h4 class="heading">1. what is React? </h4>

         <input  type="radio" id="one" name="checked" value="one"
            onChange={e => setvalue("one")}></input>
         <label class="input" for="one">React is a database engine.</label>
         <br></br><br></br>


         <input type="radio" id="two" name="checked" value="two"
            onChange={e => setvalue("two")}></input>
         <label class="input" for="two">React is a javascript library for
            building user interfaces</label><br></br><br></br>


         <input type="radio" id="three" name="checked" value="three"
            onChange={e => setvalue("three")}></input>
         <label class="input" for="three">React is a programming language.</label><br></br>


      </form> 
      
      <button type="button" class="btn" onClick={checkans}>Submit</button>
        <button type="button" class="btnn" onClick={Firstpage}>
         <Link class="link" to={'/second'}>Next Page </Link></button> 
        
   </>
}

export default Firstpage
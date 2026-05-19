import { useState } from "react"
import { Link } from "react-router-dom"

function Fifthpage(){
    const[value4,setvalue4] = useState()

    const Fifth=()=>{
        if(value4 === "fifth-one")
        {
            alert("correct answer")
        }

    }

    
    return<>
    <form class="main">

    <h4 class="heading"> 5. Truth or False :
         React components must start with a capital letter?</h4>

    <input type="radio" id="fifth-one" name="checked" value="fifth-one"
    onChange={e => setvalue4 ("fifth-one")}></input>
    <label class="input" for="fifth-one">True.</label><br></br><br></br>

    <input type="radio" id="fifth-two" name="checked" value="fifth-two"
    onChange={e => setvalue4 ("fifth-two")}></input>
    <label class="input" for="fifth-two">False.</label><br></br><br></br>

    </form>
    
    <button type="button" class="btn" onClick={Fifth}>submit</button>
    <button type="button" class="btnn" onClick={Fifthpage}><Link class="link" to="/">Next Page
    </Link></button>
    </>

}

export default Fifthpage
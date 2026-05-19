import { useState } from "react"
import { Link } from "react-router-dom"

function Fourthpage(){
    const[value3,setvalue3] = useState()

    const Fourth=()=>{
        if(value3 === "fourth-three")
        {
            alert("correct answer")
        }

    }

    
    return<>
    <form class="main">

    <h4 class="heading"> 4.What are the "Props"?</h4> 

    <input  type="radio" id="fourth-one" name="checked" value="fourth-one"
    onChange={e => setvalue3 ("third-one")}></input>
    <label class="input" for="second-one">Tools for fixing code.</label><br></br><br></br>

    <input type="radio" id="fourth-two" name="checked" value="fourth-two"
    onChange={e => setvalue3 ("fourth-two")}></input>
    <label class="input" for="second-one">A way to style button.</label><br></br><br></br>

    <input type="radio" id="fourth-three" name="checked" value="fourth-three"
    onChange={e => setvalue3 ("fourth-three")}></input>
    <label class="input" for="second-one">Arguments passed into components (like data).<br></br><br></br>
           </label><br></br><br></br>

    </form>

    <button type="button" class="btn" onClick={Fourth}>submit</button>
    <button type="button" class="btnn" onClick={Fourthpage}><Link class="link" to="/fifth">
    Next Page</Link></button>

    </>

}

export default Fourthpage
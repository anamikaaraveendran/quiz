import { useState } from "react"
import { Link } from "react-router-dom"


function Thirdpage(){
    const[value2,setvalue2] = useState()

    const Third=()=>{
        if(value2 === "third-one")
        {
            alert("correct answer")
        }

    }

    
    return<>
    <form class="main"> 

    <h4 class="heading"> 3.what is correct way to update state in React?</h4>

    <input  type="radio" id="third-one" name="checked" value="third-one"
    onChange={e => setvalue2 ("third-one")}></input>
    <label class="input" for="second-one">Using the "SetState" function or update from "useState".</label><br></br><br></br>

    <input type="radio" id="third-two" name="checked" value="third-two"
    onChange={e => setvalue2 ("third-two")}></input>
    <label class="input" for="second-one">Refreshing the browser page.</label><br></br><br></br>

    <input type="radio" id="third-three" name="checked" value="third-three"
    onChange={e => setvalue2 ("third-three")}></input>
    <label class="input" for="second-one">Directly modifying the state variable<br></br><br></br>
           (e.g., state.count = 1).</label><br></br><br></br>

    
    </form>

    <button type="button" class="btn" onClick={Third}>submit</button>
    <button type="button" class="btnn" onClick={Thirdpage}><Link class="link" to="/fourth">
    Next Page</Link></button>
    </>

}

export default Thirdpage
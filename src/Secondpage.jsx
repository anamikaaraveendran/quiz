import { useState } from "react"
import { Link } from "react-router-dom"

function Secondpage(){

    const[value1,setvalue1] = useState()

    const Second=()=>{
        if(value1 === "second-one")
        {
            alert("correct answer")
        }

    }

    return<>
    <form class="main">

    <h4 class="heading"> 2.How we can pass the data from 
        one component to another in React.js?</h4>

    <input  type="radio" id="second-one" name="checked" value="second-one"
    onChange={e => setvalue1 ("second-one")}></input>
    <label class="input" for="second-one">Props</label><br></br><br></br>

    <input type="radio" id="second-one" name="checked" value="second-two"
    onChange={e => setvalue1 ("second-two")}></input>
    <label class="input" for="second-two">Render with arguments</label><br></br><br></br>

    <input type="radio" id="second-one" name="checked" value="second-three"
    onChange={e => setvalue1 ("second-three")}></input>
    <label class="input" for="second-three">SetState</label><br></br><br></br>

    
    </form>
    <button type="button" class="btn" onClick={Second}>submit</button>
    <button type="button" class="btnn" onClick={Secondpage}><Link class="link" to="/third">
    Next Page</Link></button>
    </>
}
export default Secondpage
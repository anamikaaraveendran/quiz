import { Link } from 'react-router-dom'

function Home(){

    return<>
    
    
    <h2 class="head">welcome to React Quiz</h2>

    <button type="button" class="bttn" onClick={Home}><Link class="linkk" to={'/first'}>Let's Start</Link></button>
    </>
}
export default Home
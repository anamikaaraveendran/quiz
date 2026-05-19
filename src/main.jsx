import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Firstpage from './Firstpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Secondpage from './Secondpage'
import Thirdpage from './Thirdpage'
import Fourthpage from './Fourthpage'
import Fifthpage from './Fifithpage'
import Home from './Home'
import './First.css'


// hi my helping here
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/first"element={<Firstpage/>}></Route>
  <Route path="/second" element={<Secondpage/>}></Route>
  <Route path="/third"element={<Thirdpage/>}></Route>
  <Route path="/fourth" element={<Fourthpage/>}></Route>
  <Route path="/fifth"element={<Fifthpage/>}></Route>

 </Routes>
 </BrowserRouter>
  </StrictMode>,
)

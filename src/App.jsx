import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Intro} from './components'
import CursorLight from './components/CursorLight'

function App() {
  
  useEffect(() => {
    const btns = document.querySelectorAll("button")
    const audio = new Audio("https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Button%20Switch%20Click%201/ES_Button%20Switch%20Click%201.mp3")

    btns.forEach((btn)=>{
      btn.onclick = () =>{
        audio.play();
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className='relative bg-primary'>
        <CursorLight />
          {/* <p className='p-10 text-[55px] text-center'>لا إله إلا أنت سبحانك إني كنت من الظالمين</p>
          <p className='p-10 text-[50px] text-center'>رب توكلت عليك، وسلمت أمري إليك، لا ملجأ ولا منجى إلا إليك</p> */}
          <Intro />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

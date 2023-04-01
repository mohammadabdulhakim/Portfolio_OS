import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Intro} from './components'
import CursorLight from './components/CursorLight'
import { addBtnSound } from './utils/functions';

function App() {
  
  useEffect(() => {
    addBtnSound()
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

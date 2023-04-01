import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Intro} from './pages'
import { addBtnSound } from './utils/functions';
import {Os} from './pages';

function App() {
  
  useEffect(() => {
    addBtnSound()
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className='relative bg-primary'>
          <Routes>
            <Route path='/*' element={<Intro />} />
            <Route path='/os' element={<Os />} />
            {/* <p className='p-10 text-[55px] text-center'>لا إله إلا أنت سبحانك إني كنت من الظالمين</p>
            <p className='p-10 text-[50px] text-center'>رب توكلت عليك، وسلمت أمري إليك، لا ملجأ ولا منجى إلا إليك</p> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

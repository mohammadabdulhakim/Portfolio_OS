import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div>
        <div className='relative bg-primary'>
          <p className='p-10 text-[55px] text-center'>لا إله إلا أنت سبحانك إني كنت من الظالمين</p>
          <p className='p-10 text-[50px] text-center'>رب توكلت عليك، وسلمت أمري إليك، لا ملجأ ولا منجى إلا إليك</p>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

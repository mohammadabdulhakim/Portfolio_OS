import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CanvasLoader from "../src/components/Loader";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Suspense fallback={<CanvasLoader />}>
    <App />
      </Suspense>
  // </React.StrictMode>
  ,
)

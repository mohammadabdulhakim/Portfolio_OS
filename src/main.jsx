import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Loader} from "../src/components";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Suspense fallback={<Loader />}>
    <App />
      </Suspense>
  // </React.StrictMode>
  ,
)

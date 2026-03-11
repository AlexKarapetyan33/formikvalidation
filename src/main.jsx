import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { days, months, years } from './db/dates.js'


createRoot(document.getElementById('root')).render(

    <App days={days} months={months} years={years}/>

)

import { useState } from 'react'
import './App.css'
import { LoginForm } from './components/LoginForm/LoginForm'

export function App(props) {
  return(
    <LoginForm days={props.days} months={props.months} years={props.years}/>
  )
}
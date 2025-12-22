import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image from './assets/image.jpg'
import imageTwo from './assets/image4.jpg'
import { ToDoList } from './ToDoList'

function App() {

  return (
    <>
      <div className='app'>
        <div className="container">
        <img src = { image } width = "220px" alt = "cat"/>
        </div>
        <div className="container">
        <h1>Procrastination List</h1>
        </div>
        <ToDoList />
        <div className="container">
        <img src = { imageTwo } width = "210px" alt = "cat"/>
        </div>
      </div>
    </>
  )
}

export default App

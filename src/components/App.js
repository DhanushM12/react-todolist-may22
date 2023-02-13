import React, {useState} from 'react'
import '../App.css'
import TaskMain from './TaskMain';

function App() {
  let time = new Date().toLocaleTimeString();
  // const [stateName, setterMethodforState] = useState(initialValue)
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time)
  }
  setInterval(updateTime, 1000)
  return (
    <div className='App'>
      <h1>{currentTime}</h1>
      <TaskMain />
    </div>
  )
}

export default App

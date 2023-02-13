import React, {useState} from 'react'
import Task from './Task'

function TaskMain() {
    const [task, setTask] = useState("")
    const [taskArray, setTaskArray] = useState([])
    const onTaskChange = (event) => {
        setTask(event.target.value)
    }
    function addTask(){
        if(task !== ""){
            setTaskArray((prevTasks) => {
                return [...prevTasks, task]
            })
            setTask("")
        }
    }
  return (
    <div>
        <div>
            <h1>My Todo List</h1>
            <input type="text" value={task} placeholder="Add task" onChange={onTaskChange} />
            <button onClick={addTask}>Add</button>
        </div>
        <div>
            <ol>
            {taskArray.map((val, index) => {
                return <Task  key={index} text={val}/>
            })}
            </ol>
        </div>
    </div>
  )
}

export default TaskMain
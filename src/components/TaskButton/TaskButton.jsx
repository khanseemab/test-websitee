import React from 'react'
import './TaskButton.css'
import { Link } from 'react-router-dom'
const TaskButton = ({taskLink,task}) => {
  return (
    <div className='mx-auto Tak_Container'>
    <Link to={taskLink} target='_blank'>
    <button className='button taskbutton '> {task}
</button></Link></div>
    
  )
}

export default TaskButton

   
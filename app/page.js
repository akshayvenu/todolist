"use client"
import React, { cloneElement, useState } from 'react'
import { render } from 'react-dom'

const page = () => {

  const [task, settask] = useState()
  const [des, setdes] = useState()
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask , {task,des}])
    settask("")
    setdes("")
  } 



  let renderTask ;

  renderTask =  mainTask.map((t,i)=>{
    return <div className='p-3 flex justify-between'>
      <h5>{t.task}</h5>
      <h5>{t.des}</h5>
    </div>
  })

  return (
    <>
    <h1 className='bg-black text-white text-5xl font-bold text-center'>To Do </h1>

    <form onSubmit={submitHandler}>
      <input type="text" className='m-5 text-2xl border-4 border-zinc-800 px-4 py-2' 
      placeholder='Enter your Task' 
      value={task}
      onChange={(e)=>{
        settask(e.target.value)
      }} 
      />
      <input type="text" className='m-5 text-2xl border-4 border-zinc-800 px-4 py-2'
      placeholder='Enter your Description'
      value={des}
      onChange={(e)=>{
        setdes(e.target.value)
      }}
      />
      <button className='bg-black text-white px-4 py-2 text-2xl rounded font-bold m-5'>Add Task</button>
    </form>

    <hr />
    <div className='p-8 bg-slate-200'>
      {renderTask}
    </div>

    
    
    
    </>
    
  )
}

export default page
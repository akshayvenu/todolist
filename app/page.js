"use client"
import React, {  useState } from 'react'

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

  const deleteHandler = (index) => {
    let copyarry = [...mainTask]
    copyarry.splice(index,1)
    setmainTask(copyarry)
  
  }

  let renderTask  = <h2> No Task Available </h2>;

if (mainTask.length>0){
  renderTask =  mainTask.map((t,index)=>{
    return <div key={index} className='p-3 flex justify-between text-xl font-semibold '>

      <h5 className='w-2/3'>{index + 1}</h5>
      <h5 className='w-2/3'>{t.task}</h5>
      <h5 className='w-2/3'>{t.des}</h5>
      <button onClick={()=>{  
        deleteHandler(index)
      }} className='bg-red-700 px-5 py-2 text-white font-semibold rounded'>Delete</button>

    </div>


  })

}
  

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

    {/* <hr /> */}
    <div className='p-8 bg-slate-200'>
      {renderTask}
    </div>

    
    

    </>
    
  )
}

export default page
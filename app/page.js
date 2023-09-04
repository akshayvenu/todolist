"use client"
import React, { useState } from 'react'

const page = () => {

  const [task, settask] = useState("")
  const [des, setdes] = useState()
  return (
    <>
    <h1 className='bg-black text-white text-5xl font-bold text-center'>To Do </h1>

    <form>
      <input type="text" className='m-5 text-2xl border-4 border-zinc-800 px-4 py-2' placeholder='Enter your Task' 
      value={task}
      />
      <input type="text" className='m-5 text-2xl border-4 border-zinc-800 px-4 py-2' placeholder='Enter your Description'/>
      <button className='bg-black text-white px-4 py-2 text-2xl rounded font-bold m-5'>Add Task</button>
    </form>

    
    
    
    </>
    
  )
}

export default page
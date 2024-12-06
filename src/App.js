import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [message,setMessage]=useState("");
  const [status,setStatus]=useState("")
  return (
    <div className='App'>
      <h1>Send Mail</h1>
      <textarea placeholder='Write your message here...' value={message} onChange={(e)=>setMessage(e.target.value)} rows={5}/>
      <button onClick={SendMail}>Send Mail</button>
      {status && <p>{status}</p>}
    </div>
  )
}

export default App


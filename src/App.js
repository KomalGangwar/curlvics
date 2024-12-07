import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [message,setMessage]=useState("");
  const [status,setStatus]=useState("");
  const sendMail = async () => {
    try {
      const response = await fetch("http://localhost:3000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      setStatus("An error occurred while sending the email.",error);
    }
    setTimeout(() => setStatus(""), 5000);
  };
  return (
      <div className='App'>
      <h1>Send Mail</h1>
      <textarea placeholder='Write your message here...' value={message} onChange={(e)=>setMessage(e.target.value)} rows={5}/>
      <br></br>
      <button onClick={sendMail}>Send Mail</button>
      {status && <p>{status}</p>}
      <footer>
      <p>&copy; Developed by Komal Gangwar</p>
      </footer>
      </div>
  )
}

export default App

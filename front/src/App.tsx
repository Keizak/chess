import React, {useState} from 'react';
import { io } from "socket.io-client";

const socket = io ("http://localhost:3001")

function App() {
  const [value,setValue] = useState("");

  const inputHandler = (value:string) => setValue(value)

  const sendMessage = () => {
    socket.emit("send_message",{message:value})
  }
  return (
    <div className="App">

      <input value={value} onChange={(e) => inputHandler(e.currentTarget.value)}/>
      <button onClick={sendMessage}>/</button>
    </div>
  );
}

export default App;

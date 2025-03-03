import React from 'react'
import './Chat.css'
import Leftside from '../../components/Leftside/leftside'
import Chatbox from '../../components/Chatbox/chatbox'
import Rightside from '../../components/Rightside/rightside'
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
<Leftside/>
<Chatbox/>
<Rightside/>

      </div>
    </div>
  )
}

export default Chat

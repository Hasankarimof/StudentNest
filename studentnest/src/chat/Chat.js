import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

// Connect to the chat server running on http://localhost:4000
const socket = io('http://localhost:4000'); // This URL points to your chat server

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for messages from the server
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      // Emit the message to the server
      socket.emit('chat message', message);
      setMessage(''); // Clear the input field after sending
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;

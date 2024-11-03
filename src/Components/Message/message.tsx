import React, { useState } from "react";
import "./message.css";

const Message: React.FC = () => {
  // State to store the typed message and all messages sent
  const [typedMessage, setTypedMessage] = useState<string>("");  // typedMessage is a string
  const [allMessages, setAllMessages] = useState<string[]>([]);  // allMessages is an array of strings

  // Function to handle the "Send" action
  const handleSend = () => {
    if (typedMessage.trim() !== "") { // Ensure non-empty messages
      setAllMessages([...allMessages, typedMessage]); // Add new message to the array
      setTypedMessage(""); // Clear the input field
    }
  };

  return (
    <div className="message" id="message">
      <div className="messageinner">
        <div className="messageshows">
          {/* Render each message as a new <h3> element */}
          {allMessages.map((msg, index) => (
            <h3 key={index}>{msg}</h3>
          ))}
        </div>
        <div className="messagesend">
          <input
            type="text"
            placeholder="Type your wishes here"
            value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)} // Update state on typing
          />
          <h4 onClick={handleSend} style={{ cursor: "pointer" }}>Send</h4>
        </div>
      </div>
    </div>
  );
};

export default Message;
    
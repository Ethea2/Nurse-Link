import React, { useState } from 'react';
import { RiSendPlane2Line } from 'react-icons/ri';

function ChatBody() {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        // Add your logic to send the message
        console.log('Message sent:', message);

        // Clear the input field after sending the message
        setMessage('');
    };

    return (
        <div className="flex flex-col h-full">
            {/* Chat messages container */}
            <div className="flex-1 overflow-y-auto px-4 py-2 bg-gray-100">
                {/* Add your chat messages here */}
                <div className="mb-2">Chat message 1</div>
                <div className="mb-2">Chat message 2</div>
                {/* ... */}
            </div>

            {/* Input and send button */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-gray-300">
                {/* Input text */}
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 mr-2 border border-gray-300 rounded-md outline-none"
                />

                {/* Send button */}
                <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    <RiSendPlane2Line size={20} />
                </button>
            </div>
        </div>
    );
}

export default ChatBody;

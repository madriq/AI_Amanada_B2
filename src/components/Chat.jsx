
import React, { useEffect, useState,  useRef } from 'react';
import { BiSolidMessageDetail } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

import '../css/chatbot.css'; // Ensure your CSS file is imported
// src/components/Chatbot.js
// import React from 'react';
const Chat = () => {
    const [chatbotOpen, setChatbotOpen] = useState(false)
    console.log(chatbotOpen);
    
    return (
        <div>

            <div>
                <ul>
                    <li>
                        <a href="#">
                            <i class="fab fa-edge  "
                                style={{
                                    fontSize: '30px',
                                    color: '#ffee10',
                                    // backgroundColor: '#0078d4',
                                    padding: '10px',
                                    borderRadius: '50%',
                                    position: 'fixed',
                                    top: '4px',
                                    right: '20px',
                                    zIndex: '1000',
                                    cursor: 'pointer'
                                    
                                }}
                                onClick={() => setChatbotOpen(!chatbotOpen)}
                            >
                                {
                                    chatbotOpen ? (
                                        <AiFillCloseCircle />
                                    ) : (
<BiSolidMessageDetail />
                                    )
                                }
                                
                                </i>
                        </a>
                    </li>
                </ul>
            </div>
            {
                chatbotOpen &&(
                    <div style={{ position: 'absolute', bottom: '75px', right: '20px', width: '400px', height: '500px', zIndex: '1000' }}>
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/cgwZY9BIvUQWivQsPUECX"
                    title="Chatbot"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                />
            </div>
                )
            }

        </div>
    );
};

export default Chat;
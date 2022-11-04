import React, { useEffect, useState } from 'react'
import { getChat } from '../service/chatApi'

function ChatPage() {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        chat();
    }, []);
    const chat = async () => {
        const res = await getChat()
        setChats(res.data)
    }

    return (
        <div>
            {chats.map((chat) => (
                <h1 key={chat._id}>{chat.chatName}</h1>
            ))}
        </div>
    )
}

export default ChatPage
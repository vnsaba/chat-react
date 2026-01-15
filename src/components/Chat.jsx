import { db } from "../firebase";
import { useEffect, useState } from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message";
import SendMessage from "./SendMessage";


const Chat = () => {
    const [message, setMessages] = useState([]);

    // llaamr a la base de datos
    useEffect(() => {
        //crear query con la que se recupera todos los mensajes
        const newQuery = query(collection(db, "messages"), orderBy("timestamp"));

        const unSubscibe = onSnapshot(newQuery, (querySnapshot) => {
            let currentMessages = [];
            //recorrer el arreglo
            querySnapshot.forEach(item => {
                currentMessages.push({ text: item.data().text, id: item.id });
            });
            setMessages(currentMessages);
        });
        return () => unSubscibe();
    }, []);


    return (
        <section className="chat-content">
            {
                message && message.map(item => (
                    <Message
                        key={item.id}
                        message={item}
                    />
                ))
            }

            <SendMessage />
        </section>
    )
}

export default Chat
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import {EmojiPicker} from 'emoji-picker-react';

const SendMessage = () => {
    const [input, setInput] = useState("");
    const [open, setOpen] = useState('close');

    const sendMessage = async e => {
        e.preventDefault();

        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: input,
            uid: uid,
            name: displayName,
            avatar: photoURL,
            timestamp: serverTimestamp()
        })
        setInput(" ");
    }

    const emoji = () => {
        setOpen('open');
    }

    const closeEmoji = () => {
        setOpen('close');
    }

    const onEmojiClick = (event, emojiObject) => {
        // setChosenEmoji(emojiObject);
        setInput(`${input}${emojiObject.emoji}`);
    }

    return (
        <form onSubmit={sendMessage}>
            <button type="button" onClick={emoji}>😀</button>

            <div className={open}>
                <button type="button" onClick={closeEmoji}>x</button>
                <EmojiPicker onEmojiClick={onEmojiClick}/>
            </div>

            <input type="text"
                placeholder="Enter your message here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    )
}

export default SendMessage
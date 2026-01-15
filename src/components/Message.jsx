import { auth } from "../firebase";
import { formatDate } from "./helpers";

const Message = ({ message }) => {

    //estilo condicional para mensajes propios y de otros usuarios
    let newStyle = 'message';
    if (auth.currentUser) {
        const user = auth.currentUser;
        const newUser = message.uid;
        newStyle = user === newUser ? 'my-message' : 'message';
    }

    return (
        <article className={newStyle}>
            <div>
                <p>{message.sender}</p>
            </div>
                <p>{formatDate(message.date)}</p>
            <img src={message.photoURL} alt="User Avatar" referrerPolicy="no-referrer" />
        </article>
    );
}

export default Message;
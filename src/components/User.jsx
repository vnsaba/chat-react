import LogIn from "./Login";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const User = () => {
    const [user] = useAuthState(auth);
    const image = user ? user.photoURL : '/userImage.png';
    const name = user ? user.displayName : 'Name user';

    return (
        <div>
            <h1>QuickChat</h1>
            <article>
                <img src={image} alt="user photo" referrerPolicy="no-referrer" />
                <p>{name}</p>
                {user ? <LogOut /> : <LogIn />}
            </article>
        </div>
    )
}

export default User;

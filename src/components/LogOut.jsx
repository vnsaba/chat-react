import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const LogOut = () => {

    const logOut = () => {
        signOut(auth);
    }

    return (
        <button
            onClick={logOut}
        >
            <i className="fa-brands fa-google-plus-g"></i>
            LogOut
        </button>
    )
}

export default LogOut;
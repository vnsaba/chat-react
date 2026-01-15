import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

const LogIn = () => {

    useEffect(() => {
        // Captura el resultado del redirect cuando la página se recarga
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    console.log('Usuario autenticado:', result.user);
                }
            })
            .catch((error) => {
                console.error('Error en redirect:', error);
            });
    }, []);

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return (
        <button onClick={googleLogin}
        >
            <i className="fa-brands fa-google-plus-g"></i>
            Sing in with Google
        </button>
    )
}

export default LogIn;
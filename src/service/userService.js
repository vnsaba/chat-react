import {db} from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const searchUsers = async (searchTerm) => {
    //1. si no hay texto, retornamos l alista vacia
    if (!searchTerm) return [];

    const userRef = collection(db, "users");

    // Traer todos los usuarios y filtrar en el cliente
    const querySnapshot = await getDocs(userRef);

    const users = [];
    const searchTermLower = searchTerm.toLowerCase();
    
    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        // Comparar en minúsculas para búsqueda case-insensitive
        if (userData.displayName && userData.displayName.toLowerCase().includes(searchTermLower)) {
            users.push({id: doc.id, ...userData});
        }
    });
    
    // Limitar a 5 resultados
    return users.slice(0, 5);
}


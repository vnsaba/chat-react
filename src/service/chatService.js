import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const MY_ID = "mi_usuario"; // Asegúrate de que coincida con el senderId que pusiste en Firebase

export const subscribeToMessages = (chatId, callback) => {
  if (!chatId) return;

  // Apuntamos a la subcolección de mensajes de ESTE chat específico
  const messagesRef = collection(db, "chats", chatId, "messages");
  
  // Los ordenamos por fecha de creación (los más viejos arriba, los nuevos abajo)
  const q = query(messagesRef, orderBy("createdAt", "asc"));

  // onSnapshot escucha en tiempo real
  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        text: data.text,
        // Si el senderId soy yo, isMe es true (burbuja verde/derecha)
        isMe: data.senderId === MY_ID, 
        // Formateamos la hora si existe, si no ponemos un texto por defecto
        time: data.createdAt ? new Date(data.createdAt.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "Sending..."
      };
    });
    
    callback(messages);
  });
};
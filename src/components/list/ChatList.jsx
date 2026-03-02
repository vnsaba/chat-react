import { useState } from "react";
import AddContactModal from "./AddContactModal";
import UserRow from "./UserRow";

const ChatList = ({ onSelectChat }) => {

  const [chats, setChats] = useState([
    {
      id: "user_1",
      name: "Jane Smith",
      lastMessage: "Are you available for a call?",
      image: "https://i.pravatar.cc/150?u=jane",
      status: "online",
      time: "10:23 AM",
    },
    {
      id: "user_2",
      name: "Robert Fox",
      lastMessage: "I finished the project files.",
      image: "https://i.pravatar.cc/150?u=robert",
      status: "online",
      time: "Yesterday",

    },
    {
      id: "user_3",
      name: "Esther Howard",
      lastMessage: "Have a nice weekend!",
      image: "https://i.pravatar.cc/150?u=esther",
      status: "offline",
      time: "Mon",
    },
  ]);

  // estado apra controlar si el modal se ve o no
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // Función para agregar un nuevo chat (Simulación)
  const handleAddContact = (firebaseUser) => {

    const yaExiste = chats.some(chat => chat.id === firebaseUser.id);
    if (yaExiste) {
      setIsModalOpen(false); // Cerramos el modal
      return; // Salimos de la función para evitar agregar el chat
    }

    const newChat = {
      id: firebaseUser.id,
      name: firebaseUser.displayName,
      image: firebaseUser.photoURL || "https://i.pravatar.cc/150", // Foto por defecto si no tiene
      lastMessage: "New chat", // Mensaje inicial
      time: "Now",
      email: firebaseUser.email
    };

    // Agregamos el nuevo chat al inicio de la lista
    setChats([newChat, ...chats]);
    setIsModalOpen(false); // Cerramos el modal
  };

  return (
    <div>

      {/* titulo y añadir usuario */}
      <div className="flex justify-between items-center py-2 px-4 ">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Recent chats</h3>

        <button className="size-6 flex items-center rounded-full justify-center text-primary bg-primary/10 
        hover:bg-primary hover:text-white transition-all"  onClick={() => setIsModalOpen(true)}>
          <span className="material-symbols-outlined text-lg">
            Add
          </span>
        </button>

      </div>

      {/* lista de chats */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        {chats.map((chat) => {
          const isRowSelected = chat.id === selectedId;

          return (
            <div key={chat.id}
              onClick={() => {
                setSelectedId(chat.id); // Guardamos el ID seleccionado
                onSelectChat(chat);     // Avisamos al padre (App)
              }}
              
            >

              <UserRow
                key={chat.id}
                image={chat.image}
                name={chat.name}
                subtitle={chat.lastMessage}
                status={chat.status}
                isActive={isRowSelected}
                actionSlot={
                  <span className={`text-xs truncate mt-0.5 ${isRowSelected ? 'text-primary' : 'text-slate-500'}`}>
                    {chat.time}
                  </span>
                }
                disableHover={true} // Desactivamos el hover interno porque lo pusimos en el div padre
              />
            </div>
          )

        })}
      </div>


      {/* modal para añadir contacto */}
      {isModalOpen && (
        <AddContactModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddContact}
        />
      )}

    </div>
  )
}

export default ChatList

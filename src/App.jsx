import ChatWindow from './components/chat/chatWindow';
import DetailUser from './components/detail/DetailUser';
import AppLayout from './components/layout/AppLayout';
import ChatListSidebar from './components/list/ChatListSidebar';
import { useState } from 'react';

// SIMULACIÓN DE BASE DE DATOS DE MENSAJES
const MOCK_MESSAGES_DB = {
  // ID del usuario (debe coincidir con el id de la lista de la izquierda)
  "user_1": [
    { id: 1, text: "Hola! ¿Cómo vas con el proyecto?", time: "10:00 AM", isMe: false },
    { id: 2, text: "Todo bien, configurando Firebase.", time: "10:05 AM", isMe: true },
  ],
  "user_2": [
    { id: 1, text: "Nos vemos mañana?", time: "09:00 PM", isMe: false },
  ],
  "user_3": [
    { id: 1, text: "Te envié el diseño.", time: "11:00 AM", isMe: false },
    { id: 2, text: "Genial, ya lo reviso.", time: "11:02 AM", isMe: true },
    { id: 3, text: "Avísame cualquier cambio.", time: "11:05 AM", isMe: false },
  ]
};

const fakeCurrentUser = {
  uid: "id_john_doe",
  displayName: "John Doe",
  email: "jhonDoe@test.com",
  photoURL: "https://i.pravatar.cc/150?u=john"
};

function App() {
  const [selectedChat, setSelectedChat] = useState(null); // Iniciamos en null
  const currentMessages = selectedChat ? MOCK_MESSAGES_DB[selectedChat.id] || [] : [];

  return (
    <AppLayout >
      <div className='flex bg-slate-dark h-full w-full '>
        <div className='w-80 border-r border-slate-border/50  flex flex-col shrink-0'>
          <ChatListSidebar
            currentUser={fakeCurrentUser} onSelectChat={(chat) => setSelectedChat(chat)} />
        </div>


        <div className='flex-[2]'>
          {selectedChat ? (<ChatWindow chat={selectedChat} messages={currentMessages} />
          ) : (// Pantalla de bienvenida si no hay nadie seleccionado
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <p>Select a conversation to start chatting</p>
            </div>
          )}
        </div>

        <div className='flex-1'>
          <DetailUser />
        </div>

      </div>
    </AppLayout>
  );
}

export default App;

// flex h-full w-full
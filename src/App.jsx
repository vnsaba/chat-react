import ChatWindow from './components/chat/chatWindow';
import DetailUser from './components/detail/DetailUser';
import AppLayout from './components/layout/AppLayout';
import ChatListSidebar from './components/list/ChatListSidebar';

function App() {
  return (
    <AppLayout>
      <div className='flex bg-slate-700 h-full w-full '>
        <ChatListSidebar />
        <ChatWindow/>
        <DetailUser />
      </div>
    </AppLayout>
  );
}

export default App;

// flex h-full w-full
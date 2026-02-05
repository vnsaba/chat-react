import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
import Search from "./search";

const ChatListSidebar = () => {
  return (
    <div className='w-80 border-r border-slate-border/50 bg-slate-900 flex flex-col shrink-0'>
        <UserInfo />
        <div className="border-b border-slate-border/50"></div>
        <Search />
        <ChatList />
    </div>
  )
}

export default ChatListSidebar
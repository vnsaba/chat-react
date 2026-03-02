import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
import Search from "./search";

const ChatListSidebar = ({ currentUser, onSelectChat }) => {
  return (
    <div>
        <UserInfo currenUser={currentUser} />
        <div className="border-b border-slate-border/50"></div>
        <Search />
        <ChatList onSelectChat={onSelectChat} />
    </div>
  )
}

export default ChatListSidebar
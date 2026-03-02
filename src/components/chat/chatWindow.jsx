import ChatHeader from "./chatHeader"
import MessageInput from "./MessageInput"
import MessageList from "./MessageList"

const ChatWindow = ({ chat, messages }) => {
  return (
    <div className="h-full flex flex-col w-full">
      <ChatHeader
        name={chat?.name || "Unknown User"}
        image={chat?.image || "https://i.pravatar.cc/150?u=default"}
        status={chat?.status || "offline"}
      />


      <MessageList messages={messages} />
      
      <MessageInput />
    </div>
  )
}

export default ChatWindow
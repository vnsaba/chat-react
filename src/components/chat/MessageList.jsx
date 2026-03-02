
import MessageBubble  from './MessageBubble'
const MessageList = ({ messages = [] }) => {


  return (
    <div className=' flex-1 overflow-y-auto p-4 space-y-6'>

      {
        messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-500 text-sm">
            No messages here yet...
          </div>
        ) : (
          // Si hay mensajes, los recorremos
          messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              text={msg.text}
              time={msg.time}
              isMe={msg.isMe} // ¿Lo envié yo o el otro?
            />
          ))
        )
      }

    </div>
  )
}

export default MessageList

// flex-1 overflow-y-auto p-4 space-y-6 bg-[#0b0e11]
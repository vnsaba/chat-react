const MessageBubble = ({ text, time, isMe }) => {
  return (
    // 1. ALINEACIÓN: Si soy yo (isMe), justify-end (derecha). Si no, justify-start (izquierda).
    <div className={`flex w-full ${isMe ? 'justify-end' : 'justify-start'}`}>
      
      {/* 2. LA BURBUJA VISUAL */}
      <div className={`
          max-w-[70%] rounded-2xl px-4 py-2 shadow-sm
          ${isMe 
            ? 'bg-primary text-white rounded-br-none' // Estilo para MÍ (Color principal)
            : 'bg-[#202329] text-gray-200 rounded-bl-none' // Estilo para EL OTRO (Gris oscuro)
          }
      `}>
        {/* Texto del mensaje */}
        <p className="text-sm leading-relaxed">{text}</p>
        
        {/* Hora del mensaje */}
        <div className={`text-[10px] mt-1 text-right ${isMe ? 'text-primary-foreground/70' : 'text-gray-500'}`}>
          {time}
        </div>
      </div>

    </div>
  );
};

export default MessageBubble;
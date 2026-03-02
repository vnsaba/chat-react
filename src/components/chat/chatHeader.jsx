import UserRow from '../list/UserRow'

const ChatHeader = () => {
    return (
        <div className='border-b border-gray-800 w-full px-2 py- bg-'>
            <UserRow
                image="https://i.pravatar.cc/150?u=jane"
                name="Jane Smith"


                subtitle={
                    <div className="flex items-center gap-1.5">
                        <span className="text-green-500 font-bold text-[10px] tracking-widest uppercase">
                            Online
                        </span>
                    </div>
                }

                actionSlot={
                    <div className="flex items-center ">

                        {/* Botón Video */}
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
                            <span className="material-symbols-outlined text-[20px]">videocam</span>
                        </button>

                        {/* Botón Llamada */}
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
                            <span className="material-symbols-outlined text-[19px]">call</span>
                        </button>

                        {/* Botón Buscar */}
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </button>

                    </div>
                }
            />
        </div>
    )
}

export default ChatHeader
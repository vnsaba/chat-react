const MessageInput = () => {
    return (
        <div className=' p-6 bg-slate-900/50 border-t border-slate-border/30'>

            <div className=" bg-slate-800 flex items-center gap-2 rounded-2xl px-4 py-1.5 border border-slate-700/50
            focus-within:border-primary/50 transition-colors shadow-inner">

                {/*iconos*/}
                <div className=" flex gap-3 items-center ">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                            add_circle
                        </span>
                    </button>

                    <button className="text-slate-400 hover:text-primary  transition-colors">
                        <span className="material-symbols-outlined text-[22px]">
                            image
                        </span>
                    </button>

                    <button className="text-slate-400 hover:text-primary transition-colors ">
                        <span className="material-symbols-outlined text-[22px]">
                            mic
                        </span>
                    </button>
                </div>

                {/*input*/}
                <input type="text" placeholder="Type a message here..." className="flex-1 bg-transparent border-none text-sm py-3 
                text-slate-100 placeholder:text-slate-500 outline-none focus:ring-0" />

                <button className="text-slate-400 hover:text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                        mood
                    </span>
                </button >

                <button className="flex items-center justify-center size-10 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[22px]">
                        send
                    </span>
                </button>
            </div>

        </div>
    )
}

export default MessageInput
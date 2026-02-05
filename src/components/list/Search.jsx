const Search = () => {
    return (
        <>
            {/* barra de busqueda */}
            <div className="px-4 py-3">
                <div className="relative">
                    <input type="text" placeholder="search messages or contacts" className="w-full h-9 rounded-xl border-none bg-slate-800/50
          pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/40 focus:bg-slate-800 transition-all"/>
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">
                        search
                    </span>
                </div>
            </div>
        </>

    )
}

export default Search
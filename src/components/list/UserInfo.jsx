
const UserInfo = ( {currenUser} ) => {
  if (!currenUser) return null;
  return (
    <>
      {/* perfil del usuario */}
      <header className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">

          {/* avatar y nombre */}
          <div className="flex items-center gap-3">

            {/* avatar */}
            <div className="w-10 h-10 rounded-full  overflow-hidden bg-cover bg-center ring-slate-500 ring-2">
              <img src={currenUser.photoURL} alt="User" className="w-full h-full object-cover" />
            </div>

            {/* nombre  / my acount */}
            <div >
              <h3 className="text-sm font-bold text-white leading-tight">{currenUser.displayName}</h3>
              <p className="text-[11px] text-gray-500 font-medium">My Account</p>
            </div>
          </div>

          {/* iconos de accion */}
          <div>
            <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">
                edit
              </span>
            </button>
            <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">
                more_vert
              </span>
            </button>
          </div>

        </div>
      </header>
    </>
  )
}

export default UserInfo

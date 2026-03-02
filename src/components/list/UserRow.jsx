// src/components/shared/UserRow.jsx

const UserRow = ({
    image,
    name,
    subtitle,
    status, // online | offline
    isActive = false,   // Para el estilo azul seleccionado
    actionSlot,         // 👈 AQUÍ ESTÁ LA MAGIA: Recibe cualquier cosa (texto, botón, icono)
    onClick,      // Para hacer click en toda la fila
    disableHover = false // Nueva prop por defecto en false
}) => {
    return (
        <div
            onClick={onClick}
            className={`
        flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200
        
        ${isActive
                    ? 'bg-gradient-to-r from-indigo-600/10 to-indigo-600/5 border border-indigo-500/20 shadow-sm'
                    : 'hover:bg-slate-800 border border-transparent'
                }
                ${/* Si disableHover es true, quitamos el cursor pointer y el hover */
                disableHover
                    ? 'cursor-default'
                    : 'hover:bg-slate-800 border border-transparent'
                }
      `}
        >
            { /* AVATAR*/}
            <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full  overflow-hidden bg-cover bg-center">
                    <img src={image} alt="User" className="w-full h-full object-cover" />
                </div>
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-slate-dark rounded-full ${status === "online" ? 'bg-green-500' : 'bg-slate-400'}`}>
                </span>

            </div>

            { /* NOMBRE Y ESTADO */}
            <div className="flex flex-1 min-w-0 flex-col justify-center">
                <h3 className={`text-sm font-semibold truncate leading-tight ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-primary'}`}>
                    {name}</h3>
                <div className={`text-xs truncate mt-0.5 ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                    {subtitle}
                </div>
            </div>

            { /* SLOT PARA LA HORA O ACCIONES */}
            <div className="ml-2 flex-shrink-0">
                {actionSlot}
            </div>

        </div>

    );
};

export default UserRow;
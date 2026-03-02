import { useState } from 'react';
import {searchUsers} from "../../service/userService";
import UserRow from './UserRow'; // Tu componente visual

const AddContactModal = ({ onClose, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]); // Aquí guardamos los usuarios encontrados
  const [isLoading, setIsLoading] = useState(false);

  // Buscar usuarios cada vez que el input cambie
  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) { // Solo buscamos si hay más de 1 letra
      setIsLoading(true);
      try {
        const foundUsers = await searchUsers(value);
        setResults(foundUsers);
      } catch (error) {
        console.error("Error buscando:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setResults([]); // Limpiamos si borra el texto
    }
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#1a1d21] w-full max-w-md rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
        
        {/* Header del Modal */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-white font-bold">New Chat</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
             <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6">
          {/* INPUT DE BÚSQUEDA */}
          <div className="relative mb-6">
             <span className="absolute left-3 top-3 text-gray-500 material-symbols-outlined text-[20px]">search</span>
             <input 
               type="text"
               placeholder="Search by name (e.g. Jane)..."
               className="w-full bg-[#131517] text-white pl-10 pr-4 py-3 rounded-xl border border-gray-700 focus:border-indigo-500 outline-none transition-all"
               value={searchTerm}
               onChange={handleSearch}
               autoFocus
             />
          </div>

          {/* LISTA DE RESULTADOS SUGERIDOS */}
          <div className="space-y-1 max-h-[300px] overflow-y-auto">
             
             {/* Mensaje si está cargando */}
             {isLoading && <p className="text-gray-500 text-center text-xs">Searching...</p>}
             
             {/* Mensaje si no hay resultados */}
             {!isLoading && searchTerm.length > 1 && results.length === 0 && (
                <p className="text-gray-500 text-center text-xs">No users found.</p>
             )}

             {/* Mapeo de Usuarios Encontrados usando tu componente */}
             {results.map(user => (
                <UserRow 
                  key={user.id}
                  image={user.photoURL || "https://i.pravatar.cc/150"} // Fallback si no tiene foto
                  name={user.displayName}
                  subtitle={user.email} // Mostramos el correo abajo
                  disableHover={true}   // Opcional
                  
                  // SLOT MÁGICO: Botón de Agregar
                  actionSlot={
                    <button 
                      onClick={() => {
                        onAdd(user); // Pasamos el usuario entero al padre
                        onClose();
                      }}
                      className="px-3 py-1.5 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white text-xs font-medium rounded-lg transition-all"
                    >
                      Add
                    </button>
                  }
                />
             ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddContactModal;
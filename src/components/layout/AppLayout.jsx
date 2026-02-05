
// children prop: es el contenido variable que se va a renderizar dentro del layout
const AppLayout = ({ children }) => {
    return (
        <div className='flex h-screen w-full bg-[#1a1d21] overflow-hidden font-sans'>

            <main className="flex-1 h-full relative"> {/* area de contenido variable */}
                {children}
            </main>
        </div>
    )
}

export default AppLayout
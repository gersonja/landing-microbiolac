import Image from "next/image";

export default function Navbar () {
  return (
    <div className="flex items-center fixed top-0 w-full px-3 md:px-20 justify-between overflow-hidden bg-blue-400">
      <Image className="m-3 justify-start" src="/logo.svg" width={90} height={40} alt="logo" />
      <nav className="hidden md:flex font-bold">
        <a className="text-white hover:text-blue-800 hover:bg-white px-10 py-2 hover:rounded-xl transition-all duration-500" href="#inicio">
          Inicio
        </a>
        <a className="text-white hover:text-blue-800 hover:bg-white px-10 py-2 hover:rounded-xl transition-all duration-500" href="#nosotros">
          Nosotros
        </a>
        <a className="text-white hover:text-blue-800 hover:bg-white px-10 py-2 hover:rounded-xl transition-all duration-500" href="#servicios">
          Servicios
        </a>
        <a className="text-white hover:text-blue-800 hover:bg-white px-10 py-2 hover:rounded-xl transition-all duration-500" href="#contacto">
          Contacto
        </a>
      </nav>
      <div className="flex md:hidden justify-end">
        <button className="m-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

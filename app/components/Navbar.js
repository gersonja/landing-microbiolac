'use client'

import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
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
          <button className="m-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col fixed top-12 right-0 items-center justify-center bg-blue-400 z-50">
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
        </div>
      )}
    </>
  )
}

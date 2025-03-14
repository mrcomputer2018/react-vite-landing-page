import { useState } from "react";
import { assets } from "../assets/assets";
export default function Navbar() {
    
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="absolute top-0 left-0 w-full h-16 z-10">
            <div 
            className="container mx-auto flex items-center justify-between px-6 py-4 
            bg-transparent md:px-20 lg:px-32">
                <img src={assets.logo} alt="imagem do logotipo" />

                <ul className="hidden md:flex space-x-8 tesct-white">
                    <li className="">
                        <a href="" className="cursor-pointer hover:text-gray-400
                         text-white">
                            Home
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="cursor-pointer hover:text-gray-400
                         text-white">
                            Sobre
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="cursor-pointer hover:text-gray-400
                         text-white">
                            Projetos
                        </a>
                    </li>
                    <li className="">
                        <a href="" className="cursor-pointer hover:text-gray-400
                         text-white">
                            Testemunhos
                        </a>
                    </li>
                </ul>

                <button className="hidden md:block bg-white px-8 py-2 rounded-full 
                text-black font-bol">
                    Sign up
                </button>

                <button onClick={() => setShowMenu(!showMenu)}>
                    <img 
                    src={assets.menu_icon} 
                    alt="imagem do do menu hamburguer" 
                    className="md:hidden cursor-pointer
                    w-7 h-7 hover:opacity-60 
                    transition-all duration-400 
                    ease-in-out"/>
                </button>

                {/* menu mobile */}
                <div className={`${ showMenu? 'fixed w-full' : 'top-[-320px]'} md:hidden absolute top-0 left-0 w-full bg-white py-4 overflow-hidden transition-all duration-700 ease-in-out pl-5`}>
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <img 
                        src={assets.cross_icon} 
                        alt="imagem de icone de fachemento"
                        className="w-8 p-1 cursor-pointer
                        hover:opacity-20 transiotion-all
                        duration-300 ease-in-out" />
                    </button>

                    <ul
                    className="text-lg font-medium my-7 text-center"
                    >
                        <li className="">
                            <a href="" 
                            className="cursor-pointer hover:text-gray-400 py-2 
                            inline-block transsition-all duration-300 ease-in-out
                            ">
                                Home
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="cursor-pointer hover:text-gray-400 py-2 
                            inline-block transsition-all duration-300 ease-in-out">
                                Sobre
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="cursor-pointer hover:text-gray-400 py-2 
                            inline-block transsition-all duration-300 ease-in-out">
                                Projetos
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="cursor-pointer hover:text-gray-400 py-2 
                            inline-block transsition-all duration-300 ease-in-out0">
                                Testemunhos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
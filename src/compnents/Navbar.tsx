import { assets } from "../assets/assets";
export default function Navbar() {
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

                <button className="hidden md:block bg-white px-8 py-2 rounded-full text-black font-bol">
                    Sign up
                </button>
            </div>
        </div>
    )
}
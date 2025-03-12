import { assets } from "../assets/assets";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div 
        className="min-h-screen mb-7 bg-cover bg-center flex flex-col w-full overflow-hidden"
        style={{backgroundImage: `url(${assets.header_img})`}}
        >
           <Navbar />

           <div className="container flex flex-col items-center justify-center text-white text-center
           mx-auto py-4 px-6 Md:px-20 lg:px-32 h-screen">
                <h2 className="text--3xl sm:text-4xl md:text-[82px] inline-block font-semibold  max-w-3xl">
                    Explore as casas de seus sonhos
                </h2>

                <div className="mt-8 space-x-6">
                    <a href="#Projects" className=" border border-white px-8 py-3 rounded">
                        Projetos
                    </a>
                    <a href="#Contact" className="px-8 py-3 rounded bg-green-600">
                        Contate-nos
                    </a>
                </div>
           </div>
        </div>
    )
}
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer id="footer" className="mt-4 flex flex-col items-center justify-center bg-gray-900 text-gray-400">
            <div className="py-14 flex flex-col gap-4 md:flex-row md:justify-around md:gap-8 w-full">
                <div>
                    <img src={assets.logo_dark} alt="imagem logo escura" />

                    <p className="mt-4 max-w-sm">
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Modi numquam ad vitae, 
                        tenetur non, culpa odit, doloribus laborum 
                        dignissimos expedita tempora? 
                    </p>
                </div>

                <div className="max-w-sm">
                    <h3 className="text-gray-200 font-semibold">
                        Empresa
                    </h3>

                    <ul className="mt-4 max-w-sm text-sm flex flex-col gap-2">
                        <li>
                            <a href="#Hero"
                            className="hover:opacity-60 hover:ml-2 transition-all duration-500 ease-in-out"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#HAbout"
                            className="hover:opacity-60 hover:ml-2 transition-all duration-500 ease-in-out"
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#Contact"
                            className="hover:opacity-60 hover:ml-2 transition-all duration-500 ease-in-out"
                            >
                                Contato
                            </a>
                        </li>
                        <li>
                            <a href=""
                            className="hover:opacity-60 hover:ml-2 transition-all duration-500 ease-in-out"
                            >
                                 Política de Privacidade
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-gray-200 font-semibold">
                        Newsletter
                    </h3>
                    <p className="mt-4 max-w-sm text-sm">
                        As últimas notícias, artigos e recursos, enviados 
                        semanalmente para sua caixa de entrada.

                    </p>

                    <div className="mt-4">
                        <form action="" className="flex flex-row gap-1 max-w-sm">
                            <Input 
                            type="email"
                            placeholder="Digite seu email..."
                            className="bg-gray-800 border-gray-800 text-gray-200"
                            />
                            <Button type="submit" className="bg-green-600 txt-gray-200">
                                Assinar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="p-4 border-gray-700 border-t-2 w-full">
                <p className="text-center text-sm">
                    © 2025 por Marcelo Ribeiro. 
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
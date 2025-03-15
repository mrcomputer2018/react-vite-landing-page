import { assets } from "../assets/assets";

export default function About() {
    return (
        <section className="mt-14 mb-26 flex flex-col items-center justify-center px-1">
            <div className="mb-18 text-center">
                <h2 className="text-4xl tracking-wide">
                    <strong
                    className="mr-3 font-bold"
                    >
                        Sobre
                    </strong>
                    <span className="underline font-light">
                        Nossa Marca
                    </span>
                </h2>
                <span className="capitalize opacity-70 p-2">
                    Apaixonados por imóveis, dedicados à sua visão
                </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-10">
                <div className="w-1/2">
                    <img 
                    src={assets.brand_img} 
                    alt="imagem da fachada da empresa"
                    className="max-w-[400px] md:max-w-[520px] p-4 md:p-2" />
                </div>

                <div className="px-4 mt-10 lg:w-1/2">
                    <div className="flex flex-row space-x-8 my-7">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">
                                10+
                            </span>
                            <span>Anos de Excelencia</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">
                                12+
                            </span>
                            <span>Projetos Completos</span>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-8 my-7">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">
                                20+
                            </span>
                            <span>Imoveis vendidos</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">
                                25+
                            </span>
                            <span>Projetos em Andamento</span>
                        </div>
                    </div>

                    <p className="text-md max-w-md my-7 opacity-70 tracking-wide">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Minima, voluptate aliquam ratione reprehenderit ex hic, 
                        magni nesciunt assumenda animi beatae quas autem provident 
                        impedit, qui aut! Voluptas, officia? Cupiditate, ullam!
                    </p>

                    <button className="bg-green-600 px-8 py-3 text-white rounded 
                    hover:opacity-70 elevation-2 shadow-md transition-all
                    duration-300 ease-in-out">
                        Saiba Mais
                    </button>
                    
                </div>
            </div>
        </section>
    )
}
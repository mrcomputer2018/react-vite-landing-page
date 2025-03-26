import { testimonialsData } from "@/assets/assets"
import { Star } from "lucide-react"

export default function Testimonials() {
    return (
        <section className="mt-14 mb-26 flex flex-col items-center justify-center px-1">
            <div className="mb-18 text-center">
                <h2 className="text-4xl tracking-wide">
                    <strong
                    className="mr-3 font-bold"
                    >
                        Testemunhos
                    </strong>
                    <span className="underline font-light">
                        dos Clientes
                    </span>
                </h2>
                <span className="capitalize opacity-70 p-2">
                    histórias reais de quem encontrou um lar conosco
                </span>
            </div>

            <div className="flex flex-col mb-6 md:mb-0 md:flex-row justify-center gap-10 max-w-7xl">
                {testimonialsData.map((testimonial, index) => (
                    <div 
                    key={index} 
                    className="flex flex-col items-center justify-center py-8 px-4 
                    space-x-8 bg-white rounded-lg shadow-md max-w-[310px] mx-5">
                        <img 
                        src={testimonial.image} 
                        alt="imagem da testemunha" 
                        className="w-20 h-20 rounded-full mb-4"
                        />

                        <div className="mb-4 flex flex-col items-center justify-center">
                            <h3 className="text-center text-xl font-bold">
                                {testimonial.name}
                            </h3>
                            <span className="text-center text-md opacity-70 font-lifht">
                                {testimonial.title}
                            </span>
                        </div>

                        <div className="text-center text-md font-light mb-4">
                            {[...Array(testimonial.rating)].map((_, index) => {
                                return <Star key={index} className="w-5 h-5 inline text-yellow-500" />
})}
                        </div>

                        <div>
                            <p className="text-center textsm font-light px-2">
                                {testimonial.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
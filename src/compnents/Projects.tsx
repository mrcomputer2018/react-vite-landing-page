import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projectsData } from "@/assets/assets";
import { useState } from "react";

export default function Projects() {

    const [ projects ] = useState(projectsData);

    return (
        <section className="mt-14 mb-26 flex flex-col items-center justify-center px-1">
            <div className="mb-18 text-center">
                <h2 className="text-4xl tracking-wide">
                    <strong
                    className="mr-3 font-bold"
                    >
                        Projetos
                    </strong>
                    <span className="underline font-light">
                        Completados
                    </span>
                </h2>
                <span className="capitalize opacity-70 p-2">
                    criando espaços, construindo legados - explore nosso portfólio
                </span>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-3 px-2">
                <Carousel className="w-full max-w-7xl">
                    <CarouselContent className="-ml-1">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                                <div className="p-0">
                                    <Card>
                                        <CardContent className="flex flex-col aspect-square items-center 
                                        justify-center">
                                            <img src={project.image} alt="" />

                                            <div className="bg-white absolute bottom-[15px] px-4 py-1 
                                            border border-gray-200 elevation-2 shadow-lg w-[200px]">
                                                <h3 className="text-md font-bold">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm opacity-60">
                                                    {project.price} - {project.location}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            ))}
                    </CarouselContent>
                    
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}
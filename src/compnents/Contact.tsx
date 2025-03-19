import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <section className="mt-14 mb-26 flex flex-col items-center justify-center px-1">
            <div className="mb-18 text-center">
                <h2 className="text-4xl tracking-wide">
                    <strong
                    className="mr-3 font-bold"
                    >
                        Entre em
                    </strong>
                    <span className="underline font-light">
                        Contato Conosco
                    </span>
                </h2>
                <span className="capitalize opacity-70 p-2">
                pronto para fazer uma mudança? vamos construir seu futuro juntos.
                </span>
            </div>

            <div className="w-full max-w-4xl">
                <Card>
                    <CardContent>
                        <form action="">
                            <div className="flex flex-row gap-4 mb-6">
                                <div className="w-1/2">
                                    <Label 
                                    htmlFor="name" 
                                    className="text-md">
                                        Nome
                                    </Label>
                                    <Input 
                                        id="name"
                                        type="text"
                                        placeholder="Digite seu nome..."
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <Label 
                                    htmlFor="email" 
                                    className="text-md">
                                        Email
                                    </Label>
                                    <Input 
                                        id="email"
                                        type="email"
                                        placeholder="Digite seu email..."
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="message">Mensagem</Label>
                                <Textarea  placeholder='Mensagem' id='message' rows={10}/>
                            </div>

                            <div>
                                <Button type="submit" className="bg-green-600 text-white">
                                    Enviar
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
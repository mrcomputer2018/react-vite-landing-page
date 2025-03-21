import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ loading, setLoading ] = useState(false);

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    function sendMail(event: React.FormEvent<HTMLFormElement> ) {

        event.preventDefault();
        
        setLoading(true);

        if (!name || !email || !message) {
           toast("Erro!!!",{
                className: 'bg-red-500 border border-red-500 text-white',
                description: "Todos os campos são obrigatórios",
                duration: 5000,
                icon: (
                    <MessageCircle className="w-4 h-4 mr-2 !text-red-500"/>
                )
           })

            return;
        }

        emailjs
        .send(serviceId, templateId, {
            name,
            email,
            message
        }, publicKey)
        .then(
            () => {
                console.log("Email enviado com sucesso");

                setLoading(false);

                toast("Sucesso!!!", {
                    className: 'bg-green-600 border border-green-600 text-white',
                    description: "Mensagem enviada com sucesso",
                    duration: 5000,
                    icon: (
                        <MessageCircle className="w-4 h-4 mr-2 !text-green-500"/>
                    )
                })
            },
            (error) => {
                console.log("Erro ao enviar email", error);

                setLoading(false);

                toast("Erro!!!", {
                    className: 'bg-red-500 border border-red-500 text-white',
                    description: "Erro ao enviar mensagem",
                    duration: 5000,
                    icon: (
                        <MessageCircle className="w-4 h-4 mr-2 !text-red-500"/>
                    )
                })
            }
        )
    }


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
                        <form action="" onSubmit={sendMail}>
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
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
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
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        id="email"
                                        type="email"
                                        placeholder="Digite seu email..."
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="message">Mensagem</Label>

                                <Textarea 
                                 placeholder='Mensagem' 
                                 id='message' rows={10}
                                 value={message}
                                 onChange={(event) => setMessage(event.target.value)}
                                 />
                            </div>

                            <div className=" flex justify-center">
                                <Button type="submit" title="Enviar Mensagem"/>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
"use client"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FiUser, FiMail, FiMessageSquare, FiSend, FiClock, FiCheckCircle } from "react-icons/fi"
import AOS from "aos"
import "aos/dist/aos.css"

// Definição do Schema do Zod com validações explícitas em português
const contactSchema = z.object({
    name: z.string().min(2, "Por favor, insira seu nome completo"),
    email: z.string().email("Insira um endereço de e-mail válido"),
    description: z.string()
        .min(10, "Sua mensagem deve conter pelo menos 10 caracteres")
        .max(500, "Sua descrição excedeu o limite máximo de 500 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease",
        })
    }, [])

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            description: ""
        }
    })

    const onSubmit = async (data: ContactFormData) => {
        // Simulação de envio para a API
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Dados validados e prontos para a API:", data)
        reset()
    }

    return (
        <section className="relative w-full bg-(--bg-main) py-20 md:py-28 overflow-hidden border-t border-(--border-main)">

            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-125 h-125 bg-green/3 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-100 h-100 bg-green/4 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32" data-aos="fade-right">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-(--color-green) bg-(--bg-card) border border-(--border-main2) px-4 py-1.5 rounded-full shadow-sm">
                            <FiClock className="animate-spin-slow text-xs" /> Estamos ativos 24h
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-(--text-primary)">
                            Entre em contato com nosso suporte{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                                via e-mail
                            </span>
                        </h2>

                        <p className="text-base text-(--text-secondary) font-light leading-relaxed">
                            Nossa equipe de suporte está disponível 24 horas por dia. Após o envio da sua solicitação, você receberá um e-mail com o ID do chamado para acompanhamento. Assim que sua mensagem for analisada, entraremos em contato para oferecer todo o suporte necessário e solucionar o seu problema da melhor forma possível.
                        </p>

                        <div className="pt-4 space-y-3">
                            <div className="flex items-start gap-3 text-sm text-(--text-secondary) font-light">
                                <FiCheckCircle className="text-(--color-green) text-base shrink-0 mt-0.5" />
                                <span>Geração de Ticket automatizada direto na caixa de entrada.</span>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-(--text-secondary) font-light">
                                <FiCheckCircle className="text-(--color-green) text-base shrink-0 mt-0.5" />
                                <span>Acompanhamento em tempo real por engenheiros de software.</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 w-full" data-aos="fade-left" data-aos-delay="200">
                        <div className="relative rounded-3xl bg-(--bg-card) border border-(--border-main2) p-6 sm:p-10 shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">

                            {isSubmitSuccessful && (
                                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-light flex items-center gap-3 animate-fade-in">
                                    <FiCheckCircle className="text-lg shrink-0" />
                                    <span>Sua mensagem foi enviada com sucesso! Verifique seu e-mail para acompanhar o chamado.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-(--text-primary) tracking-wider uppercase">
                                        Nome Completo
                                    </label>
                                    <div className="relative flex items-center">
                                        <FiUser className="absolute left-4 text-(--text-secondary) opacity-40 text-base pointer-events-none" />
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Ex: Wendell Bonucci"
                                            {...register("name")}
                                            className={`w-full bg-(--bg-main) border rounded-xl pl-11 pr-4 py-4 text-sm font-light text-(--text-primary) placeholder-white/20 focus:outline-hidden transition-all duration-300 ${errors.name ? "border-red-500/50 focus:border-red-500" : "border-(--border-main2) focus:border-green/50"
                                                }`}
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-xs font-light text-red-400 tracking-wide mt-1 pl-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-(--text-primary) tracking-wider uppercase">
                                        E-mail para Retorno
                                    </label>
                                    <div className="relative flex items-center">
                                        <FiMail className="absolute left-4 text-(--text-secondary) opacity-40 text-base pointer-events-none" />
                                        <input id="email" type="email" placeholder="Ex: wendell@empresa.com"
                                            {...register("email")}
                                            className={`w-full bg-(--bg-main) border rounded-xl pl-11 pr-4 py-4 text-sm font-light text-(--text-primary) placeholder-white/20 focus:outline-hidden transition-all duration-300 ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-(--border-main2) focus:border-green/50"}`} />
                                    </div>
                                    {errors.email && (
                                        <p className="text-xs font-light text-red-400 tracking-wide mt-1 pl-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="description" className="text-xs font-bold text-(--text-primary) tracking-wider uppercase">
                                        Descrição da Solicitação
                                    </label>
                                    <div className="relative flex items-start">
                                        <FiMessageSquare className="absolute left-4 top-4 text-(--text-secondary) opacity-40 text-base pointer-events-none" />
                                        <textarea id="description" rows={5} placeholder="Descreva detalhadamente qual problema você está enfrentando ou o motivo do seu contato..."
                                            {...register("description")}
                                            className={`w-full bg-(--bg-main) border rounded-xl pl-11 pr-4 py-4 text-sm font-light text-(--text-primary) placeholder-white/20 focus:outline-hidden resize-none transition-all duration-300 ${errors.description ? "border-red-500/50 focus:border-red-500" : "border-(--border-main2) focus:border-green/50"}`} />
                                    </div>
                                    {errors.description && (
                                        <p className="text-xs font-light text-red-400 tracking-wide mt-1 pl-1">{errors.description.message}</p>
                                    )}
                                </div>

                                <div className="pt-2">
                                    <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-(--color-green) to-(--color-green-700) text-black font-extrabold text-sm py-4 rounded-xl cursor-pointer shadow-[0_6px_24px_rgba(74,222,128,0.15)] hover:shadow-[0_6px_32px_rgba(74,222,128,0.3)] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                                Processando Solicitação...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Mensagem
                                                <FiSend className="text-base" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
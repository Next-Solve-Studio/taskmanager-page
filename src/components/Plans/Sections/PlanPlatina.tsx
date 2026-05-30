"use client"
import React, { FormEvent, useEffect } from "react"
import { FiMail, FiCheck, FiGift, FiPercent } from "react-icons/fi"
import { TfiCrown } from "react-icons/tfi";
import AOS from "aos"
import "aos/dist/aos.css"

export default function PlanPlatina() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease",
        })
    }, [])

    const handleSubscribe = (e: FormEvent) => {
        e.preventDefault()
        alert("Inscrição realizada com sucesso! Você está na lista VIP.")
    }

    return (
        <section className="relative w-full bg-(--bg-main) py-20 md:py-28 overflow-hidden border-t border-(--border-main)">

            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-87.5 bg-slate-400/5 rounded-full blur-[120px]" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-50 bg-green/5 rounded-full blur-[100px]" />

            <div className="relative max-w-5xl mx-auto px-6 md:px-10 w-full z-10">

                <div className="relative w-full rounded-3xl bg-linear-to-b from-white/3 via-transparent to-transparent border border-white/10 p-8 md:p-14 lg:p-16 overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.6)] group backdrop-blur-xs" data-aos="fade-up">

                    <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-400/40 to-transparent" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                        <div className="lg:col-span-7 space-y-6 text-left">

                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full shadow-inner">
                                <TfiCrown className="text-slate-300 text-xs animate-pulse" />
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-slate-300">Em Breve • O Máximo Poder</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-(--text-primary) leading-[1.15]">
                                Plano{" "}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 via-slate-400 to-slate-200 
                                drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">Platina</span>
                            </h2>

                            <p className="text-sm sm:text-base text-(--text-secondary) font-light leading-relaxed">
                                Prepare-se para a experiência definitiva. O Plano Platina trará acesso completo a todas as ferramentas sem qualquer limitação, suporte em tempo real dedicado e integrações enterprise personalizadas para o seu ecossistema.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center gap-3 bg-white/2 border border-white/5 p-3 rounded-xl">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-(--color-green)/10 text-(--color-green)">
                                        <FiGift size={16} />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium text-(--text-primary)">
                                        1 Mês totalmente Grátis
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 bg-white/2 border border-white/5 p-3 rounded-xl">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-(--color-green)/10 text-(--color-green)">
                                        <FiPercent size={16} />
                                    </div>
                                    <span className="text-xs md:text-sm font-medium text-(--text-primary)">
                                        30% OFF na assinatura anual
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 w-full">
                            <div className="p-6 md:p-8 rounded-2xl bg-white/1 border border-white/5 shadow-2xl relative">
                                <h3 className="text-base font-bold text-(--text-primary) tracking-wide">
                                    Entre na lista de espera VIP
                                </h3>
                                <p className="mt-1.5 text-xs text-(--text-secondary) font-light leading-relaxed">
                                    Seja notificado em primeira mão no lançamento e garanta os benefícios de desconto exclusivos.
                                </p>

                                <form onSubmit={handleSubscribe} className="mt-6 space-y-3">
                                    <div className="relative flex items-center">
                                        <FiMail className="absolute left-4 text-(--text-secondary) opacity-50 text-base pointer-events-none" />
                                        <input type="email" required placeholder="Seu melhor e-mail"
                                            className="w-full bg-(--bg-main) border border-(--border-main2) rounded-xl pl-11 pr-4 py-3.5 text-sm font-light text-(--text-primary) placeholder-white/30 focus:outline-hidden focus:border-green/50 transition-all duration-300"/>
                                    </div>

                                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-extrabold text-sm py-3.5 rounded-xl cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:bg-slate-200 active:scale-[0.99] transition-all duration-300">
                                        Garantir meu Desconto
                                    </button>
                                </form>

                                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-(--text-secondary) opacity-40">
                                    <FiCheck />
                                    <span>Sem spam. Cancele as notificações a qualquer momento.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-[60px] pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
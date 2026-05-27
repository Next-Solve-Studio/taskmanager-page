"use client"
import { useEffect } from "react"
import { FiUsers, FiCalendar, FiPieChart } from "react-icons/fi"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AboutHome() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease",
        })
    }, [])

    return (
        <section className="flex flex-col items-center justify-center bg-(--bg-main) text-(--text-primary) py-24 md:py-32 border-t border-(--border-main) relative overflow-hidden min-h-screen">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-125 h-125 bg-green/4 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-125 h-125 bg-green/4 rounded-full blur-[140px] pointer-events-none hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

                    <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
                        <span className="inline-flex items-center text-xs md:text-sm font-semibold tracking-widest uppercase text-(--color-green) bg-(--bg-card) border 
                        border-(--border-main2) px-4 py-1.5 rounded-full shadow-sm">
                            Quem somos, e o que fazemos?
                        </span>

                        <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-(--text-primary)">
                            Gestão inteligente para você se organizar melhor e se preocupar menos, um sistema{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                                simples, intuitivo e fácil
                            </span>{" "}
                            de entender.
                        </h2>
                    </div>

                    <div className="lg:col-span-6 space-y-10" data-aos="fade-left" data-aos-delay="200">

                        <p className="text-base sm:text-lg text-(--text-secondary) font-light leading-relaxed">
                            Isso mesmo! O <span className="text-(--text-primary) font-medium">Task Manager</span> é um sistema com um propósito simples, mas extremamente eficiente: ajudar sua empresa a manter tudo organizado de forma prática, inteligente e 100% centralizada.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">

                            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-(--bg-card) border border-(--border-main2) transition-all duration-300 hover:border-green/20 
                            hover:bg-(--bg-surface) hover:-translate-y-1 group shadow-lg">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-(--bg-surface) border border-(--border-main2) text-(--color-green) 
                                group-hover:bg-(--color-green) group-hover:text-black transition-all duration-300 shadow-md">
                                    <FiUsers size={22} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-base font-bold text-(--text-primary) tracking-wide">Equipes em Sincronia</h3>
                                    <p className="text-sm text-(--text-secondary) font-light leading-relaxed">
                                        Cadastre colaboradores e acompanhe, em tempo real, as atividades e projetos de cada equipe.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-(--bg-card) border border-(--border-main2) transition-all duration-300 hover:border-green/20 
                            hover:bg-(--bg-surface) hover:-translate-y-1 group shadow-lg">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-(--bg-surface) border border-(--border-main2) text-(--color-green) 
                                group-hover:bg-(--color-green) group-hover:text-black transition-all duration-300 shadow-md">
                                    <FiCalendar size={22} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-base font-bold text-(--text-primary) tracking-wide">Calendário Prático</h3>
                                    <p className="text-sm text-(--text-secondary) font-light leading-relaxed">
                                        Visualize reuniões, prazos de entrega e futuros lançamentos de maneira clara e cronológica.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-(--bg-card) border border-(--border-main2) transition-all duration-300 hover:border-green/20 hover:bg-(--bg-surface) sm:col-span-2 hover:-translate-y-1 group shadow-lg">
                                <div className="flex items-center justify-center min-w-12 w-12 h-12 rounded-xl bg-(--bg-surface) border border-(--border-main2) text-(--color-green) group-hover:bg-(--color-green) group-hover:text-black transition-all duration-300 shadow-md">
                                    <FiPieChart size={22} />
                                </div>
                                <div className="space-y-1.5">
                                    <h3 className="text-base font-bold text-(--text-primary) tracking-wide">Painel Centralizado</h3>
                                    <p className="text-sm text-(--text-secondary) font-light leading-relaxed max-w-xl">
                                        Tenha acesso a um dashboard completo e intuitivo para gerenciar clientes, parceiros e métricas com uma interface limpa e moderna.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
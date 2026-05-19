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
        <section className="bg-(--bg-main) text-(--text-primary) py-20 md:py-28 border-t border-(--border-main) relative overflow-hidden min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

                {/* GRID PRINCIPAL ASIMÉTRICO */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* COLUNA ESQUERDA: Chamada Principal */}
                    <div className="lg:col-span-5 space-y-4" data-aos="fade-right">
                        <span className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-[var(--color-green)] bg-[var(--bg-card)] border border-[var(--border-main2)] px-3 py-1 rounded-full">
                            Quem somos, e o que fazemos?
                        </span>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.25] text-(--text-primary)">
                            Gestão inteligente para você se organizar melhor e se preocupar menos, um sistema{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-green)] to-[var(--color-green-700)]">
                                simples, intuitivo e fácil
                            </span>{" "}
                            de entender.
                        </h1>
                    </div>

                    {/* COLUNA DIREITA: Texto transformado em blocos escaneáveis */}
                    <div className="lg:col-span-7 space-y-8" data-aos="fade-left" data-aos-delay="200">

                        <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                            Isso mesmo! O <span className="text-(--text-primary) font-bold">Task Manager</span> é um sistema com um propósito simples, mas extremamente eficiente: ajudar sua empresa a manter tudo organizado de forma prática, inteligente e 100% centralizada.
                        </p>

                        {/* MINICARDS DOS PILARES (Seu texto resumido visualmente) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

                            {/* Item 1 */}
                            <div className="flex gap-4 group">
                                <div className="flex items-center justify-center min-w-10 min-h-10 w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main2)] text-[var(--color-green)] group-hover:bg-[var(--color-green)] group-hover:text-black transition-colors duration-300 shadow-md">
                                    <FiUsers size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-semibold text-(--text-primary)">Equipes em Sincronia</h3>
                                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                                        Cadastre colaboradores e acompanhe, em tempo real, as atividades e projetos de cada equipe.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-4 group">
                                <div className="flex items-center justify-center min-w-10 min-h-10 w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main2)] text-[var(--color-green)] group-hover:bg-[var(--color-green)] group-hover:text-black transition-colors duration-300 shadow-md">
                                    <FiCalendar size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-semibold text-(--text-primary)">Calendário Prático</h3>
                                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                                        Visualize reuniões, prazos de entrega e futuros lançamentos de maneira clara e cronológica.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex gap-4 group sm:col-span-2">
                                <div className="flex items-center justify-center min-w-10 min-h-10 w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main2)] text-[var(--color-green)] group-hover:bg-[var(--color-green)] group-hover:text-black transition-colors duration-300 shadow-md">
                                    <FiPieChart size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-semibold text-(--text-primary)">Painel Centralizado</h3>
                                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
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
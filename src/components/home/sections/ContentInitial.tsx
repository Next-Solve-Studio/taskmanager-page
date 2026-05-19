"use client"
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

export default function ContentInitial() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-(--bg-main) overflow-hidden pt-20">

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-green/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-75 h-75 bg-emerald-500/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-6 md:px-10 flex flex-col items-center text-center z-10">

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--bg-surface) border border-(--border-main2) text-xs font-medium text-(--color-green) mb-6 shadow-[0_0_15px_rgba(74,222,128,0.05)]">
                    <FiCheckCircle className="text-xs" />
                    Plataforma All-in-One
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-(--text-primary) tracking-tight max-w-4xl leading-[1.1] mb-6">
                    Simplifique a gestão de seus{" "}
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                        <Typewriter
                            words={['Colaboradores.', 'Projetos.', 'Prazos.']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={90}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-(--text-secondary) max-w-2xl font-light leading-relaxed mb-10">
                    O <span className="text-(--text-primary) font-medium">Task Manager</span> centraliza tarefas, mede a produtividade e otimiza o fluxo de trabalho da sua empresa em uma única interface inteligente.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <Link href="#register" className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-(--color-green) text-black font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-(--color-green-700) hover:text-white hover:shadow-[0_0_25px_rgba(74,222,128,0.25)] transition-all duration-300">
                        Começar Agora Grátis
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 text-base" />
                    </Link>

                    <Link href="#demo" className="flex items-center justify-center w-full sm:w-auto bg-(--bg-card) text-(--text-primary) font-medium text-sm px-8 py-3.5 rounded-xl border border-(--border-main2)  hover:bg-(--bg-surface) hover:border-(--text-muted) transition-all duration-300">
                        Agendar Demonstração
                    </Link>
                </div>
            </div>
        </section>
    )
}
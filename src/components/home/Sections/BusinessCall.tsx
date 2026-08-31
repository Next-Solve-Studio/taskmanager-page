"use client"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

export default function BusinessCall() {
    return (
        <section className="relative w-full bg-(--bg-main) py-20 md:py-28 overflow-hidden border-t border-(--border-main)">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-green/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full relative z-10">

                <div className="relative w-full rounded-3xl bg-linear-to-br from-green/10 via-green-900/5 to-transparent border border-green/20 p-8 md:p-16 lg:p-20 text-center overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] group" data-aos="zoom-in" data-aos-duration="800">

                    <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 px-4 py-1.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-(--color-green) animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-(--color-green)">
                            Acelere sua Empresa
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-(--text-primary) max-w-4xl mx-auto leading-[1.15]">
                        Mais organização, produtividade e controle para sua empresa. A gestão inteligente que você precisa está no{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-green-500">
                            Task Manager
                        </span>.
                    </h2>

                    <p className="mt-6 text-base sm:text-lg text-(--text-secondary) font-light max-w-2xl mx-auto leading-relaxed">
                        Gerencie atividades, clientes e colaboradores de forma simples, organizada e inteligente. Tenha uma visão completa da sua empresa com dashboards modernos e estratégicos.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/https://taskmanager.nextsolve.com.br/login" className="group inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-(--color-green) to-(--color-green-700) text-black font-extrabold text-base px-10 py-4 rounded-xl shadow-[0_8px_32px_rgba(74,222,128,0.25)] hover:shadow-[0_8px_40px_rgba(74,222,128,0.45)] hover:brightness-110 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto">
                            Comece agora!
                            <FiArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform duration-200" />
                        </Link>
                    </div>

                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-green/5 rounded-full blur-[80px] pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
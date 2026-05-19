"use client"
import Link from "next/link"
import Image from "next/image"
import { FiArrowRight } from "react-icons/fi"

export default function StartSistem() {
    return (
        <section className="bg-(--bg-main) text-(--text-primary) py-20 md:py-28 overflow-hidden border-t border-(--border-main)">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="relative flex justify-center order-2 md:order-1 group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-green/5 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative transition-transform duration-500 ease-in-out group-hover:-translate-y-2 rounded-2xl">
                            <Image
                                width={500}
                                height={500}
                                alt="Ilustração de gerenciamento inteligente de projetos"
                                src='/ilustrativeimage1.png'
                                className="w-full max-w-100 md:max-w-120 h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 order-1 md:order-2 max-w-xl mx-auto md:mx-0">

                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.2] text-(--text-primary)">
                            Gerencie projetos e ganhe tempo para focar no crescimento do negócio com uma{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                                visão mais ampla
                            </span>
                        </h2>

                        <p className="text-sm sm:text-base text-(--text-secondary) font-light leading-relaxed">
                            Com o sistema <span className="text-(--text-primary) font-medium">Task Manager</span>, você automatiza processos como o controle de atividades, a operação diária e o acompanhamento através de <span className="text-(--text-primary) font-medium">dashboards inteligentes</span>, conectando todas as informações dos colaboradores da sua empresa em um único ecossistema.
                        </p>

                        <div className="pt-2">
                            <Link href="#register" className="group inline-flex items-center justify-center gap-2 bg-(--bg-card) text-(--text-primary) border border-(--border-main2) font-semibold text-xs md:text-sm px-6 py-3 rounded-xl hover:bg-(--bg-surface) hover:border-(--text-muted) hover:text-(--color-green) transition-all duration-300 shadow-lg">
                                Comece Agora!
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 text-sm" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
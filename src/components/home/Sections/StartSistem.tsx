"use client"
import Link from "next/link"
import Image from "next/image"
import { FiArrowRight, FiCheckCircle } from "react-icons/fi"

const highlights = [
    "Controle de atividades automatizado",
    "Dashboards inteligentes em tempo real",
    "Colaboradores conectados em um ecossistema",
]

export default function StartSistem() {
    return (
        <section className="relative flex flex-col items-center justify-center bg-(--bg-main) text-(--text-primary) py-24 md:py-36 overflow-hidden border-t border-(--border-main)">
    
            <div className="pointer-events-none absolute -top-32 -right-32 w-150 h-150 rounded-full bg-green/5 blur-[130px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-100 h-100 bg-green/4 blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

                    <div className="lg:col-span-6 flex flex-col space-y-8 order-2 lg:order-2" data-aos="fade-right" data-aos-duration="700">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-green/10 pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full border border-green/5 pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-green/6 rounded-full blur-[90px] pointer-events-none" />

                        <div className="group relative z-10 w-full max-w-157.5">

                            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-green/40 rounded-tl-xl" />
                            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-green/40 rounded-br-xl" />

                            <div className="rounded-2xl border border-(--border-main2) bg-(--bg-card) p-3 shadow-[0_32px_80px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                                <Image
                                    width={630}
                                    height={500}
                                    alt="Ilustração de gerenciamento inteligente de projetos"
                                    src="/taksmanger.png"
                                    priority
                                    className="w-full h-auto object-contain rounded-xl" 
                                />
                            </div>

                            <div className="absolute -bottom-5 -right-4 flex items-center gap-2.5 bg-(--bg-surface) border border-(--border-main2) rounded-xl px-4 py-2.5 shadow-xl"
                                data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-semibold text-(--text-secondary) tracking-wide">
                                    Sistema <span className="text-(--color-green)">ativo</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col space-y-8 order-1 lg:order-2 max-w-2xl mx-auto lg:mx-0">

                        <div className="flex items-center gap-3" data-aos="fade-left" data-aos-duration="500">
                            <span className="h-px w-10 bg-green/60" />
                            <span className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-(--color-green) opacity-90">Gestão Inteligente</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-(--text-primary)"
                            data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">
                            Gerencie projetos e ganhe tempo para focar no crescimento do negócio com uma{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">visão mais ampla</span>
                        </h2>

                        <p className="text-base sm:text-lg text-(--text-secondary) font-light leading-relaxed"
                            data-aos="fade-left" data-aos-delay="150" data-aos-duration="600">
                            Com o sistema{" "}
                            <span className="text-(--text-primary) font-medium">Task Manager</span>,
                            você automatiza processos como o controle de atividades, a operação diária e o
                            acompanhamento através de{" "}
                            <span className="text-(--text-primary) font-medium">dashboards inteligentes</span>,
                            conectando todas as informações dos colaboradores da sua empresa em um único ecossistema.
                        </p>

                        <ul className="flex flex-col gap-3.5">
                            {highlights.map((item, i) => (
                                <li key={item} className="flex items-center gap-3.5 text-sm sm:text-base text-(--text-secondary) font-light"
                                    data-aos="fade-left" data-aos-delay={200 + i * 80} data-aos-duration="500">
                                    <FiCheckCircle className="shrink-0 text-(--color-green) text-base sm:text-lg" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="h-px bg-linear-to-r from-green/20 via-(--border-main2) to-transparent"
                            data-aos="fade-left" data-aos-delay="460" data-aos-duration="500" />

                        <div data-aos="fade-left" data-aos-delay="520" data-aos-duration="500" className="pt-2">
                            <Link href="#register" className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-(--color-green) to-(--color-green-700) text-black font-extrabold text-sm px-8 py-4 rounded-xl shadow-[0_6px_30px_rgba(74,222,128,0.2)] hover:shadow-[0_6px_40px_rgba(74,222,128,0.35)] hover:brightness-110 active:scale-[0.99] transition-all duration-300">
                                Comece Agora
                                <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
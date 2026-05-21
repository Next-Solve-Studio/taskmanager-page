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
        <section className="relative flex flex-col items-center justify-center bg-(--bg-main) text-(--text-primary) py-24 md:py-32 overflow-hidden border-t border-(--border-main)">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(var(--color-green) 1px, transparent 1px),
                                      linear-gradient(90deg, var(--color-green) 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="pointer-events-none absolute -top-32 -right-32 w-130 h-130 rounded-full bg-(--color-green)/5 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-green/4 blur-[90px]" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

                    <div className="relative flex justify-center order-2 md:order-1" data-aos="fade-right" data-aos-duration="700">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-85 h-85 rounded-full border border-green/10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-105 h-105 rounded-full border border-green/5" />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green/8 rounded-full blur-[72px] pointer-events-none" />

                        <div className="group relative z-10">

                            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-green/50 rounded-tl-xl" />
                            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-green/50 rounded-br-xl" />

                            <div className="rounded-2xl border border-(--border-main2) bg-(--bg-card) p-3 shadow-[0_24px_64px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="Ilustração de gerenciamento inteligente de projetos"
                                    src="/ilustrativeimage1.png"
                                    className="w-full max-w-100 md:max-w-120 h-auto object-contain rounded-xl" />
                            </div>

                            <div className="absolute -bottom-5 -right-4 flex items-center gap-2 bg-(--bg-surface) border border-(--border-main2) rounded-xl px-4 py-2.5 shadow-lg"
                                data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
                                <span className="w-2 h-2 rounded-full bg-(--color-green) animate-pulse" />
                                <span className="text-xs font-medium text-(--text-secondary)">
                                    Sistema <span className="text-(--color-green)">ativo</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-7 order-1 md:order-2 max-w-xl mx-auto md:mx-0">

                        <div className="flex items-center gap-2" data-aos="fade-left" data-aos-duration="500">
                            <span className="h-px w-8 bg-green/60" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-(--color-green) opacity-80">Gestão Inteligente</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.2] text-(--text-primary)"
                            data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">
                            Gerencie projetos e ganhe tempo para focar no crescimento do negócio com uma{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">visão mais ampla</span>
                        </h2>

                        <p className="text-sm sm:text-base text-(--text-secondary) font-light leading-relaxed"
                            data-aos="fade-left" data-aos-delay="150" data-aos-duration="600">
                            Com o sistema{" "}
                            <span className="text-(--text-primary) font-medium">Task Manager</span>,
                            você automatiza processos como o controle de atividades, a operação diária e o
                            acompanhamento através de{" "}
                            <span className="text-(--text-primary) font-medium">dashboards inteligentes</span>,
                            conectando todas as informações dos colaboradores da sua empresa em um único ecossistema.
                        </p>

                        <ul className="flex flex-col gap-3">
                            {highlights.map((item, i) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-(--text-secondary)"
                                    data-aos="fade-left" data-aos-delay={200 + i * 80} data-aos-duration="500">
                                    <FiCheckCircle className="shrink-0 text-(--color-green) text-base" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="h-px bg-linear-to-r from-(--color-green)/20 via-(--border-main2) to-transparent"
                            data-aos="fade-left" data-aos-delay="460" data-aos-duration="500" />

                        <div data-aos="fade-left" data-aos-delay="520" data-aos-duration="500">
                            <Link href="#register" className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-(--color-green) to-(--color-green-700) text-black font-bold text-sm px-7 py-3.5 rounded-xl shadow-[0_0_28px_rgba(74,222,128,0.25)] hover:shadow-[0_0_40px_rgba(74,222,128,0.4)] hover:brightness-110 transition-all duration-300">
                                Comece Agora
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
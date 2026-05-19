"use client"
import { useEffect } from "react"
import { FiCheck } from "react-icons/fi"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

type ItemType = {
    id: number
    label: string
}

export default function ApresentationSistem() {
    const functions: ItemType[] = [
        { id: 1, label: "Visão Geral - Dashboards" },
        { id: 2, label: "Controle de Usuários" },
        { id: 4, label: "Acompanhamento de Tarefas" },
        { id: 5, label: "Agenda Personalizada" },
        { id: 6, label: "Controle de Clientes e Terceiros" },
        { id: 7, label: "Configurações de Segurança" },
    ]

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,

        })
    }, [])

    return (
        <section className="bg-(--bg-main) text-(--text-primary) py-20 md:py-32 overflow-hidden relative">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-100 h-100 bg-green/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-125 h-125 bg-green/5 rounded-full blur-[140px] pointer-events-none hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <div className="lg:col-span-5 flex flex-col space-y-8 text-left">

                        <div data-aos="fade-right">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-(--bg-card) border border-(--border-main2) text-xs font-semibold text-(--color-green) mb-4">
                                Recursos e Módulos
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.2] mb-4">
                                O Task Manager tem os{" "}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                                    recursos essenciais
                                </span>{" "}
                                que melhoram a performance do seu negócio
                            </h2>
                            <p className="text-sm sm:text-base text-(--text-secondary) font-light leading-relaxed">
                                Dê uma olhada breve no nosso sistema ao lado e descubra como otimizar seus processos operacionais.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-3 w-full">
                            {functions.map((item, index) => {
                                return (
                                    <li key={item.id} data-aos="fade-right" data-aos-delay={100 * index}>
                                        <div className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl border border-(--border-main) bg-(--bg-card) text-(--text-secondary) transition-all duration-300 hover:border-(--border-main2) hover:bg-(--bg-surface) hover:text-(--text-primary) group">

                                            <div className="flex items-center justify-center min-w-5 min-h-5 w-5 h-5 rounded-md border border-(--color-green) bg-(--color-green) text-black text-[10px] shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                                                <FiCheck strokeWidth={3} />
                                            </div>

                                            <span className="text-xs md:text-sm font-medium transition-colors group-hover:text-(--text-primary)">
                                                {item.label}
                                            </span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div
                        className="lg:col-span-7 relative w-full lg:pl-6 flex justify-center"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="relative w-full rounded-2xl border border-(--border-main2) bg-(--bg-card) p-1.5 md:p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group hover:scale-[1.01] transition-transform duration-500">

                            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-(--border-main2) bg-(--bg-main)/50 mb-1.5 rounded-t-xl">
                                <div className="w-2 h-2 rounded-full bg-neutral-700" />
                                <div className="w-2 h-2 rounded-full bg-neutral-700" />
                                <div className="w-2 h-2 rounded-full bg-neutral-700" />
                            </div>

                            <div className="relative rounded-lg overflow-hidden w-full bg-neutral-900 max-h-120">
                                <Image
                                    src="/imagesistem.png"
                                    alt="Interface do Sistema Task Manager"
                                    width={1400}
                                    height={900}
                                    priority
                                    className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.03]"
                                />

                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/2 to-transparent pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                                <div className="absolute inset-x-0 bottom-0 h-1/6 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
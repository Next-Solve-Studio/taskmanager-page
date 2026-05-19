"use client"
import { useState } from "react"
import { FiCheck } from "react-icons/fi"
import Image from "next/image"

export default function ApresentationSistem() {

    type ItemType = {
        id: number;
        label: string;
    }

    const functions: ItemType[] = [
        { id: 1, label: "Visão Geral - Dashboards" },
        { id: 2, label: "Controle de Usuários" },
        { id: 4, label: "Acompanhamento de Tarefas" },
        { id: 5, label: "Agenda Personalizada" },
        { id: 6, label: "Controle de Clientes e Terceiros" },
        { id: 7, label: "Configurações de Segurança" },
    ]

    const [activeTab, setActiveTab] = useState(1)

    return (
        <section className="bg-(--bg-main) text-(--text-primary) py-20 md:py-28 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center">
                <div className="text-center max-w-3xl mb-12 md:mb-16">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4">
                        O Task Manager tem os{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                            recursos essenciais
                        </span>{" "}
                        que melhoram a performance do seu negócio
                    </h2>

                    <p className="text-sm sm:text-base text-(--text-secondary) font-light">Dê uma olhada breve no nosso sistema abaixo:</p>
                </div>

                <div className="relative w-full max-w-5xl rounded-2xl md:rounded-3xl border border-(--border-main2) bg-(--bg-card) p-1.5 md:p-2.5 shadow-[0_0_50px_rgba(0,0,0,0.6)] mb-12 group">

                    <div className="absolute inset-0 rounded-2xl bg-green/5 blur-2xl opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

                    <div className="relative rounded-xl overflow-hidden w-ful bg-neutral-900 max-h-105">
                        <Image
                            src="/imagesistem.png"
                            alt="Interface do Sistema Task Manager"
                            width={1400}
                            height={900}
                            priority
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                        />

                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                    </div>
                </div>

                <div className="w-full max-w-4xl">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">

                        {functions.map((item) => (
                            <li key={item.id}>

                                <button type="button" onClick={() => setActiveTab(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-xs md:text-sm font-medium cursor-pointer select-none transition-all duration-300
                                        ${activeTab === item.id
                                            ? "bg-(--bg-surface) border-(--color-green) text-(--text-primary) shadow-[0_0_15px_rgba(74,222,128,0.05)]"
                                            : "bg-(--bg-card) border-(--border-main) text-(--text-secondary) hover:border-(--border-main2) hover:bg-(--bg-surface) hover:text-(--text-primary)"
                                        }`}>

                                    <div className={`flex items-center justify-center min-w-5 min-h-5 w-5 h-5 rounded-md border text-[10px] transition-all duration-300
                                            ${activeTab === item.id
                                            ? "bg-(--color-green) border-(--color-green) text-black"
                                            : "border-(--border-main2) text-transparent"
                                        }`}>
                                        <FiCheck strokeWidth={3} />
                                    </div>
                                    <span className="truncate">
                                        {item.label}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
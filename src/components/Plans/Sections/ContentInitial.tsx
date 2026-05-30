"use client"
import { useEffect } from 'react'
import { FiLayers, FiShield, FiZap } from 'react-icons/fi'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ContentInitial() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease",
        })
    }, [])

    return (
        <section className="relative w-full bg-(--bg-main) pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-(--border-main) flex flex-col items-center justify-center min-h-screen">

            <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--color-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-green) 1px, transparent 1px)`,
                    backgroundSize: "44px 44px",
                }} />

            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-green/6 rounded-full blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 left-10 w-72 h-72 bg-green/3 rounded-full blur-[100px] hidden lg:block" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full text-center z-10 flex flex-col items-center">

                <div className="inline-flex items-center gap-2 bg-(--bg-card) border border-(--border-main2) px-4 py-1.5 rounded-full mb-6 shadow-md"
                    data-aos="fade-down">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-green) opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-green)"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-(--color-green)">Planos exclusivos</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-(--text-primary) max-w-4xl mx-auto leading-[1.1]"
                    data-aos="fade-up" data-aos-delay="100">
                    Escolha o plano ideal para a sua equipe e escale sua{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                        produtividade
                    </span>
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl text-(--text-secondary) font-light max-w-2xl mx-auto leading-relaxed"
                    data-aos="fade-up" data-aos-delay="200">
                    Preços transparentes, sem taxas ocultas. Altere ou cancele seu plano a qualquer momento com total flexibilidade.
                </p>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl opacity-60 text-xs md:text-sm text-(--text-secondary) font-light"
                    data-aos="fade-up" data-aos-delay="400">
                    <div className="flex items-center justify-center gap-2">
                        <FiShield className="text-(--color-green) text-base shrink-0" />
                        <span>Ambiente 100% Seguro</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 border-y sm:border-y-0 sm:border-x border-white/5 py-3 sm:py-0">
                        <FiZap className="text-(--color-green) text-base shrink-0" />
                        <span>Ativação Instantânea</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <FiLayers className="text-(--color-green) text-base shrink-0" />
                        <span>Cancele quando quiser</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
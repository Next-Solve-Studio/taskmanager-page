"use client"
import { useEffect } from "react"
import { FiMessageSquare, FiMail, FiClock, FiArrowDown } from "react-icons/fi"
import AOS from "aos"
import "aos/dist/aos.css"

export default function InitialContent() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease",
        })
    }, [])

    return (
        <section className="relative w-full bg-(--bg-main) pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-(--border-main) flex flex-col items-center justify-center min-h-screen">

            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-green/5 rounded-full blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-10 w-60 h-60 bg-green/3 rounded-full blur-[90px] hidden md:block" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full text-center z-10 flex flex-col items-center">

                <div className="inline-flex items-center gap-2.5 bg-(--bg-card) border border-(--border-main2) px-4 py-1.5 rounded-full mb-6 shadow-md"
                    data-aos="fade-down">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-(--color-green)">
                        Suporte 24h por dia
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-(--text-primary) max-w-4xl mx-auto leading-[1.1]"
                    data-aos="fade-up" data-aos-delay="100">
                    Estamos aqui para ajudar. Entre em{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                        contato
                    </span>{" "}
                    com nosso time
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl text-(--text-secondary) font-light max-w-2xl mx-auto leading-relaxed"
                    data-aos="fade-up" data-aos-delay="200">
                    Tire suas dúvidas, envie propostas ou peça suporte. Nosso time está ativo em tempo integral para atender às suas demandas com máxima agilidade.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl mt-16"
                    data-aos="fade-up" data-aos-delay="350">

                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-(--bg-card) border border-(--border-main2) text-left transition-colors duration-300 hover:bg-(--bg-surface)">
                        <div className="flex items-center justify-center min-w-11 w-11 h-11 rounded-xl bg-green/10 text-(--color-green) border border-green/10">
                            <FiMessageSquare size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-(--text-primary)">Chat Integrado</h3>
                            <p className="text-xs text-(--text-secondary) font-light mt-0.5">Resposta em tempo real dentro do app.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-(--bg-card) border border-(--border-main2) text-left transition-colors duration-300 hover:bg-(--bg-surface)">
                        <div className="flex items-center justify-center min-w-11 w-11 h-11 rounded-xl bg-green/10 text-(--color-green) border border-green/10">
                            <FiMail size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-(--text-primary)">E-mail Direto</h3>
                            <p className="text-xs text-(--text-secondary) font-light mt-0.5">suporte@taskmanager.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-(--bg-card) border border-(--border-main2) text-left transition-colors duration-300 hover:bg-(--bg-surface)">
                        <div className="flex items-center justify-center min-w-11 w-11 h-11 rounded-xl bg-green/10 text-(--color-green) border border-green/10">
                            <FiClock size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-(--text-primary)">Tempo de Resposta</h3>
                            <p className="text-xs text-(--text-secondary) font-light mt-0.5">Menos de 15 minutos de espera.</p>
                        </div>
                    </div>

                </div>

                <div className="mt-16 animate-bounce text-(--text-secondary) opacity-30 flex flex-col items-center gap-1.5"
                    data-aos="fade-up" data-aos-delay="500">
                    <span className="text-[10px] uppercase font-bold tracking-widest">Preencher Formulário</span>
                    <FiArrowDown size={16} />
                </div>
            </div>
        </section>
    )
}
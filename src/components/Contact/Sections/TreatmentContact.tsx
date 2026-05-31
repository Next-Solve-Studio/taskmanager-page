"use client"
import { useEffect } from "react"
import Image from "next/image"
import { FiCpu, FiTerminal, FiUserCheck, FiSliders } from "react-icons/fi"
import AOS from "aos"
import "aos/dist/aos.css"

export default function TreatmentContact() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease",
        })
    }, [])

    return (
        <section className="relative w-full bg-(--bg-main) py-20 md:py-28 overflow-hidden border-t border-(--border-main)">

            <div className="absolute bottom-0 left-1/4 w-112.5 h-112.5 bg-green/3 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="lg:col-span-5 flex justify-center w-full" data-aos="fade-right">
                        <div className="relative w-full max-w-105 sm:max-w-12 md:max-w-125 aspect-square rounded-3xl bg-linear-to-b from-white/2 to-transparent border border-white/10 p-4 shadow-[0_24px_50px_rgba(0,0,0,0.6)] animate-float overflow-hidden group">

                            <div className="absolute inset-0 bg-linear-to-tr from-green/0 via-green/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <Image
                                width={500}
                                height={500}
                                src="/suportTI.png"
                                quality={100} // Força a renderização sem compressão agressiva
                                priority // Carrega a imagem com prioridade máxima na página
                                sizes="(max-w: 640px) 90vw, (max-w: 1200px) 45vw, 500px" // Ajuste responsivo otimizado para telas grandes e Pro Max
                                className="w-full h-full object-cover rounded-2xl filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                                alt="Infraestrutura de Suporte Técnico e Engenharia de TI"
                            />
                        </div>
                    </div>

                    <div
                        className="lg:col-span-7 space-y-6 text-left"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="inline-flex items-center gap-2 bg-linear-to-r from-green/10 to-transparent border-l-2 border-(--color-green) px-4 py-1.5">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-(--color-green)">
                                Engenharia e Desenvolvimento
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-(--text-primary)">
                            Como funciona nosso{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                                Suporte?
                            </span>
                        </h2>

                        <div className="space-y-4 text-base text-(--text-secondary) font-light leading-relaxed">
                            <p>
                                Como mencionado acima, o suporte funciona por meio de chamados estruturados. Através dele, você estabelece uma ponte direta com nossa equipe de desenvolvimento para esclarecer dúvidas complexas, sugerir melhorias de performance, relatar anomalias ou solicitar auxílio especializado na utilização do sistema.
                            </p>
                            <p>
                                Esta página foi arquitetada especificamente para conectar você sem intermediários aos engenheiros responsáveis pela plataforma, garantindo resoluções técnicas precisas para que sua experiência corporativa seja o mais fluida possível.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-(--border-main)">
                            <div className="flex items-center gap-3">
                                <FiTerminal className="text-(--color-green) text-lg shrink-0" />
                                <span className="text-sm text-(--text-primary) font-medium">Contato Direto com Devs</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiCpu className="text-(--color-green) text-lg shrink-0" />
                                <span className="text-sm text-(--text-primary) font-medium">Análise de Performance</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiSliders className="text-(--color-green) text-lg shrink-0" />
                                <span className="text-sm text-(--text-primary) font-medium">Análise de Logs e Erros</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiUserCheck className="text-(--color-green) text-lg shrink-0" />
                                <span className="text-sm text-(--text-primary) font-medium">Garantia de SLA Dedicado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
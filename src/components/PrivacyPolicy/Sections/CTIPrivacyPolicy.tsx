"use client"
import { useEffect } from "react"
import { Typewriter } from 'react-simple-typewriter'
import { FiShield, FiLock, FiFileText, FiCheckCircle } from "react-icons/fi"
import AOS from "aos"
import "aos/dist/aos.css"

export default function CTIPrivacyPolicy() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease",
        })
    }, [])

    return (
        <section className="relative w-full min-h-screen bg-(--bg-main) pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-(--border-main) flex flex-col items-center justify-center">

            <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--color-green) 1px, transparent 1px),
                                      linear-gradient(90deg, var(--color-green) 1px, transparent 1px)`,
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-green/5 rounded-full blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-10 w-60 h-60 bg-green/3 rounded-full blur-[90px] hidden md:block" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full text-center z-10 flex flex-col items-center">

                <div className="inline-flex items-center gap-2 bg-(--bg-card) border border-(--border-main2) px-4 py-1.5 rounded-full mb-6 shadow-md" data-aos="fade-down">
                    <FiShield className="text-(--color-green) text-xs animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-(--color-green)">
                        Segurança & Conformidade LGPD
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-(--text-primary) max-w-4xl mx-auto leading-[1.15] min-h-20 sm:min-h-auto"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    Política de{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                        <Typewriter
                            words={['Privacidade de Dados', 'Segurança da Informação', 'Termos & Transparência']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </span>
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl text-(--text-secondary) font-light max-w-3xl mx-auto leading-relaxed"
                    data-aos="fade-up" data-aos-delay="200">
                    No <strong className="text-(--text-primary) font-semibold">Task Manager</strong>, trabalhamos de forma rigorosa para garantir a máxima proteção dos seus dados. Entenda abaixo como funciona nossa metodologia de criptografia, armazenamento seguro e conformidade legal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex items-center justify-center gap-2.5 p-4 rounded-xl bg-(--bg-card) border border-(--border-main2) text-xs sm:text-sm text-(--text-primary) font-medium shadow-xs">
                        <FiLock className="text-(--color-green) text-base shrink-0" />
                        <span>Criptografia de Ponta a Ponta</span>
                    </div>

                    <div className="flex items-center justify-center gap-2.5 p-4 rounded-xl bg-(--bg-card) border border-(--border-main2) text-xs sm:text-sm text-(--text-primary) font-medium shadow-xs">
                        <FiCheckCircle className="text-(--color-green) text-base shrink-0" />
                        <span>100% Adequado à LGPD</span>
                    </div>

                    <div className="flex items-center justify-center gap-2.5 p-4 rounded-xl bg-(--bg-card) border border-(--border-main2) text-xs sm:text-sm text-(--text-primary) font-medium shadow-xs">
                        <FiFileText className="text-(--color-green) text-base shrink-0" />
                        <span>Zero Compartilhamento Suspeito</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
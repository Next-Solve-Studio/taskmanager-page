"use client"
import Link from "next/link";
import { useEffect } from "react";
import { FiCheckCircle, FiTarget, FiActivity } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Plans() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease",
        });
    }, []);

    type ItemType = {
        id: number;
        title: string;
        text: string;
        value: string;
        button: string;
        highlight?: boolean;
        icon: React.ElementType;
        features: string[];
    }

    const Cards: ItemType[] = [
        {
            id: 1,
            title: 'Plano Bronze',
            text: 'Organização simples para começar com eficiência.',
            value: '49,90',
            button: 'Acessar Agora!',
            icon: FiActivity,
            features: [
                'Até 5 colaboradores',
                '20 Projetos ativos',
                'Calendário sincronizado',
                'Suporte via Ticket'
            ]
        },
        {
            id: 2,
            title: 'Plano Ouro',
            text: 'Gestão completa, dashboards estratégicos e automação.',
            value: '79,90',
            button: 'Acessar Agora!',
            highlight: true,
            icon: FiTarget,
            features: [
                'Colaboradores Ilimitados',
                'Projetos Ilimitados',
                'Dashboards em Tempo Real',
                'Controle de Atividades',
                'Suporte prioritário 24/7',
                '50 Projetos ativos'
            ]
        },
    ]

    return (
        <section className="w-full bg-(--bg-main) py-24 md:py-32 relative overflow-hidden flex flex-col items-center justify-center border-t border-(--border-main)">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-(--color-green)/3 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green/3 rounded-full blur-[100px] hidden lg:block pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full z-10 flex flex-col items-center">

                <div className="max-w-3xl text-center mb-16 md:mb-20" data-aos="fade-up">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-(--color-green) bg-(--bg-card) border border-(--border-main2) px-4 py-1.5 rounded-full mb-3 shadow-sm">
                        Preços e Planos
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-(--text-primary) leading-[1.15]">
                        Toda a organização que você precisa por um{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">preço justo</span>
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-(--text-secondary) font-light leading-relaxed max-w-2xl mx-auto">
                        Valores cobrados mensalmente. Sem contratos de fidelidade, cancele a qualquer momento.
                    </p>
                </div>
                \
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full max-w-4xl mx-auto">
                    {Cards.map((item, index) => {
                        const Icon = item.icon;
                        const isHighlighted = item.highlight;

                        return (
                            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 150} className="flex w-full">

                                <div className={`relative flex flex-col w-full h-full p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:brightness-110 shadow-lg ${isHighlighted ? 'bg-(--bg-card) border-(--color-green) shadow-[0_12px_40px_rgba(74,222,128,0.08)] scale-[1.02] md:scale-[1.03] z-10'
                                    : 'bg-(--bg-card) border-(--border-main2) hover:bg-(--bg-surface) hover:border-(--border-main2)'}`}>

                                    {isHighlighted && (
                                        <div className="absolute top-0 right-10 -translate-y-1/2 bg-(--color-green) text-black px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider shadow-[0_4px_12px_rgba(74,222,128,0.2)]">Mais Popular</div>
                                    )}

                                    <div className="flex flex-col gap-5 border-b border-(--border-main) pb-7 mb-7">
                                        <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${isHighlighted ? 'bg-green/10 text-(--color-green) border border-green/20' :
                                            'bg-(--bg-surface) text-(--text-primary) border border-(--border-main2)'}`}>
                                            <Icon size={26} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold tracking-tight text-(--text-primary)">{item.title}</h3>
                                            <p className="mt-2 text-sm text-(--text-secondary) font-light leading-relaxed min-h-12">{item.text}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-baseline gap-1.5 border-b border-(--border-main) pb-7 mb-7">
                                        <span className="text-lg font-bold text-(--text-primary)/60">$</span>
                                        <span className="text-5xl font-extrabold tracking-tighter text-(--text-primary)">
                                            {item.value}
                                        </span>
                                        <span className="text-sm font-light text-(--text-secondary) opacity-60">/mês</span>
                                    </div>

                                    <div className="flex-1 space-y-4 mb-10 text-sm sm:text-base text-(--text-secondary) font-light">
                                        {item.features.map(feature => (
                                            <div key={feature} className="flex items-center gap-3">
                                                <FiCheckCircle className="shrink-0 text-(--color-green) text-lg" strokeWidth={1.5} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <Link href={`/plan/${item.id}`}
                                            className={`block text-center w-full px-6 py-4 rounded-xl text-sm font-extrabold tracking-wide active:scale-[0.99] transition-all duration-300 ${isHighlighted
                                                ? 'bg-linear-to-r from-(--color-green) to-(--color-green-700) text-black shadow-[0_6px_24px_rgba(74,222,128,0.15)] hover:shadow-[0_6px_32px_rgba(74,222,128,0.3)] hover:brightness-110'
                                                : 'bg-white text-black hover:bg-(--text-primary)/90 shadow-[0_6px_20px_rgba(255,255,255,0.05)]'}`}>
                                            {item.button}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
"use client"
import { FiZap, FiHeadphones, FiLayers, FiPieChart, FiTrendingUp, FiLink } from "react-icons/fi"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

type ItemType = {
    id: number
    title: string
    text: string
    icon: React.ElementType
}

const comments: ItemType[] = [
    {
        id: 1,
        title: "Interface Intuitiva",
        text: "Gerencie tarefas, equipes e processos com uma experiência simples, rápida e eficiente.",
        icon: FiZap,
    },
    {
        id: 2,
        title: "Suporte Especializado",
        text: "Conte com atendimento ágil e suporte dedicado sempre que precisar.",
        icon: FiHeadphones,
    },
    {
        id: 3,
        title: "Organização Inteligente",
        text: "Centralize projetos, atividades e informações em um ambiente claro e fácil de acompanhar.",
        icon: FiLayers,
    },
    {
        id: 4,
        title: "Dashboards Personalizados",
        text: "Visualize métricas e indicadores importantes com painéis adaptados ao seu negócio.",
        icon: FiPieChart,
    },
    {
        id: 5,
        title: "Decisões Baseadas em Dados",
        text: "Tenha mais clareza para planejar os próximos passos e acelerar o crescimento da empresa.",
        icon: FiTrendingUp,
    },
    {
        id: 6,
        title: "Integrações Inteligentes",
        text: "Conecte seu sistema com outras ferramentas e automatize a coleta e sincronização de dados.",
        icon: FiLink,
    },
]

export default function CommentsHome() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-(--bg-main)">

            <div className="max-w-2xl mx-auto text-center mb-14" data-aos="fade-up">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-(--color-green) mb-3 opacity-80">Recursos</span>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-(--text-primary) leading-[1.15]">
                    Tudo o que você precisa,{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">
                        em um só lugar
                    </span>
                </h1>

                <p className="mt-4 text-(--text-secondary) text-base sm:text-lg">Ferramentas pensadas para simplificar sua rotina e impulsionar seus resultados.</p>
            </div>

            <div className="w-full max-w-6xl mx-auto px-2" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true, }}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoHeight={false}
                    className="items-stretch!"
                    breakpoints={{
                        540: { slidesPerView: 1.2, spaceBetween: 16 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                >
                    {comments.map((item) => (
                        <SwiperSlide key={item.id} className="h-auto! flex">
                            <FeatureCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

function FeatureCard({ item, }: Readonly<{ item: ItemType }>) {
    const Icon = item.icon

    return (
        <div className="group relative flex flex-col w-full h-full rounded-2xl border border-(--border-main2) bg-(--bg-card) p-6 sm:p-7 transition-all duration-300 hover:border-green/30 hover:bg-(--bg-surface) hover:-translate-y-1 shadow-lg">

            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(74,222,128,0.08)_0%,transparent_60%)]" />

            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-(--bg-surface) border border-(--border-main2) text-(--color-green) transition-all duration-300 group-hover:bg-green/10 group-hover:border-green/30">
                <Icon size={20} />
            </div>

            <div className="flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="text-(--text-primary) font-semibold text-lg leading-snug">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-(--text-secondary) font-light">{item.text}</p>
                </div>
                <div className="mt-6 h-px w-0 rounded-full bg-linear-to-r from-green/60 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
        </div>
    )
}
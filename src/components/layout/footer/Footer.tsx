"use client"
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa6";

type LinkItem = {
    id: number;
    label: string;
    href: string;
};

type SocialItem = LinkItem & {
    icon: React.ElementType;
};

export default function Footer() {
    const institutional: LinkItem[] = [
        { id: 1, label: "Corporativo", href: "/" },
        { id: 2, label: "Contato", href: "/Contact  " },
        { id: 3, label: "Política de Privacidade", href: "/" },
        { id: 4, label: "Agente de IA", href: "/" },
    ];

    const socialNetwork: SocialItem[] = [
        { id: 1, label: "Instagram", href: "https://www.instagram.com/nextsolve.company/", icon: FaInstagram },
        { id: 2, label: "YouTube", href: "/", icon: FaYoutube },
        { id: 3, label: "LinkedIn", href: "https://www.linkedin.com/company/next-solve-studio-vision/posts/?feedView=all", icon: FaLinkedinIn },
        { id: 4, label: "Facebook", href: "/", icon: FaFacebookF },
    ];

    return (
        <footer className="w-full border-t border-(--border-main) bg-(--bg-main) relative overflow-hidden pt-16 pb-8">
            <div className="absolute bottom-0 right-1/4 w-75 h-75 bg-green/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-14">

                    <div className="md:col-span-5 space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tighter text-(--text-primary)">
                            Task<span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-green) to-(--color-green-700)">Manager</span>
                        </h2>
                        <p className="text-sm text-(--text-secondary) font-light max-w-xs leading-relaxed">
                            Solução inteligente, organizada e profissional para impulsionar sua empresa.
                        </p>

                        <div className="inline-flex items-center gap-2.5 bg-(--bg-card) border border-(--border-main2) px-3 py-1.5 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[11px] font-medium text-(--text-secondary) tracking-wide">
                                Sistema On-line 24h
                            </span>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-(--text-secondary) opacity-50 mb-4">Institucional</h3>
                        <ul className="space-y-2.5">
                            {institutional.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-(--text-secondary) hover:text-(--color-green) transition-colors duration-200 font-light"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4 space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-(--text-secondary) opacity-50">Conecte-se Conosco</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {socialNetwork.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link key={item.id} href={item.href} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-(--bg-card) border border-(--border-main2) text-sm text-(--text-secondary)
                                         hover:text-(--text-primary) hover:border-green/30 hover:bg-(--bg-surface) transition-all duration-200 group">
                                        <Icon size={15} className="text-(--text-secondary) group-hover:text-(--color-green) transition-colors" />
                                        <span className="font-light text-xs">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                </div>

                <div className="select-none pointer-events-none w-full flex justify-center overflow-hidden h-14 sm:h-24 md:h-28 opacity-[0.02] tracking-tighter font-black text-[7vw] leading-none text-white text-center border-b border-white/5">Task Manager</div>

                <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-(--text-secondary) opacity-40 font-light">
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
                        <p>© {new Date().getFullYear()} Task Manager.</p>
                        <span className="hidden sm:inline-block">•</span>
                        <p>Todos os direitos reservados.</p>
                    </div>
                    <p className="tracking-wider">CNPJ: 61.303.644/0001-43</p>
                </div>
            </div>
        </footer>
    );
}
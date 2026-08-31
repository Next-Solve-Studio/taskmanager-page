"use client"
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Buttons() {
    const btnLinks = [
        { id: 1, text: "Contato", href: "/Contact", primary: false },
        { id: 2, text: "Planos", href: "https://taskmanager.nextsolve.com.br/login", primary: true },
        { id: 3, text: "EN", href: "/", icon: AiOutlineGlobal },
    ];

    return (
        <div>
            <ul className="flex items-center gap-3 select-none">
                {btnLinks.map((item) => {
                    const Icon = item.icon;

                    if (Icon) {
                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className="group flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium text-(--text-secondary) border border-(--border-main2) bg-(--bg-surface) transition-all duration-300 hover:text-(--text-primary) hover:border-(--text-muted)">
                                    <Icon size={14} className="text-(--text-muted) transition-all duration-300 group-hover:text-(--color-green) group-hover:rotate-12" />
                                    {item.text}
                                </Link>
                            </li>
                        );
                    }

                    if (item.primary) {
                        return (
                            <li key={item.id}>
                                <Link href={item.href} className="relative inline-flex items-center overflow-hidden rounded-xl px-5 py-2 text-xs font-semibold tracking-wide text-black bg-(--color-green)
                                    transition-all duration-300 hover:bg-(--color-green-700) hover:text-white hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] group">
                                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-600 ease-in-out group-hover:translate-x-full" />
                                    {item.text}
                                </Link>
                            </li>
                        );
                    }

                    return (
                        <li key={item.id}>
                            <Link href={item.href} className="inline-flex items-center rounded-xl px-5 py-2 text-xs font-semibold tracking-wide text-(--text-primary) border border-(--border-main2) bg-transparent
                            transition-all duration-300 hover:bg-(--bg-surface) hover:border-(--text-muted)">
                                {item.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
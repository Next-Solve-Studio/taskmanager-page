"use client"
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function Navgation() {
    type DropItem = {
        id: number;
        label: string;
        href: string;
    }

    type ItemType = {
        id: number;
        label: string;
        href: string;
        drop?: DropItem[];
    }

    const links: ItemType[] = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'Sistema', href: '#about' },
        { id: 3, label: 'Sobre Nós', href: '#projects' },
        { id: 4, label: 'Planos', href: '/Plans' },
        {
            id: 5, label: 'Recursos', href: '#trajectory', drop:
                [
                    { id: 1, label: 'Sobre nossa Empresa', href: '/About' },
                    { id: 2, label: 'Politica de Privacidade', href: '/Politics' },
                    { id: 3, label: 'Orçamento', href: '/budget' },
                ]
        },
    ];

    return (
        <nav className="flex items-center">
            <ul className="flex items-center gap-8">
                {links.map((item) => (
                    <li key={item.id} className="relative group flex items-center h-20">
                        <Link href={item.href} className="flex items-center gap-1 text-sm font-medium text-(--text-secondary) hover:text-(--text-primary) transition-colors duration-200 py-2">
                            {item.label}
                            {item.drop && (
                                <FiChevronDown className="text-xs text-(--text-muted) group-hover:text-(--text-primary) group-hover:rotate-180 transition-transform duration-300" />
                            )}
                        </Link>

                        {item.drop && (
                            <ul className="absolute top-19 left-0 min-w-60 p-1.5 rounded-xl bg-(--bg-card) border border-(--border-main2) shadow-2xl backdrop-blur-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                                {item.drop.map((dropItem) => (
                                    <li key={dropItem.id}>
                                        <Link href={dropItem.href} className="block px-4 py-2.5 text-xs font-medium text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-surface) rounded-lg whitespace-nowrap transition-all duration-200">
                                            {dropItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
"use client"
import Link from "next/link"
// import Image from "next/image" // Criar Logo para substituir o titulo.

export default function Logo() {
    return (
        <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2.5 font-bold text-xl tracking-tight select-none transition-opacity hover:opacity-90">

                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br from-(--color-green) to-(--color-green-700) shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                    <span className="text-black text-sm font-black tracking-tighter">TM</span>
                </div>

                <h1 className="text-(--text-primary) transition-colors duration-300">
                    <span className="text-(--text-secondary) font-normal group-hover:text-(--color-green)] transition-colors duration-300">Task Manager</span>
                </h1>
            </Link>
        </div>
    )
}
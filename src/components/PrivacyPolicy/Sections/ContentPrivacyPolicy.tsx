"use client"
import { useEffect, useState } from "react"
import { FiShield, FiCalendar, FiLock, FiUserCheck, FiDatabase, FiGlobe, FiMail, FiCheckCircle, FiInfo, FiFileText, FiKey } from "react-icons/fi"
import AOS from "aos"
import "aos/dist/aos.css"

interface SubSection {
    subtitle: string
    content: string | string[]
}

interface ItemType {
    id: number
    anchor: string
    label: string
    badge?: string
    icon: React.ReactNode
    description?: string
    list?: string[]
    subsections?: SubSection[]
}

export default function ContentPrivacyPolicy() {
    const [activeSection, setActiveSection] = useState<string>("dados-coletados")

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease",
        })
    }, [])

    const sections: ItemType[] = [
        {
            id: 1,
            anchor: "dados-coletados",
            label: "1. Quais dados coletamos",
            icon: <FiDatabase className="text-(--color-green)" />,
            description: "Coletamos os dados estritamente necessários para o pleno funcionamento e segurança do nosso sistema de gestão de tarefas:",
            list: [
                "Dados de cadastro: Nome completo, endereço de e-mail, cargo corporativo e empresa vinculada.",
                "Dados de uso: Tarefas, projetos, cadastros de clientes, eventos de agenda e registros de atividade gerados dentro da plataforma.",
                "Dados técnicos: Endereço IP, tipo e versão de navegador e registros de acesso (logs), utilizados exclusivamente para fins de auditoria, segurança e prevenção contra fraudes."
            ]
        },
        {
            id: 2,
            anchor: "google-calendar",
            label: "2. Integração com o Google Calendar",
            badge: "Integração Oficial Google API",
            icon: <FiCalendar className="text-(--color-green)" />,
            description: "Se você optar por conectar sua conta do Google na tela de Agenda, usamos a API do Google Calendar (OAuth, escopo https://www.googleapis.com/auth/calendar.events e https://www.googleapis.com/auth/userinfo.email) para oferecer a criação de reuniões com link do Google Meet diretamente na plataforma.",
            subsections: [
                {
                    subtitle: "Quais dados do usuário do Google acessamos",
                    content: [
                        "O endereço de e-mail principal da sua Conta do Google, usado apenas para identificar qual conta está conectada.",
                        "Os dados dos eventos que o próprio Task Manager Solve cria no seu Google Calendar em seu nome: título, descrição, data, horário e a lista de participantes que você define na tela de criação da reunião.",
                        "O link de videochamada (Google Meet) gerado automaticamente para esses eventos.",
                        "Importante: Não acessamos, lemos, listamos ou armazenamos nenhum outro evento já existente na sua agenda do Google — o acesso é usado somente para os eventos que o próprio sistema cria a seu pedido."
                    ]
                },
                {
                    subtitle: "Como o app usa os dados do usuário do Google",
                    content: [
                        "Criar o evento no seu Google Calendar quando você cria uma reunião no sistema;",
                        "Atualizar esse evento quando você edita a reunião (horário, título, participantes);",
                        "Cancelar/excluir esse evento no Google Calendar quando você exclui a reunião no sistema;",
                        "Gerar e exibir o link do Google Meet vinculado ao evento.",
                        "O acesso aos dados do Google é usado exclusivamente para fornecer os recursos de criação de reuniões visíveis na interface do Task Manager Solve. Não usamos esses dados para publicidade, perfilamento, treinamento de modelos de inteligência artificial ou qualquer finalidade diferente da descrita acima."
                    ]
                },
                {
                    subtitle: "Com quem compartilhamos, transferimos ou divulgamos dados do usuário do Google",
                    content: [
                        "Com os participantes que você mesmo seleciona ao criar a reunião — eles recebem o convite do evento diretamente do Google Calendar (mecanismo padrão do próprio Google).",
                        "Não vendemos, alugamos, nem compartilhamos esses dados com anunciantes, corretores de dados ou qualquer terceiro para fins comerciais.",
                        "Não transferimos esses dados para nenhum outro serviço além do próprio Google Calendar (via API) e do banco de dados do Task Manager Solve (Firestore, Google Cloud), utilizado apenas para manter a referência interna do evento.",
                        "Não permitimos que pessoas físicas leiam dados do usuário do Google, exceto quando estritamente necessário por razões de segurança ou obrigação legal."
                    ]
                },
                {
                    subtitle: "Mecanismos de proteção de dados sensíveis",
                    content: [
                        "O token de acesso à sua conta do Google (refresh token) fica isolado em uma coleção do banco de dados com acesso restrito ao servidor da aplicação, por meio de credenciais de administrador que nunca chegam ao navegador do usuário.",
                        "Toda comunicação com a API do Google acontece via HTTPS/TLS com criptografia em trânsito.",
                        "O token só é utilizado no exato momento em que você cria, edita ou cancela uma reunião — não realizamos sincronizações automáticas nem chamadas em segundo plano.",
                        "Você pode revogar esse acesso a qualquer momento pela própria tela de Agenda ou diretamente em myaccount.google.com/permissions."
                    ]
                },
                {
                    subtitle: "Retenção e exclusão de dados do usuário do Google",
                    content: "O token de acesso é mantido apenas enquanto sua conta do Google estiver conectada. Ao desconectar (pela tela de Agenda) ou ao excluir sua conta no Task Manager Solve, o token é apagado permanentemente do nosso banco de dados de forma imediata. Os eventos já criados no seu Google Calendar não são apagados automaticamente ao desconectar — eles continuam lá até você excluí-los pelo próprio Google Calendar ou pelo Task Manager Solve enquanto ainda estiver conectado."
                },
                {
                    subtitle: "Conformidade com a Política de Dados do Usuário dos Serviços de API do Google",
                    content: "O uso e a transferência de informações recebidas das APIs do Google pelo Task Manager Solve estão em conformidade com a Política de Dados do Usuário dos Serviços de API do Google, incluindo os requisitos de Uso Limitado (Limited Use). Os dados recebidos das APIs do Google são usados apenas para fornecer ou melhorar funcionalidades voltadas ao usuário que são visíveis e esperadas na interface do aplicativo, e não para nenhuma outra finalidade."
                }
            ]
        },
        {
            id: 3,
            anchor: "uso-dados",
            label: "3. Como usamos os dados",
            icon: <FiFileText className="text-(--color-green)" />,
            description: "Usamos os dados coletados para autenticar seu acesso, exibir as informações da sua empresa, gerar relatórios internos de produtividade e enviar comunicações operacionais (como códigos de verificação e notificações importantes do sistema)."
        },
        {
            id: 4,
            anchor: "compartilhamento",
            label: "4. Compartilhamento de dados",
            icon: <FiGlobe className="text-(--color-green)" />,
            description: "Não vendemos nem alugamos seus dados. Compartilhamos informações apenas:",
            list: [
                "Com os demais usuários da sua própria empresa (conforme as permissões definidas pelo administrador da conta);",
                "Com participantes de reuniões que você mesmo convida;",
                "Com prestadores de serviço estritamente necessários para operar a plataforma (ex.: infraestrutura de hospedagem em nuvem, provedores de envio de e-mail e processamento de pagamentos), todos sob estrita obrigação legal e contratual de confidencialidade."
            ]
        },
        {
            id: 5,
            anchor: "retencao-exclusao",
            label: "5. Retenção e exclusão de dados",
            icon: <FiLock className="text-(--color-green)" />,
            description: "Mantemos seus dados pessoais enquanto sua conta permanecer ativa no sistema. Você pode solicitar a exportação integral ou a exclusão definitiva dos seus dados a qualquer momento, em total conformidade com a Lei Geral de Proteção de Dados (LGPD), entrando em contato através do nosso canal de suporte."
        },
        {
            id: 6,
            anchor: "direitos-lgpd",
            label: "6. Seus direitos (LGPD)",
            badge: "Conformidade LGPD",
            icon: <FiUserCheck className="text-(--color-green)" />,
            description: "Como titular dos dados, a legislação brasileira garante a você os seguintes direitos a qualquer momento:",
            list: [
                "Confirmar a existência de tratamento dos seus dados;",
                "Acessar e corrigir dados incompletos, inexatos ou desatualizados;",
                "Solicitar a portabilidade dos dados a outro fornecedor de serviço;",
                "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;",
                "Revogar consentimentos concedidos anteriormente (como a permissão de integração ao Google Calendar)."
            ]
        },
        {
            id: 7,
            anchor: "cookies",
            label: "7. Cookies",
            icon: <FiKey className="text-(--color-green)" />,
            description: "Utilizamos exclusivamente um único cookie técnico essencial para manter a sua sessão autenticada com segurança. Não utilizamos cookies para rastreamento comportamental entre sites, comercialização ou fins publicitários."
        },
        {
            id: 8,
            anchor: "seguranca",
            label: "8. Segurança da Informação",
            icon: <FiShield className="text-(--color-green)" />,
            description: "Adotamos as melhores práticas técnicas e organizacionais do mercado para proteger suas informações contra acessos não autorizados, vazamentos ou alterações. Isso inclui controle rígido de acesso baseado em perfis (RBAC) e tráfego 100% criptografado através de conexões seguras TLS/HTTPS."
        },
        {
            id: 9,
            anchor: "alteracoes",
            label: "9. Alterações nesta política",
            icon: <FiInfo className="text-(--color-green)" />,
            description: "Podemos atualizar esta Política de Privacidade periodicamente para refletir melhorias no sistema ou mudanças na legislação. Alterações relevantes serão notificadas ostensivamente dentro da própria plataforma."
        },
        {
            id: 10,
            anchor: "contato",
            label: "10. Canal de Contato (DPO)",
            icon: <FiMail className="text-(--color-green)" />,
            description: "Se você tiver dúvidas sobre esta política, desejar exercer seus direitos LGPD ou precisar de informações sobre seus dados, entre em contato diretamente com o nosso Encarregado de Proteção de Dados (DPO) através do e-mail oficial: equipe.nextsolvesolution@gmail.com."
        }
    ]

    const scrollToSection = (anchor: string) => {
        setActiveSection(anchor)
        const element = document.getElementById(anchor)
        if (element) {
            const yOffset = -120 // Desconto para o Header Fixo
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
        }
    }

    return (
        <section className="relative w-full bg-(--bg-main) py-16 md:py-24 border-t border-(--border-main)">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">

                <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-(--bg-card) border border-(--border-main2) shadow-lg" data-aos="fade-up">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-(--border-main) pb-6 mb-6">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-black text-(--text-primary) tracking-tight">
                                Termos da Política de Privacidade
                            </h1>
                            <p className="text-xs text-(--text-secondary) mt-1 font-mono">
                                Task Manager Solve — Operado por 61.303.644 GUILHERME BARROSO JUCA | CNPJ nº 61.303.644/0001-43
                            </p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-(--color-green)/10 text-(--color-green) border 
                            border-(--color-green)/20 self-start md:self-auto">
                            <FiCheckCircle size={14} /> Atualizado em 28 de Agosto de 2026
                        </span>
                    </div>
                    <p className="text-sm sm:text-base text-(--text-secondary) font-light leading-relaxed">
                        Esta Política de Privacidade descreve detalhadamente como o <strong className="text-(--text-primary) font-semibold">Task Manager Solve</strong> ("nós") coleta, utiliza, armazena, compartilha e protege as informações e dados dos usuários ("você") ao utilizar nossa plataforma de gestão e automação.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    <aside className="lg:col-span-4 sticky top-28 hidden lg:block space-y-2 p-4 rounded-2xl bg-(--bg-card) border border-(--border-main2)">
                        <span className="text-xs font-bold uppercase tracking-widest text-(--text-secondary) px-3 mb-2 block">
                            Índice de Seções
                        </span>
                        <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                            {sections.map((sec) => (
                                <button
                                    type="button"
                                    key={sec.id}
                                    onClick={() => scrollToSection(sec.anchor)}
                                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-3 cursor-pointer ${activeSection === sec.anchor
                                        ? "bg-green/15 text-(--color-green) font-semibold border border-green/30"
                                        : "text-(--text-secondary) hover:text-(--text-primary) hover:bg-white/5"
                                        }`}>
                                    <span className="shrink-0">{sec.icon}</span>
                                    <span className="truncate">{sec.label}</span>
                                </button>
                            ))}
                        </nav>
                    </aside>

                    <main className="lg:col-span-8 space-y-10">
                        {sections.map((sec) => (
                            <article
                                key={sec.id}
                                id={sec.anchor}
                                className="p-6 sm:p-8 rounded-3xl bg-(--bg-card) border border-(--border-main2) shadow-sm hover:border-green/30 transition-colors duration-300 scroll-mt-32"
                                data-aos="fade-up">
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-(--color-green)/10 text-(--color-green) border border-(--color-green)/20">
                                            {sec.icon}
                                        </div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-(--text-primary) tracking-tight">
                                            {sec.label}
                                        </h2>
                                    </div>

                                    {sec.badge && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-(--color-green) bg-(--color-green)/10 px-3 py-1 rounded-full border 
                                        border-(--color-green)/20">
                                            {sec.badge}
                                        </span>
                                    )}
                                </div>

                                {sec.description && (
                                    <p className="text-sm sm:text-base text-(--text-secondary) font-light leading-relaxed mb-4">
                                        {sec.description}
                                    </p>
                                )}

                                {sec.list && (
                                    <ul className="space-y-2.5 my-4">
                                        {sec.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-(--text-secondary) font-light">
                                                <FiCheckCircle className="text-(--color-green) text-base shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {sec.subsections && (
                                    <div className="mt-6 space-y-6 pt-6 border-t border-(--border-main)">
                                        {sec.subsections.map((sub) => (
                                            <div key={''} className="space-y-3 bg-black/20 p-5 rounded-2xl border border-white/5">
                                                <h3 className="text-base font-bold text-(--text-primary) flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-green)" />
                                                    {sub.subtitle}
                                                </h3>
                                                {Array.isArray(sub.content) ? (
                                                    <ul className="space-y-2 pl-2">
                                                        {sub.content.map((c) => (
                                                            <li key={''} className="text-xs sm:text-sm text-(--text-secondary) font-light flex items-start gap-2.5">
                                                                <span className="text-(--color-green) opacity-60 font-mono text-xs mt-0.5">•</span>
                                                                <span className="leading-relaxed">{c}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-xs sm:text-sm text-(--text-secondary) font-light leading-relaxed">
                                                        {sub.content}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </article>
                        ))}
                    </main>
                </div>
            </div>
        </section>
    )
}
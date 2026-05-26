import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: "Task Manager || Gerenciamento de Atividades",

  description:
    "Sistema inteligente de gerenciamento e controle de tarefas para os colaboradores da sua empresa. O Task Manager oferece mais eficiência, organização e produtividade para a rotina da equipe, centralizando atividades de forma profissional em uma plataforma moderna, intuitiva e com design elegante.",

  keywords: [
    "Software Developer",
    "Web Designer",
    "Next.js Developer",
    "React Specialist",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design Premium",
    "Desenvolvimento SaaS",
    "Medalhas Brasil",
    "Korivo Finance"
  ],

  authors: [{ name: "Task Manager", url: "https://taskmanager.nextsolve.com.br/" }],

  icons: {
    icon: "/", //Adicionar Favcon
  },

  openGraph: {
    title: "Task Manager | Sistema de Gerenciamento de Atividades",
    description:
      "Explore um sistema intuitivo e eficiente, desenvolvido para proporcionar mais controle, organização e produtividade às atividades dos colaboradores da sua empresa. Tudo isso em uma plataforma moderna, prática e fácil de utilizar.",
    url: "https://taskmanager.nextsolve.com.br/",
    siteName: "Task Manager",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Task Manager",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR" className={''}>
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}

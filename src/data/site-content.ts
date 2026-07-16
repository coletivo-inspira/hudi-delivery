import { Bot, LayoutDashboard, QrCode } from "lucide-react";
import type { FaqItem, Feature, Plan } from "@/types/site";

export const navigation = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Planos", href: "/#planos" },
  { label: "Dúvidas", href: "/#faq" },
];

export const features: Feature[] = [
  {
    eyebrow: "Hudi Cardápio",
    title: "Seu cardápio, direto e irresistível.",
    description: "Uma experiência rápida para o cliente escolher, personalizar e pedir — sem instalar aplicativo e sem disputar atenção com marketplaces.",
    highlights: ["Pedidos sem comissão", "QR Code e link próprio", "Atualização em tempo real"],
    icon: QrCode,
    tone: "light",
  },
  {
    eyebrow: "Hudi Conversa",
    title: "Atendimento que responde e também vende.",
    description: "A IA organiza o atendimento no WhatsApp, tira dúvidas e conduz o pedido com a linguagem do seu restaurante.",
    highlights: ["Disponível 24 horas", "Contexto de cada cliente", "Transferência para sua equipe"],
    icon: Bot,
    tone: "deep",
  },
  {
    eyebrow: "Hudi Painel",
    title: "Decisões claras, operação sob controle.",
    description: "Pedidos, cozinha, vendas e clientes organizados em painéis visuais para você entender o agora e decidir o próximo passo.",
    highlights: ["Pedidos e cozinha em tempo real", "Vendas e ticket médio", "Clientes e campanhas em um só lugar"],
    icon: LayoutDashboard,
    tone: "light",
  },
];

export const plans: Plan[] = [
  {
    name: "Essencial",
    description: "Para começar a vender pelo seu próprio canal.",
    price: "R$ 0",
    cadence: "/mês",
    features: ["Cardápio digital", "Link e QR Code próprios", "Gestão básica de pedidos", "Sem taxa por pedido"],
    cta: "Começar grátis",
  },
  {
    name: "Pro",
    description: "Para operações que querem crescer com inteligência.",
    price: "R$ 149",
    cadence: "/mês",
    features: ["Tudo do Essencial", "IA no WhatsApp", "CRM e campanhas", "Relatórios completos", "Suporte prioritário"],
    featured: true,
    cta: "Testar o Pro",
  },
  {
    name: "Rede",
    description: "Estrutura sob medida para múltiplas unidades.",
    price: "Personalizado",
    features: ["Múltiplas lojas", "Gestão centralizada", "Permissões por equipe", "Onboarding acompanhado"],
    cta: "Falar com especialista",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "A Hudi cobra comissão sobre os pedidos?",
    answer: "Não. O pedido é seu e a receita também. Você paga somente o plano escolhido, sem percentual sobre cada venda.",
  },
  {
    question: "Preciso trocar meu WhatsApp atual?",
    answer: "Não. A configuração é feita para integrar a Hudi ao canal comercial do restaurante, preservando a experiência que seus clientes já conhecem.",
  },
  {
    question: "Quanto tempo leva para começar?",
    answer: "Você pode publicar o cardápio no mesmo dia. No plano Pro, nossa equipe acompanha a configuração da automação e da operação.",
  },
  {
    question: "Consigo usar pelo celular?",
    answer: "Sim. A experiência foi desenhada para funcionar bem no celular, no tablet e no computador, tanto para clientes quanto para a equipe.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim. Não há fidelidade obrigatória. Você mantém acesso até o fim do período contratado e pode exportar seus dados.",
  },
];

import { Bot, FileText, FolderKanban, Code } from "lucide-react"

export interface Service {
  name: string
  description: string
  longDescription: string
  icon: any
  color: string
  features: string[]
  status: "Disponível" | "Beta" | "Em Desenvolvimento"
}

export const services: Service[] = [
  {
    name: "RequirimentsAI",
    description: "Transforme reuniões em documentos de requisitos estruturados automaticamente",
    longDescription:
      "Solução baseada em IA que analisa gravações de reuniões e gera documentos de requisitos técnicos completos, economizando tempo e garantindo precisão na documentação de projetos.",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    features: [
      "Análise automática de áudio",
      "Geração de documentos estruturados",
      "Integração com ferramentas de gestão",
      "Revisão colaborativa",
    ],
    status: "Em Desenvolvimento",
  },
  {
    name: "Chatbot Inteligente",
    description: "Chatbot baseado em agentes para atendimento personalizado ao público",
    longDescription:
      "Sistema de chatbot avançado que utiliza agentes inteligentes para fornecer atendimento automatizado e personalizado, adaptando-se às necessidades específicas de cada empresa.",
    icon: Bot,
    color: "from-green-500 to-green-600",
    features: ["Agentes inteligentes", "Atendimento 24/7", "Integração multi-plataforma", "Aprendizado contínuo"],
    status: "Disponível",
  },
  {
    name: "LEDS Core",
    description: "Plataforma completa de gestão de projetos para equipes de desenvolvimento",
    longDescription:
      "Sistema integrado de gestão de projetos desenvolvido especificamente para equipes de software, oferecendo controle completo do ciclo de vida dos projetos.",
    icon: FolderKanban,
    color: "from-red-500 to-red-600",
    features: ["Gestão de sprints", "Controle de versões", "Relatórios avançados", "Integração com Git"],
    status: "Beta",
  },
  {
    name: "LED Hub",
    description: "Portal de desenvolvimento centralizado para equipes de desenvolvimento",
    longDescription:
      "Ambiente integrado que centraliza todas as ferramentas e recursos necessários para equipes de desenvolvimento, proporcionando maior produtividade e colaboração.",
    icon: Code,
    color: "from-purple-500 to-purple-600",
    features: ["Ambiente integrado", "Ferramentas centralizadas", "Colaboração em tempo real", "Deploy automatizado"],
    status: "Em Desenvolvimento",
  },
]

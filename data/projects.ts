export interface Project {
  id: number
  title: string
  date: string
  status: "Concluído" | "Em Desenvolvimento" | "Em Produção"
  description: string
  fullDescription: string
  team: string[]
  advisors: string[]
  technologies: string[]
  achievements: string[]
  color: string
  statusColor: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Idea (BAC)",
    date: "Novembro 2024",
    status: "Concluído",
    description: "Sistema de monitoramento de saúde e atividades dos cães do Batalhão de Ações com Cães da PM ES",
    fullDescription:
      "Projeto desenvolvido em parceria com o BAC da PM ES para monitorar a saúde e atividades dos cães policiais, proporcionando melhor cuidado e eficiência operacional.",
    team: ["Mateus Lannes Cunha", "Harian Adami Chagas Radaelli", "Manoel Rodrigues Loureiro"],
    advisors: ["Prof. Felipe Frechiani", "Prof. Moisés Omena"],
    technologies: ["IoT", "Sensores", "Mobile App", "Dashboard"],
    achievements: [
      "Apresentado em 08/11/2024 no IFES Campus Serra",
      "Demonstração pública com apoio do Secretário Bruno Lamas",
      "Parceria estratégica com PM ES",
    ],
    color: "from-blue-500 to-blue-600",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 2,
    title: "ConectaFAPES",
    date: "Desde Nov 2023",
    status: "Em Desenvolvimento",
    description:
      "Plataforma integradora entre IFES, bolsistas e FAPES para gestão centralizada de processos acadêmicos",
    fullDescription:
      "Sistema completo de gestão que centraliza documentos, notificações e processos acadêmicos, facilitando a comunicação entre instituições e bolsistas.",
    team: ["Equipe LEDS"],
    advisors: ["Coordenação LEDS"],
    technologies: ["React", "Node.js", "PostgreSQL", "Jira", "GitLab", "Plugin Origami"],
    achievements: [
      "Orçamento de R$ 5,9 milhões por 36 meses",
      "Integrações avançadas implementadas",
      "Gestão centralizada de documentos",
      "Sistema de notificações automatizado",
    ],
    color: "from-green-500 to-green-600",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 3,
    title: "AgentES (Agentes)",
    date: "2025",
    status: "Em Produção",
    description: "Sistema de agentes inteligentes com IA para automação de processos públicos",
    fullDescription:
      "Projeto inovador que utiliza inteligência artificial para criar agentes autônomos capazes de automatizar processos públicos e auxiliar na tomada de decisões estratégicas.",
    team: ["Equipe LEDS", "Prodest", "FAPES"],
    advisors: ["Diretores IFES", "Diretores Prodest", "Diretores FAPES"],
    technologies: ["n8n", "OpenAI", "Mistral", "IA", "Automação"],
    achievements: [
      "POC apresentada em reunião estratégica na Prodest ES",
      "Parceria com Prodest e FAPES",
      "Início da produção para grupo restrito",
      "Treinamento técnico da equipe Prodest planejado",
    ],
    color: "from-red-500 to-red-600",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
]

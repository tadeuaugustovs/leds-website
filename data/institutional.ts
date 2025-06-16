import { Target, Users, Lightbulb, BookOpen, Cpu } from "lucide-react"

export interface Area {
  name: string
  icon: any
  description: string
  color: string
}

export interface Pillar {
  title: string
  description: string
  icon: any
}

export interface Campus {
  name: string
  description: string
  address: string
  color: string
}

export const areas: Area[] = [
  {
    name: "Engenharia de Software",
    icon: Cpu,
    description: "Desenvolvimento de metodologias e ferramentas para criação de software de qualidade",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Ciência de Dados",
    icon: BookOpen,
    description: "Análise e processamento de grandes volumes de dados para geração de insights",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Inteligência Computacional",
    icon: Lightbulb,
    description: "Desenvolvimento de sistemas inteligentes e algoritmos de aprendizado de máquina",
    color: "from-red-500 to-red-600",
  },
]

export const pillars: Pillar[] = [
  {
    title: "Ensino",
    description: "Formação de profissionais qualificados através de metodologias inovadoras",
    icon: BookOpen,
  },
  {
    title: "Pesquisa",
    description: "Desenvolvimento de conhecimento científico e tecnológico de ponta",
    icon: Target,
  },
  {
    title: "Extensão",
    description: "Aplicação do conhecimento para solucionar problemas reais da sociedade",
    icon: Users,
  },
]

export const campuses: Campus[] = [
  {
    name: "LEDS Serra",
    description: "Campus principal do LEDS, onde iniciou suas atividades em 2012",
    address: "IFES Campus Serra - Rodovia ES-010, Km 6,5 - Manguinhos, Serra - ES",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "LEDS Colatina",
    description: "Unidade focada em desenvolvimento de software e inteligência artificial",
    address: "IFES Campus Colatina - Av. Arino Gomes Leal, 1700 - Santa Margarida, Colatina - ES",
    color: "from-green-500 to-green-600",
  },
  {
    name: "LEDS Cachoeiro de Itapemirim",
    description: "Unidade especializada em automação e sistemas embarcados",
    address:
      "IFES Campus Cachoeiro - Rod. ES-482 (Cachoeiro-Alegre) - Fazenda Morro Grande, Cachoeiro de Itapemirim - ES",
    color: "from-red-500 to-red-600",
  },
]

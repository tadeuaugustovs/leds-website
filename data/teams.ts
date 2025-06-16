import { Users, Code, Settings, Brain, Target, Palette } from "lucide-react"

export interface TeamMember {
  name: string
  role?: string
}

export interface Team {
  name: string
  area: string
  icon: any
  mission: string
  members: TeamMember[]
  color: string
  technologies: string[]
  roles: string[]
}

export const teams: Team[] = [
  {
    name: "Coordenação",
    area: "Gestão e Coordenação",
    icon: Target,
    mission:
      "Coordenar e orientar todas as atividades do LEDS, garantindo alinhamento estratégico e excelência na execução dos projetos.",
    members: [
      { name: "Fabiano Ruy" },
      { name: "Felipe Frechiani" },
      { name: "Paulo Sérgio dos Santos Júnior" },
      { name: "Victorio Albani Carvalho" },
    ],
    color: "from-purple-500 to-purple-600",
    technologies: ["Gestão de Projetos", "Metodologias Ágeis", "Liderança", "Planejamento Estratégico"],
    roles: ["Coordenador", "Professor Orientador", "Gestor de Projetos"],
  },
  {
    name: "Equipe de Desenvolvimento",
    area: "Desenvolvimento de Software",
    icon: Code,
    mission:
      "Desenvolver soluções de software robustas, escaláveis e inovadoras para atender às demandas dos projetos do LEDS.",
    members: [
      { name: "Vitor Freire Dandrea" },
      { name: "João Pedro Silva Santos" },
      { name: "Maria Eduarda Oliveira" },
      { name: "Carlos Alberto Costa" },
      { name: "Ana Beatriz Ferreira" },
      { name: "Lucas Gabriel Santos" },
      { name: "Fernanda Lima" },
      { name: "Rafael Souza" },
      { name: "Juliana Martins" },
      { name: "Bruno Alves" },
      { name: "Camila Torres" },
      { name: "Diego Rocha" },
      { name: "Isabela Costa" },
      { name: "Mateus Cunha" },
      { name: "Larissa Campos" },
    ],
    color: "from-blue-500 to-blue-600",
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "TypeScript", "JavaScript"],
    roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile Developer"],
  },
  {
    name: "Equipe de QA",
    area: "Quality Assurance",
    icon: Users,
    mission:
      "Garantir a qualidade e confiabilidade de todos os produtos desenvolvidos, implementando testes rigorosos e processos de qualidade.",
    members: [
      { name: "Vitor Freire Dandrea" },
      { name: "Fernanda QA Specialist" },
      { name: "Roberto Testes" },
      { name: "Juliana Quality" },
      { name: "André Testing" },
    ],
    color: "from-green-500 to-green-600",
    technologies: ["Selenium", "Jest", "Cypress", "Postman", "JMeter", "TestRail", "Automation Testing"],
    roles: ["QA Analyst", "Test Automation Engineer", "QA Lead", "Manual Tester"],
  },
  {
    name: "Equipe de DevOps",
    area: "Infraestrutura e Deploy",
    icon: Settings,
    mission:
      "Garantir infraestrutura confiável, processos de deploy contínuo e monitoramento eficiente para todos os projetos.",
    members: [
      { name: "André DevOps" },
      { name: "Juliana Infrastructure" },
      { name: "Rodrigo Cloud" },
      { name: "Fernanda Deploy" },
      { name: "Carlos SRE" },
    ],
    color: "from-red-500 to-red-600",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins", "Monitoring", "Linux"],
    roles: ["DevOps Engineer", "Cloud Architect", "SRE", "Infrastructure Engineer"],
  },
  {
    name: "Equipe de IA",
    area: "Inteligência Artificial",
    icon: Brain,
    mission: "Desenvolver soluções de IA e machine learning para automação, análise de dados e insights inteligentes.",
    members: [
      { name: "Dr. IA Specialist" },
      { name: "Gabriel ML Engineer" },
      { name: "Isabela Data Scientist" },
      { name: "André AI Developer" },
      { name: "Patricia ML Researcher" },
    ],
    color: "from-indigo-500 to-indigo-600",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Mistral", "Jupyter", "Pandas", "Scikit-learn"],
    roles: ["AI Engineer", "Data Scientist", "ML Engineer", "AI Researcher"],
  },
  {
    name: "Equipe de UX/UI",
    area: "Design de Experiência",
    icon: Palette,
    mission:
      "Criar experiências visuais impactantes e interfaces intuitivas que proporcionem a melhor experiência do usuário.",
    members: [
      { name: "Fernanda UX Designer" },
      { name: "Bruno UI Designer" },
      { name: "Sofia Product Designer" },
      { name: "Lucas Visual Designer" },
      { name: "Amanda UX Researcher" },
    ],
    color: "from-pink-500 to-rose-500",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design System", "Miro", "User Research"],
    roles: ["UX Designer", "UI Designer", "Product Designer", "UX Researcher"],
  },
]

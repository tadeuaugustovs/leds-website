import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, FileText, FolderKanban, Code, ArrowRight, Sparkles } from "lucide-react"

export default function ProdutosPage() {
  const products = [
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível":
        return "bg-green-100 text-green-800"
      case "Beta":
        return "bg-yellow-100 text-yellow-800"
      case "Em Desenvolvimento":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getButtonProps = (status: string, color: string) => {
    if (status === "Em Desenvolvimento") {
      return {
        className:
          "w-full bg-gray-700 text-white cursor-not-allowed border border-gray-700 font-medium py-2 px-4 rounded-md",
        disabled: true,
      }
    }
    return {
      className: `w-full bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium py-2 px-4 rounded-md`,
      disabled: false,
    }
  }

  const getButtonText = (status: string) => {
    switch (status) {
      case "Disponível":
        return "Saiba Mais"
      case "Beta":
        return "Participar do Beta"
      case "Em Desenvolvimento":
        return "Em Breve"
      default:
        return "Saiba Mais"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossos Produtos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções inovadoras desenvolvidas pelo LEDS para transformar a forma como você trabalha
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            const buttonProps = getButtonProps(product.status, product.color)
            return (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${product.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{product.name}</CardTitle>
                  <p className="text-gray-600">{product.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                      Principais Funcionalidades
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button {...buttonProps}>
                      {getButtonText(product.status)}
                      {!buttonProps.disabled && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-gray-200">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interessado em nossos produtos?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para saber mais sobre como nossas soluções podem transformar seu negócio
              </p>
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">
                Entre em Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

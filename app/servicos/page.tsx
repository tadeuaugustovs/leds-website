import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { services } from "@/data/services"

export default function ServicosPage() {
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

  const getButtonProps = (status: string) => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossos Serviços</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções inovadoras desenvolvidas pelo LEDS para transformar a forma como você trabalha
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const buttonProps = getButtonProps(service.status)
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{service.name}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{service.longDescription}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                      Principais Funcionalidades
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button {...buttonProps}>
                      {getButtonText(service.status)}
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
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-gray-200/70 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interessado em nossos serviços?</h2>
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

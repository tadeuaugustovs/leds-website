import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, MapPin } from "lucide-react"
import { testimonialsByLocation } from "@/data/testimonials"

export default function DepoimentosPage() {
  const locationColors = {
    "LEDS Serra": "from-blue-500 to-blue-600",
    "LEDS Colatina": "from-green-500 to-green-600",
    "LEDS Cachoeiro de Itapemirim": "from-red-500 to-red-600",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Depoimentos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de pessoas que passaram pelo LEDS e transformaram suas carreiras
          </p>
        </div>

        {/* Testimonials by Location */}
        {Object.entries(testimonialsByLocation).map(([location, testimonials]) => (
          <section key={location} className="mb-16">
            <div className="flex items-center mb-8">
              <div
                className={`p-3 rounded-lg bg-gradient-to-r ${locationColors[location as keyof typeof locationColors] || "from-gray-500 to-gray-600"} mr-4`}
              >
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{location}</h2>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 mt-1">
                  {testimonials.length} depoimento{testimonials.length > 1 ? "s" : ""}
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-50" />
                    <CardTitle className="text-xl text-gray-900">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      {testimonial.content.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 border-0 shadow-2xl">
            <CardContent className="p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Quer fazer parte dessa história?</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Junte-se ao LEDS e transforme sua carreira. Seja o próximo a contar sua história de sucesso!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
                  Saiba Como Participar
                </button>
                <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors">
                  Entre em Contato
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

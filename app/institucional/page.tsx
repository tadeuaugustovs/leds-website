import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { areas, pillars, campuses } from "@/data/institutional"

export default function InstitucionalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Institucional</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a história e missão do LEDS - Laboratório de Extensão em Desenvolvimento de Soluções
          </p>
        </div>

        {/* História */}
        <section className="mb-16">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                Nossa História
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Badge className="bg-gray-800 text-white">2012</Badge>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    O LEDS foi criado em <strong>2012</strong> no IFES Campus Serra com o intuito de solucionar
                    problemas reais, integrando ensino, pesquisa e extensão. Desde sua fundação, o laboratório tem se
                    dedicado ao desenvolvimento de soluções inovadoras que atendam às demandas da sociedade e do
                    mercado.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Ao longo dos anos, o LEDS consolidou-se como um centro de excelência em desenvolvimento de software,
                  formando profissionais qualificados e desenvolvendo projetos que impactam positivamente a comunidade e
                  o setor público.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Missão e Visão */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-green-600" />
                  Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Desenvolver soluções tecnológicas inovadoras através da integração entre ensino, pesquisa e extensão,
                  contribuindo para a formação de profissionais qualificados e para o desenvolvimento da sociedade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-red-600" />
                  Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecido como um centro de excelência em desenvolvimento de soluções tecnológicas, referência
                  em inovação e formação de profissionais na área de tecnologia da informação.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pilares */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nossos Pilares</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <Card key={index} className="bg-white border-gray-200 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Campi do LEDS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nossos Campi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${campus.color} flex items-center justify-center mb-4`}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{campus.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 leading-relaxed">{campus.description}</p>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm text-gray-500">{campus.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Áreas de Atuação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card key={index} className="bg-white border-gray-200 shadow-lg">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{area.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

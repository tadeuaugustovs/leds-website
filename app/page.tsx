import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import TeamMemberCard from "@/components/team-member-card"
import VideoPlayer from "@/components/video-player"
import TestimonialSlider from "@/components/testimonial-slider"
import { testimonials } from "@/data/testimonials"
import { teamMembers } from "@/data/team-members"

export default function HomePage() {
  // Usar apenas um resumo dos depoimentos na página inicial
  const testimonialExcerpts = testimonials.map((t) => ({
    ...t,
    content: t.content.split("\n\n")[0], // Pegar apenas o primeiro parágrafo
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 particle-blue rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 particle-green rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 particle-red rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 particle-blue rounded-full animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 particle-green rounded-full animate-pulse animation-delay-1500"></div>
        <div className="absolute bottom-1/3 right-1/6 w-1 h-1 particle-red rounded-full animate-pulse animation-delay-2500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Hero Content */}
          <div className="space-y-6 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Inovação em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-red-600">
                Desenvolvimento de Soluções
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Laboratório de Extensão em Desenvolvimento de Soluções - IFES Campus Serra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link href="/institucional">
                <Button
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Conheça o LEDS
                </Button>
              </Link>
              <Link href="/servicos">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>

          {/* Video Section - Updated with new video */}
          <div className="mb-12">
            <div className="relative w-full max-w-2xl mx-auto aspect-video">
              <VideoPlayer
                videoId="1093373619"
                className="w-full h-full shadow-xl border border-gray-200/50 bg-white/30 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quem Somos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O LEDS é um laboratório de pesquisa e desenvolvimento focado em soluções inovadoras de engenharia de
              software, inteligência artificial e automação de processos.
            </p>
          </div>

          {/* Team Members - Updated with correct name */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                linkedin={member.linkedin}
                role={member.role}
                photo={member.photo}
              />
            ))}
          </div>

          {/* Testimonials Section - Updated with manual navigation */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Depoimentos</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">O que dizem as pessoas que passaram pelo LEDS</p>
              <Link href="/depoimentos">
                <Button variant="outline" className="mt-4 border-gray-300 text-gray-700 hover:bg-gray-50">
                  Ver todos os depoimentos
                </Button>
              </Link>
            </div>

            <div className="max-w-3xl mx-auto">
              <TestimonialSlider testimonials={testimonialExcerpts} />
            </div>
          </div>

          {/* Featured Photos */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/70 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src="/images/team-photo.jpeg"
                    alt="Equipe LEDS - Foto em grupo no campus"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">Equipe LEDS</h3>
                      <p className="text-sm text-gray-200">Nossa equipe unida no campus IFES Serra</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/70 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src="/images/presentation-photo.jpeg"
                    alt="Apresentação de desenvolvimento no laboratório"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">Desenvolvimento em Ação</h3>
                      <p className="text-sm text-gray-200">Apresentação de projetos e soluções</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

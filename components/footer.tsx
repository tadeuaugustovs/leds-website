import Link from "next/link"
import { ExternalLink, Github, Linkedin, Mail, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50/80 backdrop-blur-sm border-t border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">LEDS</h3>
            <p className="text-gray-600 text-sm">
              Laboratório de Extensão em Desenvolvimento de Soluções - IFES Campus Serra
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Início
              </Link>
              <Link href="/institucional" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Institucional
              </Link>
              <Link href="/projetos" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Projetos
              </Link>
              <Link href="/servicos" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Serviços
              </Link>
              <Link href="/equipes" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Equipes
              </Link>
              <Link href="/depoimentos" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Depoimentos
              </Link>
              <Link href="/contato" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Contato
              </Link>
            </div>
          </div>

          {/* Institutional */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Institucional</h3>
            <div className="space-y-2">
              <a
                href="https://serra.ifes.edu.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 text-sm transition-colors inline-flex items-center"
              >
                IFES Campus Serra <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href="https://fapes.es.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 text-sm transition-colors inline-flex items-center"
              >
                FAPES <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contato</h3>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:leds.ifes@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/leds-org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://br.linkedin.com/school/ledsifes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ledsifes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@ledsifes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/70 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} LEDS - Laboratório de Extensão em Desenvolvimento de Soluções. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

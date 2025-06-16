"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Youtube, Clock, MessageCircle } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "leds.ifes@gmail.com",
      link: "mailto:leds.ifes@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(27) 3149-0700",
      link: "tel:+552731490700",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "IFES Campus Serra - Rodovia ES-010, Km 6,5 - Manguinhos, Serra - ES",
      link: "https://maps.google.com/?q=IFES+Campus+Serra",
      color: "from-red-500 to-red-600",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/leds-org",
      color: "hover:bg-gray-100",
      iconColor: "text-gray-700",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://br.linkedin.com/school/ledsifes/",
      color: "hover:bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/ledsifes/",
      color: "hover:bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@ledsifes",
      color: "hover:bg-red-50",
      iconColor: "text-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida ou quer saber mais sobre nossos projetos e produtos? Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Send className="mr-3 h-6 w-6" />
                  Envie uma Mensagem
                </CardTitle>
                <p className="text-blue-100">Preencha o formulário abaixo e entraremos em contato em breve</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 border-gray-300/70 focus:border-blue-500 focus:ring-blue-500 h-12 bg-white/70 backdrop-blur-sm"
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 border-gray-300/70 focus:border-blue-500 focus:ring-blue-500 h-12 bg-white/70 backdrop-blur-sm"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      Assunto *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 border-gray-300/70 focus:border-blue-500 focus:ring-blue-500 h-12 bg-white/70 backdrop-blur-sm"
                      placeholder="Assunto da sua mensagem"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-2 border-gray-300/70 focus:border-blue-500 focus:ring-blue-500 resize-none bg-white/70 backdrop-blur-sm"
                      placeholder="Descreva sua dúvida, interesse ou como podemos ajudá-lo..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-blue-600" />
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div key={index} className="group">
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50/80 transition-colors duration-200"
                      >
                        <div
                          className={`p-2 bg-gradient-to-r ${contact.color} rounded-lg group-hover:scale-110 transition-transform duration-200`}
                        >
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                          <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                            {contact.info}
                          </p>
                        </div>
                      </a>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-green-600" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50/80 backdrop-blur-sm rounded-lg">
                    <span className="font-medium text-gray-700">Segunda - Sexta:</span>
                    <span className="font-bold text-green-700">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50/80 backdrop-blur-sm rounded-lg">
                    <span className="font-medium text-gray-700">Fins de semana:</span>
                    <span className="font-medium text-gray-500">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Redes Sociais</CardTitle>
                <p className="text-sm text-gray-600">Siga-nos para ficar por dentro das novidades!</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 p-3 rounded-lg border border-gray-200/70 bg-white/60 backdrop-blur-sm ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                      >
                        <IconComponent className={`h-5 w-5 ${social.iconColor}`} />
                        <span className="font-medium text-gray-700 text-sm">{social.name}</span>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 border-0 shadow-2xl">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Pronto para inovar conosco?</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Junte-se ao LEDS e faça parte da transformação digital. Vamos desenvolver soluções incríveis juntos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-medium">
                  Conheça Nossos Projetos
                </Button>
                <Link href="/produtos">
                  <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 font-medium border-0">
                    Ver Produtos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

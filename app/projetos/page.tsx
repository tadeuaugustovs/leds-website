"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Target, Cpu } from "lucide-react"
import { projects } from "@/data/projects"

export default function ProjetosPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossos Projetos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linha do tempo interativa dos principais projetos desenvolvidos pelo LEDS
          </p>
        </div>

        {/* Responsive Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node - Hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-800 z-10 hidden md:block"></div>

                {/* Project Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="bg-white border-gray-200 shadow-lg">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                              <Calendar className="w-3 h-3 mr-1" />
                              {project.date}
                            </Badge>
                            <Badge className={project.statusColor}>{project.status}</Badge>
                          </div>
                          <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Ver Detalhes
                          </Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>

                    {/* Project Modal */}
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white border-gray-200">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-gray-900 flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="space-y-6 text-gray-600">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Descrição</h3>
                          <p>{project.fullDescription}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                              <Users className="w-5 h-5 mr-2" />
                              Equipe
                            </h3>
                            <ul className="space-y-1">
                              {project.team.map((member, idx) => (
                                <li key={idx} className="text-sm">
                                  • {member}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                              <Target className="w-5 h-5 mr-2" />
                              Orientação
                            </h3>
                            <ul className="space-y-1">
                              {project.advisors.map((advisor, idx) => (
                                <li key={idx} className="text-sm">
                                  • {advisor}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Tecnologias
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="border-gray-300 text-gray-700">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Conquistas</h3>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

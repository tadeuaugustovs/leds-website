"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import TeamModal from "@/components/team-modal"
import { teams } from "@/data/teams"

export default function EquipesPage() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossas Equipes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os squads especializados que fazem a inovação acontecer no LEDS
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {teams.map((squad, index) => {
            const IconComponent = squad.icon
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200/70 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${squad.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{squad.name}</CardTitle>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 mt-1">
                        {squad.area}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Missão</h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{squad.mission}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Integrantes ({squad.members.length})
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {squad.members.slice(0, 4).map((_, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full border-2 border-white flex items-center justify-center"
                          >
                            <span className="text-white text-xs font-medium">
                              {squad.members[memberIndex].name.charAt(0)}
                            </span>
                          </div>
                        ))}
                        {squad.members.length > 4 && (
                          <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-xs font-medium">+{squad.members.length - 4}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={() => setSelectedTeam(index)}
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Mais Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Modal */}
        {selectedTeam !== null && (
          <TeamModal isOpen={selectedTeam !== null} onClose={() => setSelectedTeam(null)} team={teams[selectedTeam]} />
        )}
      </div>
    </div>
  )
}

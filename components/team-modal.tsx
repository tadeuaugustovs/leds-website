import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

interface TeamMember {
  name: string
  role?: string
}

interface TeamModalProps {
  isOpen: boolean
  onClose: () => void
  team: {
    name: string
    area: string
    icon: any
    mission: string
    members: TeamMember[]
    color: string
    technologies: string[]
    roles: string[]
  }
}

export default function TeamModal({ isOpen, onClose, team }: TeamModalProps) {
  const IconComponent = team.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${team.color}`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <div>
              {team.name}
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 ml-3">
                {team.area}
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Missão</h3>
            <p className="leading-relaxed">{team.mission}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Integrantes da Equipe ({team.members.length})
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {team.members.map((member, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                  <div>
                    <span className="font-medium text-gray-900">{member.name}</span>
                    {member.role && <p className="text-sm text-gray-600">{member.role}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Funções</h3>
              <div className="flex flex-wrap gap-2">
                {team.roles.map((role, idx) => (
                  <Badge key={idx} variant="outline" className="border-gray-400 text-gray-600">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {team.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="border-gray-600 text-gray-600">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

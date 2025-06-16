import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, User } from "lucide-react"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  linkedin: string
  role?: string
  photo?: string
}

export default function TeamMemberCard({ name, linkedin, role, photo }: TeamMemberProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gray-200/70 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-green-500 to-red-500 p-0.5">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            {photo ? (
              <Image
                src={photo || "/placeholder.svg"}
                alt={name}
                width={76}
                height={76}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User className="h-8 w-8 text-gray-400" />
            )}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        {role && <p className="text-sm text-gray-600 mb-2">{role}</p>}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  )
}

export interface TeamMember {
  name: string
  role: string
  linkedin: string
  photo: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Paulo Sérgio dos Santos Júnior",
    role: "Coordenador",
    linkedin: "https://www.linkedin.com/in/paulossjunior/",
    photo: "/images/paulo-photo.jpeg",
  },
  {
    name: "Daniel Cavalieri",
    role: "Professor Orientador",
    linkedin: "https://www.linkedin.com/in/daniel-cavalieri-323272123/",
    photo: "/images/daniel-photo.jpeg",
  },
  {
    name: "Rafael Emerick",
    role: "Professor Orientador",
    linkedin: "https://www.linkedin.com/in/rafael-emerick-z-o/",
    photo: "/images/emerick-photo.jpeg",
  },
  {
    name: "Rodrigo Calhau",
    role: "Professor Orientador",
    linkedin: "https://www.linkedin.com/in/rodrigo-f-calhau-a6663776/",
    photo: "/images/rodrigo-calhau.jpeg",
  },
]

export interface Testimonial {
  name: string
  role: string
  content: string
  location?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Tarcísio",
    role: "Desenvolvedor – Banco BTG Pactual",
    content: `Se me perguntassem se há algo de que me arrependo no LEDS, certamente seria o fato de não ter participado do laboratório mais cedo, durante a faculdade.

Lá dentro, tive noções mais profundas de como a computação é uma atividade meio — uma ferramenta para resolver problemas reais da vida.

Aprendi a deixar o ego de lado, abandonar preferências pessoais e estar aberto a novas formas de resolver problemas.

Aprendi a ser parte de um time e, mesmo nas situações complicadas, manter a esperança.

"A sua falta de fé é perturbadora." — Darth Vader

Com ágil injetado na veia, aprendi demais sobre o ciclo de vida de projetos. Isso foi essencial para minha capacidade de ajudar empresas a reagirem diante de situações difíceis.

A experiência não poderia ser menos que fantástica.`,
    location: "LEDS Serra",
  },
  {
    name: "Renan Osório Rios",
    role: "Professor – Ifes Campus Colatina",
    content: `Participar do LEDS como orientador virou a chave na minha carreira como professor.

Estar ao lado dos estudantes, orientando no desenvolvimento de software com foco no mercado real, me tirou da bolha acadêmica e me fez repensar como ensinar.

O LEDS me mostrou que o professor precisa viver o mercado para ensinar algo conectado com a realidade.

Destaque para os projetos com o Banco do Nordeste e o Conecta FAPES.`,
    location: "LEDS Colatina",
  },
  {
    name: "Ex-LEDS",
    role: "Desenvolvedor – Empresa nos EUA",
    content: `O LEDS definitivamente é uma faculdade dentro do IFES.

Comecei no terceiro semestre e encontrei um ambiente de colaboração e apoio.

Hoje trabalho para uma empresa dos Estados Unidos — e agora só falta conquistar o mundo 😁.`,
    location: "LEDS Serra",
  },
  {
    name: "Ex-LEDS",
    role: "Desenvolvedor Full Stack",
    content: `O LEDS me deu atalhos na carreira, permitindo assumir grandes responsabilidades logo no início.

Trabalhei com problemas reais, clientes reais, liderança de equipe e entrega de produtos.

Em qualquer empresa, levaria anos para ter essa vivência.

E lá, errar era parte do processo — um ambiente seguro de aprendizado.`,
    location: "LEDS Serra",
  },
  {
    name: "Ex-LEDS",
    role: "Gerente de Produto – Empresa de capital aberto em SP",
    content: `Pessoas inovadoras constroem produtos inovadores.

O LEDS me deu ambiente e pessoas certas para isso.

Aprendi a pensar: "como tornar a vida das pessoas mais fácil?".

Hoje sou gerente de produto em uma empresa de capital aberto em SP.

Minha base? O LEDS.`,
    location: "LEDS Serra",
  },
  {
    name: "Diego Pasti",
    role: "Ex-integrante LEDS – Consultor e Desenvolvedor",
    content: `Participei do LEDS de 2014 a 2016. Foi uma experiência transformadora.

Mais que um programador, me tornei um resolvedor de problemas.

Um profissional que atua quando os outros desistem.

Fui LEDS em todos os lugares onde trabalhei desde então.

O DNA do LEDS está comigo — e com todos que passaram por lá.

Onde tem um, tem todos nós.`,
    location: "LEDS Serra",
  },
]

export const testimonialsByLocation = testimonials.reduce(
  (acc, testimonial) => {
    const location = testimonial.location || "LEDS Serra"
    if (!acc[location]) {
      acc[location] = []
    }
    acc[location].push(testimonial)
    return acc
  },
  {} as Record<string, Testimonial[]>,
)

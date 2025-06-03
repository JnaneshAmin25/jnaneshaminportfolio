export interface Project {
  id: number
  title: string
  cardTitle: string
  icon: string
  smallDescription: string
  description: string
  technologies: string[]
  image: string
  githubLink?: string
  liveLink?: string
  features: string[]
  ranking: number
  isArcheived: boolean
}
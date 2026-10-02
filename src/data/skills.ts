export interface SkillCategory {
  key: 'webDev' | 'backend' | 'ai' | 'databases' | 'devops' | 'other'
  icon: 'code' | 'server' | 'brain' | 'database' | 'wrench' | 'layers'
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'webDev',
    icon: 'code',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    key: 'backend',
    icon: 'server',
    skills: ['FastAPI', 'REST APIs', 'WebSocket', 'Authentication', 'API Integration'],
  },
  {
    key: 'ai',
    icon: 'brain',
    skills: ['Python', 'Machine Learning', 'NLP', 'RAG', 'LangChain', 'LangGraph', 'Embeddings', 'Vector Databases', 'LLMs', 'Qwen', 'Ollama'],
  },
  {
    key: 'databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'ChromaDB', 'DuckDB'],
  },
  {
    key: 'devops',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VirtualBox', 'Nginx'],
  },
  {
    key: 'other',
    icon: 'layers',
    skills: ['Information Systems', 'Technical Support', 'System Administration', 'Troubleshooting', 'Documentation'],
  },
]

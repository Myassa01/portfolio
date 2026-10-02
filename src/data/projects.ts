export interface Project {
  id: string
  i18nKey: string
  technologies: string[]
  github: string | null
  liveDemo: string | null
  hasArchitectureDiagram: boolean
  accent: 'accent' | 'amber'
}

export const projects: Project[] = [
  {
    id: 'hr-assistant',
    i18nKey: 'hrAssistant',
    technologies: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Qwen', 'Ollama', 'ChromaDB', 'BM25', 'DuckDB', 'RAG'],
    github: 'https://github.com/Myassa01/pfe26',
    liveDemo: null,
    hasArchitectureDiagram: true,
    accent: 'accent',
  },
  {
    id: 'ai-agent-mcp',
    i18nKey: 'aiAgentMcp',
    technologies: ['LangGraph', 'MCP', 'FastAPI', 'React', 'WebSocket'],
    github: 'https://github.com/Myassa01/agent-ia-mcp',
    liveDemo: null,
    hasArchitectureDiagram: false,
    accent: 'accent',
  },
  {
    id: 'ai-sql-assistant',
    i18nKey: 'aiSqlAssistant',
    technologies: ['PostgreSQL', 'pgvector', 'SQLGlot', 'FastAPI', 'TypeScript', 'Docker'],
    github: 'https://github.com/Myassa01/ai-sql-assistant',
    liveDemo: null,
    hasArchitectureDiagram: true,
    accent: 'accent',
  },
  {
    id: 'learnhub',
    i18nKey: 'learnhub',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
    github: 'https://github.com/Myassa01/plateforme-de-farmation-en-ligne-',
    liveDemo: null,
    hasArchitectureDiagram: false,
    accent: 'amber',
  },
  {
    id: 'ecommerce',
    i18nKey: 'ecommerce',
    technologies: ['React', 'Node.js / Express', 'MongoDB'],
    github: 'https://github.com/Myassa01/Ecommerce_Store',
    liveDemo: null,
    hasArchitectureDiagram: false,
    accent: 'amber',
  },
  {
    id: 'social-media',
    i18nKey: 'socialMedia',
    technologies: ['React', 'Node.js / Express', 'MongoDB'],
    github: 'https://github.com/Myassa01/Social_Media_Platform',
    liveDemo: null,
    hasArchitectureDiagram: false,
    accent: 'amber',
  },
  {
    id: 'project-management',
    i18nKey: 'projectManagement',
    technologies: ['React', 'Node.js / Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/Myassa01/Project-Management-Tool',
    liveDemo: null,
    hasArchitectureDiagram: false,
    accent: 'amber',
  },
  {
    id: 'realtime-communication',
    i18nKey: 'realtimeCommunication',
    technologies: ['React', 'Node.js / Express', 'Socket.io', 'WebRTC'],
    github: 'https://github.com/Myassa01/RealTime_Communication_App',
    liveDemo: null,
    hasArchitectureDiagram: false,
    accent: 'amber',
  },
  {
    id: 'leave-management',
    i18nKey: 'leaveManagement',
    technologies: ['JEE'],
    github: 'https://github.com/Myassa01/Gestion-des-Conges-',
    liveDemo: null,
    hasArchitectureDiagram: false,
    accent: 'amber',
  },
  {
    id: 'it-asset-management',
    i18nKey: 'itAssetManagement',
    technologies: ['PHP'],
    github: 'https://github.com/Myassa01/optilisation_parc_informatique',
    liveDemo: null,
    hasArchitectureDiagram: false,
    accent: 'amber',
  },
]

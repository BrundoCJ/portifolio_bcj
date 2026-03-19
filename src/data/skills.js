import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiPython, SiPostgresql, SiDjango, SiVuedotjs,
  SiVite, SiStreamlit, SiSqlite,
  SiNodedotjs, SiGit, SiGithub,
  SiTypescript, SiTailwindcss, SiDocker,
} from 'react-icons/si'
import { FaDatabase, FaChartBar } from 'react-icons/fa'
import { DAXIcon } from './biIcons.jsx'

export const categoryColors = {
  Frontend:    '#3b82f6',
  Dados:       '#8b5cf6',
  Backend:     '#10b981',
  Ferramentas: '#f59e0b',
}

export const skills = [
  // Frontend
  { name: 'HTML',        icon: SiHtml5,       category: 'Frontend',    color: '#e34f26' },
  { name: 'CSS',         icon: SiCss,         category: 'Frontend',    color: '#1572b6' },
  { name: 'JavaScript',  icon: SiJavascript,  category: 'Frontend',    color: '#f7df1e' },
  { name: 'TypeScript',  icon: SiTypescript,  category: 'Frontend',    color: '#3178c6' },
  { name: 'React',       icon: SiReact,       category: 'Frontend',    color: '#61dafb' },
  { name: 'Vue.js',      icon: SiVuedotjs,    category: 'Frontend',    color: '#42b883' },
  { name: 'Tailwind',    icon: SiTailwindcss, category: 'Frontend',    color: '#06b6d4' },

  // Dados
  { name: 'Python',      icon: SiPython,      category: 'Dados',       color: '#3776ab' },
  { name: 'SQL',         icon: FaDatabase,    category: 'Dados',       color: '#f59e0b' },
  { name: 'PostgreSQL',  icon: SiPostgresql,  category: 'Dados',       color: '#336791' },
  { name: 'SQLite',      icon: SiSqlite,      category: 'Dados',       color: '#003B57' },
  { name: 'Power BI',    icon: FaChartBar,    category: 'Dados',       color: '#f2c811' },
  { name: 'DAX',         icon: DAXIcon,       category: 'Dados',       color: '#f2c811' },
  { name: 'Streamlit',   icon: SiStreamlit,   category: 'Dados',       color: '#ff4b4b' },

  // Backend
  { name: 'Node.js',     icon: SiNodedotjs,   category: 'Backend',     color: '#68a063' },
  { name: 'Django',      icon: SiDjango,      category: 'Backend',     color: '#0C4B33' },
  { name: 'Docker',      icon: SiDocker,      category: 'Backend',     color: '#2496ed' },

  // Ferramentas
  { name: 'Vite',        icon: SiVite,        category: 'Ferramentas', color: '#646cff' },
  { name: 'Git',         icon: SiGit,         category: 'Ferramentas', color: '#f05032' },
  { name: 'GitHub',      icon: SiGithub,      category: 'Ferramentas', color: '#ffffff' },
]

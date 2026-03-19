import {
  SiReact, SiNodedotjs, SiTypescript, SiDjango,
  SiVuedotjs, SiVite, SiPython, SiStreamlit,
  SiSqlite, SiHtml5, SiCss,
} from 'react-icons/si'

export const projects = [
  {
    title: 'Acompanhamento de Pedidos',
    description: 'Um projeto feito para quem quer acompanhar seus pedidos em tempo real. Com uma interface fácil de usar, o usuário consegue visualizar todas as etapas do pedido, desde a confirmação até a entrega.\n\nAs atualizações em tempo real são feitas por meio de webhooks integrados à API de um sistema de lançamento de pedidos, garantindo que as informações estejam sempre atualizadas. O sistema também se conecta a serviços de rastreamento para mostrar a localização e o status do pedido.\n\nAlém disso, possui um indicador de faturamento em tempo real, trazendo mais controle e visão geral.\n\nIdeal para tornar a experiência de compra mais prática e transparente.',
    tags: [
      { icon: SiPython,    name: 'Python',    color: '#3572A5' },
      { icon: SiStreamlit, name: 'Streamlit', color: '#ff4b4b' },
      { icon: SiNodedotjs, name: 'Node.js',   color: '#68a063' },
      { icon: SiHtml5,     name: 'HTML',      color: '#e34f26' },
      { icon: SiCss,       name: 'CSS',       color: '#264de4' },
    ],
    images: [
      '/img/projetos/acompanhamento_pedidos.png',
      '/img/projetos/acompanhamento_pedidos2.png',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Forms',
    description: 'Descrição do projeto...',
    tags: [
      { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
      { icon: SiReact,      name: 'React',      color: '#61dafb' },
      { icon: SiDjango,     name: 'Django',     color: '#0C4B33' },
      { icon: SiVuedotjs,   name: 'Vue',        color: '#42b883' },
      { icon: SiNodedotjs,  name: 'Node.js',    color: '#68a063' },
      { icon: SiVite,       name: 'Vite',       color: '#646cff' },
      { icon: SiPython,     name: 'Python',     color: '#3572A5' },
      { icon: SiHtml5,      name: 'HTML',       color: '#e34f26' },
      { icon: SiCss,        name: 'CSS',        color: '#264de4' },
    ],
    images: [
      '/img/projetos/forms_claro.png',
      '/img/projetos/forms_escuro.png',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Monitoramento',
    description: 'Descrição do projeto...',
    tags: [
      { icon: SiPython,     name: 'Python',     color: '#3572A5' },
      { icon: SiDjango,     name: 'Django',     color: '#0C4B33' },
      { icon: SiSqlite,     name: 'SQLite',     color: '#003B57' },
      { icon: SiVite,       name: 'Vite',       color: '#646cff' },
      { icon: SiNodedotjs,  name: 'Node.js',    color: '#68a063' },
      { icon: SiReact,      name: 'React',      color: '#61dafb' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
      { icon: SiCss,        name: 'CSS',        color: '#264de4' },
      { icon: SiHtml5,      name: 'HTML',       color: '#e34f26' },
    ],
    images: [
      '/img/projetos/monitoramento_dash.png',
      '/img/projetos/monitoramento_dash2.png',
      '/img/projetos/monitoramento_dataflow.png',
      '/img/projetos/monitoramento_falhas.png',
      '/img/projetos/monitoramento_logs.png',
      '/img/projetos/monitoramento_logs2.png',
      '/img/projetos/monitoramento_workspaces.png',
    ],
    github: null,
    live: null,
  },
]

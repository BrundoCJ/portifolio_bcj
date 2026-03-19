import {
  SiReact, SiNodedotjs, SiTypescript, SiDjango,
  SiVuedotjs, SiVite, SiPython, SiStreamlit,
  SiSqlite, SiHtml5, SiCss,
} from 'react-icons/si'
import { PowerBIIcon, DAXIcon, MIcon } from './biIcons.jsx'

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
    title: 'Formulario para envio de tickets para suporte',
    description: 'Formulário para envio de tickets de suporte.Este projeto foi desenvolvido dentro de uma plataforma de visualização de relatórios e integrado a um sistema de gerenciamento de tarefas. Assim que o formulário é preenchido, uma tarefa é automaticamente criada no backlog da equipe de suporte, contendo todas as informações necessárias para o atendimento ao cliente.O formulário é responsivo, intuitivo e fácil de usar, permitindo que os usuários registrem seus chamados de forma rápida e eficiente.',
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
    title: 'Monitoramento Workspaces',
    description: 'Projeto para monitoramento das atualizações de dataflows e modelos semânticos no Power BI. Permite acompanhar o status das execuções em tempo real, identificar falhas rapidamente e analisar indicadores como taxa de sucesso e desempenho.Os dados são organizados por workspace, cliente e categoria, além de contar com visão histórica e painel de falhas recentes para suporte ágil.',
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
  {
    title: 'Comercial',
    description: 'Dashboard comercial com visão geral de vendas, acompanhamento por vendedor, carteira de clientes e análise de mix de produtos. Desenvolvido para apoiar decisões de equipes comerciais com dados atualizados e organizados.',
    tags: [
      { icon: PowerBIIcon, name: 'Power BI', color: '#F2C811' },
      { icon: DAXIcon,     name: 'DAX',      color: '#F2C811' },
      { icon: MIcon,       name: 'M',        color: '#F2C811' },
    ],
    images: [
      '/img/projetos_bi/comercial_overview.png',
      '/img/projetos_bi/comercial_analise_vendedores.png',
      '/img/projetos_bi/comercial_carteira_clientes.png',
      '/img/projetos_bi/comercial_mix_produtos.png',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Estoque',
    description: 'Painel de controle de estoque com curva ABC para classificação de produtos, acompanhamento de faturamento e visão geral do inventário. Facilita a gestão do estoque e a identificação dos itens mais críticos para o negócio.',
    tags: [
      { icon: PowerBIIcon, name: 'Power BI', color: '#F2C811' },
      { icon: DAXIcon,     name: 'DAX',      color: '#F2C811' },
      { icon: MIcon,       name: 'M',        color: '#F2C811' },
    ],
    images: [
      '/img/projetos_bi/estoque_overview1.png',
      '/img/projetos_bi/estoque_faturamento2.png',
      '/img/projetos_bi/estoque_curva_abc3.png',
      '/img/projetos_bi/estoque_estoque4.png',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Financeiro',
    description: 'Relatório financeiro com controle de contas a pagar e a receber, visão administrativa consolidada e overview da saúde financeira. Pensado para trazer clareza e organização ao acompanhamento do fluxo de caixa.',
    tags: [
      { icon: PowerBIIcon, name: 'Power BI', color: '#F2C811' },
      { icon: DAXIcon,     name: 'DAX',      color: '#F2C811' },
      { icon: MIcon,       name: 'M',        color: '#F2C811' },
    ],
    images: [
      '/img/projetos_bi/financeiro_overview.png',
      '/img/projetos_bi/financeiro_administração.png',
      '/img/projetos_bi/financeiro_contas_pagar.png',
      '/img/projetos_bi/financeiro_contas_receber.png',
    ],
    github: null,
    live: null,
  },
]

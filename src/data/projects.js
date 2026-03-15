export const projectCategories = ['Todos', 'Frontend', 'Dados', 'Full Stack']

export const categoryGradients = {
  Frontend:    'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  Dados:       'linear-gradient(135deg, #8b5cf6, #ec4899)',
  'Full Stack':'linear-gradient(135deg, #10b981, #3b82f6)',
}

export const projects = [
  {
    title: 'Dashboard Analytics',
    description:
      'Dashboard interativo para análise de dados de vendas com filtros dinâmicos e gráficos em tempo real.',
    tags: ['React', 'D3.js', 'Node.js'],
    category: 'Dados',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'E-commerce UI',
    description:
      'Interface completa de loja virtual com carrinho, filtros de produtos e checkout responsivo.',
    tags: ['React', 'CSS Modules', 'Context API'],
    category: 'Frontend',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Sistema de Gestão',
    description:
      'Aplicação full stack para gestão de funcionários com autenticação JWT e relatórios em PDF.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Full Stack',
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Análise de Sentimentos',
    description:
      'Script Python para análise de sentimentos em tweets usando NLTK e visualização com Matplotlib.',
    tags: ['Python', 'NLP', 'Pandas'],
    category: 'Dados',
    github: 'https://github.com',
    live: null,
  },
  {
    title: 'Landing Page SaaS',
    description:
      'Landing page animada de SaaS com foco em conversão, performance e design moderno.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'API REST',
    description:
      'API RESTful para gerenciamento de tarefas com autenticação, paginação e documentação Swagger.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com',
    live: null,
  },
]

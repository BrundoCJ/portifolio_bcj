# Dev Bruno — Portfólio Pessoal

Portfólio pessoal de Bruno, desenvolvedor frontend e analista de dados baseado em Curitiba, Brasil.
Construído com **React + Vite**, animações fluidas via **Framer Motion** e arquitetura orientada a separação de responsabilidades.

---

## Tecnologias Utilizadas

### Frontend
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=flat&logo=cssmodules&logoColor=white)

### Bibliotecas
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat&logo=framer&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-5-e91e63?style=flat&logo=react&logoColor=white)

### Ferramentas & Qualidade
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=flat&logo=eslint&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

### Design & Tipografia
![Google Fonts](https://img.shields.io/badge/Google_Fonts-Poppins_%C2%B7_Berkshire_Swash-4285F4?style=flat&logo=google&logoColor=white)

---

## Stack Resumida

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework UI | React | 19 |
| Build tool | Vite | 8 |
| Animações | Framer Motion | 12 |
| Ícones | React Icons | 5 |
| Estilos | CSS Modules | — |
| Linter | ESLint | 9 |
| Tipografia | Poppins · Berkshire Swash | Google Fonts |

---

## Funcionalidades

- **Navegação inteligente** — header fixo com destaque de seção ativa e scroll suave
- **Typing effect** — rotação animada de roles na seção Hero
- **Animações scroll-triggered** — entradas suaves em todas as seções via `useInView`
- **Filtro de projetos** — portfólio filtrável por categoria com layout animado
- **Formulário de contato** — com feedback de envio em tempo real
- **Totalmente responsivo** — breakpoints para mobile, tablet e desktop
- **Acessível** — ARIA labels, semântica HTML5, `aria-live` para o typing effect

---

## Estrutura do Projeto

```
src/
├── components/          # Componentes de seção (um por pasta com JSX + CSS Module)
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Resume/
│   ├── Portfolio/
│   ├── Pricing/
│   ├── Contact/
│   └── Footer/
├── data/                # Dados estáticos centralizados (fácil de personalizar)
│   ├── navigation.js    # Links da navegação
│   ├── personal.js      # Roles, info pessoal, contato e redes sociais
│   ├── skills.js        # Habilidades técnicas e categorias
│   ├── experience.js    # Histórico de trabalho e formação
│   ├── projects.js      # Projetos do portfólio
│   └── pricing.js       # Planos de serviço
├── hooks/               # Custom hooks reutilizáveis
│   ├── useScrolled.js        # Detecta scroll acima de threshold
│   ├── useActiveSection.js   # Rastreia seção visível na tela
│   └── useTypingEffect.js    # Typewriter animado com ciclo de textos
├── utils/               # Funções utilitárias
│   ├── animations.js    # Variantes Framer Motion compartilhadas
│   └── scrollTo.js      # Scroll suave para seção
├── App.jsx
├── index.css            # Variáveis CSS globais, reset e classes utilitárias
└── main.jsx
```

---

## Como rodar

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
git clone https://github.com/seu-usuario/portifolio-dev-bruno.git
cd portifolio-dev-bruno
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

### Build de produção

```bash
npm run build
npm run preview   # preview local do build
```

---

## Personalização

Todos os dados do portfólio estão centralizados em `src/data/`. Para personalizar:

| O que mudar | Arquivo |
|---|---|
| Links da nav | `src/data/navigation.js` |
| Nome, bio, contato, redes sociais | `src/data/personal.js` |
| Habilidades técnicas | `src/data/skills.js` |
| Experiência e formação | `src/data/experience.js` |
| Projetos | `src/data/projects.js` |
| Planos de preço | `src/data/pricing.js` |

---

## Seções

| Seção | ID | Descrição |
|---|---|---|
| Home | `#home` | Hero com typing effect e foto |
| Sobre | `#sobre` | Perfil e informações pessoais |
| Resumo | `#resumo` | Skills com barras animadas + timeline |
| Portfólio | `#portfolio` | Projetos com filtro por categoria |
| Preços | `#precos` | Planos de serviço freelance |
| Contato | `#contato` | Formulário + informações de contato |

---

## Licença

MIT © Bruno

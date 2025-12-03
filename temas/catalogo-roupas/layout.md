# 🎨 Layout: Catálogo de Roupas / Moda

## 🎨 Paleta de Cores

### Cores Principais
- **Rosa Suave:** `#FFB6C1` (cor principal para destaques)
- **Roxo Elegante:** `#9B59B6` (botões e elementos de ação)
- **Branco Puro:** `#FFFFFF` (fundo principal)
- **Cinza Claro:** `#F5F5F5` (fundo alternativo)
- **Cinza Escuro:** `#333333` (textos principais)

### Cores Secundárias
- **Rosa Claro:** `#FFF0F5` (fundos suaves)
- **Dourado:** `#FFD700` (detalhes premium)

---

## ✍️ Tipografia

### Fonte Principal
- **Nome:** Playfair Display
- **Link:** `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap`
- **Uso:** Títulos e destaques
- **Características:** Elegante, sofisticada, serifada

### Fonte Secundária
- **Nome:** Open Sans
- **Link:** `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap`
- **Uso:** Textos do corpo, descrições
- **Características:** Limpa, legível, moderna

---

## 📐 Estrutura dos Blocos

### 1. Header (Topo Fixo)
- **Altura:** 70px
- **Background:** Rosa suave com gradiente sutil
- **Elementos:**
  - Logo/Nome da loja (esquerda)
  - Menu de navegação (direita): Início, Coleção, Promoções, Contato
- **Estilo:** Minimalista e elegante

### 2. Hero Section (Seção Principal)
- **Altura:** 100vh (altura total da tela)
- **Background:** Imagem de moda de alta qualidade com overlay escuro (30% opacity)
- **Conteúdo:**
  - Título grande: "Sua Moda, Seu Estilo"
  - Subtítulo: "Descubra a coleção perfeita para você"
  - Botão CTA: "Ver Coleção"
- **Alinhamento:** Centralizado

### 3. Seção de Produtos (Cards Grid)
- **Layout:** Grid de 3 colunas (desktop), 2 colunas (tablet), 1 coluna (mobile)
- **Espaçamento:** 30px entre cards
- **Cards:**
  - Imagem do produto (proporção 3:4)
  - Título do produto
  - Descrição curta
  - Botão "Saiba Mais"
- **Estilo:** Cards com sombra suave, hover com elevação

### 4. Seção de Newsletter/Formulário
- **Background:** Rosa claro suave
- **Largura:** Container centralizado (máx. 800px)
- **Elementos:**
  - Título: "Cadastre-se e Receba Novidades"
  - Campos: Nome, E-mail, Telefone (opcional)
  - Checkbox: "Aceito receber promoções"
  - Botão: "Cadastrar"
- **Estilo:** Formulário com bordas arredondadas e sombras sutis

### 5. Footer (Rodapé)
- **Background:** Cinza escuro (#333)
- **Cor do texto:** Branco
- **Layout:** 3 colunas
  - Coluna 1: Sobre a loja
  - Coluna 2: Links úteis (Políticas, FAQ, Envios)
  - Coluna 3: Redes sociais
- **Copyright:** Centralizado na parte inferior

---

## 📏 Tamanhos Aproximados

### Títulos
- **H1 (Hero):** 3.5rem (56px)
- **H2 (Seções):** 2.5rem (40px)
- **H3 (Cards):** 1.5rem (24px)

### Textos
- **Parágrafo normal:** 1rem (16px)
- **Descrições:** 0.95rem (15px)
- **Footer:** 0.9rem (14px)

### Espaçamentos
- **Seções:** padding vertical de 80px
- **Cards:** margin-bottom de 30px
- **Elementos internos:** 15-20px

### Botões
- **Tamanho:** padding de 15px 40px
- **Border-radius:** 25px (arredondado)
- **Fonte:** 1.1rem, peso 600

---

## 🎯 Wireframe Textual

```
┌─────────────────────────────────────────┐
│  HEADER (fixo)                          │
│  [Logo] --------- [Menu Nav] [Busca]    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│           HERO SECTION                  │
│    [Imagem de fundo fashion]            │
│                                         │
│     "Sua Moda, Seu Estilo"              │
│  "Descubra a coleção perfeita"          │
│         [Botão CTA]                     │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     NOSSOS PRODUTOS                     │
│                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐            │
│  │Card │  │Card │  │Card │            │
│  │  1  │  │  2  │  │  3  │            │
│  └─────┘  └─────┘  └─────┘            │
│                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐            │
│  │Card │  │Card │  │Card │            │
│  │  4  │  │  5  │  │  6  │            │
│  └─────┘  └─────┘  └─────┘            │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│   CADASTRE-SE E RECEBA NOVIDADES        │
│                                         │
│    ┌─────────────────────────┐         │
│    │ [Formulário]            │         │
│    │ Nome: ___________       │         │
│    │ Email: __________       │         │
│    │ Telefone: _______       │         │
│    │ [x] Aceito receber      │         │
│    │     [Cadastrar]         │         │
│    └─────────────────────────┘         │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│           FOOTER                        │
│  [Sobre] [Links] [Redes Sociais]       │
│  © 2025 - Todos os direitos reservados  │
└─────────────────────────────────────────┘
```

---

## 💡 Dicas de Implementação

1. **Imagens:** Use fotos de moda de alta qualidade (Unsplash tem ótimas opções)
2. **Hover Effects:** Adicione zoom suave nas imagens dos cards ao passar o mouse
3. **Animação:** Fade-in nos cards quando aparecem no scroll
4. **Responsividade:** Teste bem em mobile, o público de moda usa muito celular
5. **CTA:** Use cores que contrastem para chamar atenção nos botões

---

## 📱 Comportamento Responsivo

### Desktop (> 992px)
- Grid de 3 colunas
- Hero com altura total da viewport
- Menu horizontal completo

### Tablet (768px - 991px)
- Grid de 2 colunas
- Hero com altura de 80vh
- Menu horizontal com ícones menores

### Mobile (< 767px)
- Grid de 1 coluna
- Hero com altura de 60vh
- Menu hamburger colapsável
- Botões e textos maiores para toque fácil

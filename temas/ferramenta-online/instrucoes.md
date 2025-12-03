# 🛠️ Tema: Ferramenta Online (Gerador/Calculadora/Utilitário)

## 📝 Descrição
Site de **ferramenta web útil**. Use para: gerador de senhas, calculadora IMC, conversor, to-do list, timer pomodoro, QR code.

## 🎯 Objetivo
Fornecer uma **ferramenta funcional e intuitiva** com interface limpa e direta.

## 📁 Personalização Rápida

**index.html:**
- Título: "[Nome da Ferramenta] - Ferramenta Online Gratuita"
- Hero: "Gerador de Senhas Seguras" (exemplo)
- Seção: "Outras Ferramentas Úteis"

**Cores (style.css):**
- Azul: `#007BFF`, Verde: `#28A745`, Roxo: `#6F42C1`, Cinza: `#6C757D`

**Fontes:**
- Space Grotesk (tech, moderna)
- Source Sans Pro

## 🖼️ Imagens (8 ferramentas)
hero.jpg (interface clean), gerador-senha.jpg, calc-imc.jpg, conversor-moeda.jpg, pomodoro.jpg, todo-list.jpg, qr-code.jpg, contador.jpg, encurtador.jpg

**Busque:** Unsplash "technology", "app interface", "productivity"

## 📝 Formulário/Interface
**Área principal:** Interface da ferramenta (inputs grandes, botões claros)
**Formulário secundário:** "Sugira uma Ferramenta"

## ✅ CHECKLIST
- [ ] Interface **minimalista** e funcional
- [ ] Botões grandes e destacados
- [ ] Inputs com labels claros
- [ ] Resultado visível e copiável
- [ ] Instruções de uso simples
- [ ] Cards com outras ferramentas
- [ ] Responsivo para mobile

## 💡 Dicas
- **Menos é mais**: interface clean
- Botão principal: grande, cor destacada
- **Feedback visual**: sucesso (verde), erro (vermelho)
- Inclua seção "**Como Usar**" com passos
- Ícones: FontAwesome (lock, calculator, list, etc)
- **Copiar resultado** com um clique

## 🔧 Exemplos de Ferramentas

### Gerador de Senhas
```html
<label>Tamanho</label>
<input type="number" min="6" max="50" value="12">
<input type="checkbox"> Maiúsculas
<input type="checkbox"> Números
<input type="checkbox"> Símbolos
<button>Gerar Senha</button>
<input type="text" id="resultado" readonly>
<button>Copiar</button>
```

### Calculadora IMC
```html
<label>Peso (kg)</label>
<input type="number" id="peso">
<label>Altura (m)</label>
<input type="number" step="0.01" id="altura">
<button>Calcular</button>
<div id="resultado"></div>
```

**Crie ferramentas úteis e intuitivas! 🔧✨**

# 🐾 Tema: Petshop / Serviços para Pets

## 📝 Descrição do Tema
Crie um site para **petshop, clínica veterinária ou serviços para animais de estimação**. Ideal para:
- Petshop completo (produtos + serviços)
- Clínica veterinária
- Hotel para pets
- Serviços de banho e tosa
- Adoção de animais

## 🎯 Objetivo do Site
1. Apresentar serviços e produtos para pets
2. Mostrar cuidado e profissionalismo
3. Permitir agendamento de serviços
4. Transmitir amor pelos animais

## 📁 Arquivos para Editar

### index.html
**Personalize:**
- Linha 6: `<title>Seu Petshop - Nome</title>`
- Linha 24: Nome do petshop
- Linhas 48-50: "Cuidamos do Seu Pet com Amor"
- Linha 57: "Nossos Serviços e Produtos"

### data.json
Já contém 8 serviços/produtos:
- Banho e Tosa
- Rações Premium
- Brinquedos
- Consultas Veterinárias
- Casinhas e Camas
- Coleiras e Guias
- Petiscos Naturais

### style.css
**Cores para personalizar:**
- Laranja: `#FF8C42` (energia, alegria)
- Azul: `#4ECDC4` (confiança)
- Verde: `#A8E6CF` (natureza)

## 🖼️ Imagens Necessárias
1. hero.jpg - Pet feliz (cachorro ou gato)
2. banho-tosa.jpg
3. racao-caes.jpg
4. brinquedos.jpg
5. veterinario.jpg
6. racao-gatos.jpg
7. camas.jpg
8. coleiras.jpg
9. petiscos.jpg

**Busque em:**
- Unsplash: https://unsplash.com/s/photos/pets
- Pexels: https://www.pexels.com/search/dog/
- Pixabay: https://pixabay.com/images/search/cat/

## 📝 Formulário
Personalize para **Agendamento de Serviços:**
```html
<label>Nome do Pet</label>
<input type="text" id="nomePet" required>

<label>Tipo de Animal</label>
<select id="tipo" required>
    <option>Cachorro</option>
    <option>Gato</option>
    <option>Outros</option>
</select>

<label>Serviço Desejado</label>
<select id="servico" required>
    <option>Banho e Tosa</option>
    <option>Consulta Veterinária</option>
    <option>Hotel</option>
</select>

<label>Data Preferencial</label>
<input type="date" id="data" required>

<button>Agendar Serviço</button>
```

## ✨ Animações
- **CSS:** Hover nos cards (já implementado)
- **JS:** Scroll reveal (já implementado)

**Adicione classe `reveal` em:**
```html
<div class="col-md-4 reveal">
    <!-- card de serviço -->
</div>
```

## ✅ CHECKLIST DE ENTREGA

### Estrutura
- [ ] Header com nome do petshop
- [ ] Hero com imagem de pet
- [ ] Mínimo 5 serviços/produtos
- [ ] Formulário de agendamento

### Conteúdo
- [ ] Imagens reais de pets/produtos
- [ ] Textos personalizados
- [ ] Paleta de cores do tema (laranja, azul, verde)

### Funcionalidades
- [ ] 1 animação CSS (hover nos cards)
- [ ] 1 animação JS (scroll reveal)
- [ ] Dados carregados do JSON
- [ ] Bootstrap implementado

### Estilo
- [ ] Fontes do Google Fonts (Fredoka + Nunito)
- [ ] Layout responsivo
- [ ] Aparência amigável e alegre

## 💡 Dicas Específicas
1. Use fotos de pets **felizes e saudáveis**
2. Cores **alegres e vibrantes**
3. Ícones de patinhas são bem-vindos
4. Destaque o **cuidado e carinho** nos textos
5. Mostre **antes e depois** se possível

## 🔗 Links Úteis
- Font Awesome Pets Icons: https://fontawesome.com/search?q=dog&o=r
- Unsplash Pets: https://unsplash.com/s/photos/pet-shop
- Cores Petshop: Laranja (energia), Azul (confiança), Verde (natureza)

**Boa sorte com seu petshop! 🐶🐱**

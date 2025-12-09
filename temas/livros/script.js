// ===========================
// 1. Fetch de Dados JSON
// ===========================

/**
 * Função para carregar os produtos do arquivo data.json
 */
async function carregarProdutos() {
    try {
        const response = await fetch('data.json');
        const produtos = await response.json();
        
        renderizarProdutos(produtos);
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
        document.getElementById('produtos-container').innerHTML = 
            '<p class="text-center">Erro ao carregar os produtos. Verifique se o arquivo data.json existe.</p>';
    }
}

/**
 * Função para renderizar os produtos na página
 */
function renderizarProdutos(produtos) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';
    
    produtos.forEach((produto, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        
        col.innerHTML = `
            <div class="card produto-card reveal" style="animation-delay: ${index * 0.1}s">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${produto.titulo}</h5>
                    <p class="card-text">${produto.descricao}</p>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
    
    // Ativa as animações de revelação após renderizar
    setTimeout(() => {
        ativarAnimacoesScroll();
    }, 100);
}

// ===========================
// 2. Animação JavaScript: Scroll Reveal
// ===========================

/**
 * Função para animar elementos quando aparecem no scroll
 */
function ativarAnimacoesScroll() {
    const elementos = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
}

// ===========================
// 3. Manipulação do Formulário (Contato Petshop)
// ===========================

/**
 * Função para lidar com o envio do formulário de contato
 */
function configurarFormulario() {
    const formulario = document.getElementById('formulario-contato');
    
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Exibe mensagem de sucesso personalizada para o petshop
        alert(`Obrigado, ${nome}! Recebemos sua mensagem.\n\nEntraremos em contato para ajudar você e seu pet! 🐾\n\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`);
        
        // Limpa o formulário
        formulario.reset();
    });
}

// ===========================
// 4. Scroll Suave para Links
// ===========================

/**
 * Adiciona scroll suave aos links de navegação
 */
function configurarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // 70px para compensar o header fixo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================
// 5. Inicialização
// ===========================

/**
 * Função principal que inicializa todas as funcionalidades
 */
document.addEventListener('DOMContentLoaded', function() {
    // Carrega os produtos do JSON (Petshop)
    carregarProdutos();
    
    // Configura o formulário de contato
    configurarFormulario();
    
    // Configura scroll suave
    configurarScrollSuave();
    
    // Ativa animações de scroll em elementos já visíveis
    ativarAnimacoesScroll();
    
    console.log('...');
});

document.getElementById("ProcurarLivro").addEventListener("change", function() {
    const campos = document.getElementById("consultaCampos");
    
    if (this.checked) {
        campos.style.display = "block";  // Mostra os campos
    } else {
        campos.style.display = "none";   // Esconde os campos
    }
});

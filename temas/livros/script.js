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

    // Cria as seções com as categorias
    // 1. Usa `map` para extrair todas as categorias.
    const todasAsCategorias = produtos.map(livro => livro.categoria);

    // 2. Usa o `Set` para obter apenas os valores únicos.
    // 3. Usa o operador spread (`...`) para converter o `Set` de volta em um array.
    const categoriasUnicas = [...new Set(todasAsCategorias)];

    categoriasUnicas.forEach((categoria, index) => {
        const categoriaContainer = document.createElement('div');
        categoriaContainer.className = 'row categoria-container';
        categoriaContainer.id = `categoria-${categoria.toLowerCase().replace(/\s+/g, '-')}`;
        categoriaContainer.innerHTML = `
            <h2 class="section-title text-center mt-5 mb-5">Livros de ${categoria}</h2>
        `;
        container.appendChild(categoriaContainer);
    });
    
    produtos.forEach((produto, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mt-4';
        
        col.innerHTML = `
            <div class="card produto-card reveal" style="animation-delay: ${index * 0.1}s">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${produto.titulo}</h5>
                    <p class="card-text" id="descricao">${produto.descricao}</p>
                </div>
            </div>
        `;

        // Adiciona o card à seção correta com base na categoria
        const categoriaContainer = document.getElementById(`categoria-${produto.categoria.toLowerCase().replace(/\s+/g, '-')}`);
        categoriaContainer.appendChild(col);

        col.addEventListener("click", () => {
            let modalLivro = new bootstrap.Modal(document.getElementById('modalLivro'));
            let modalLivroLabel = document.querySelector('#modalLivro .modal-title');
            let modalLivroBody = document.querySelector('#modalLivro .modal-body');

            modalLivroLabel.textContent = produto.titulo;
            modalLivroBody.innerHTML = `
                <img src="${produto.imagem}" class="img-fluid" alt="${produto.titulo}">
                <p class="pt-3">${produto.descricao}</p>
                <ul class="list-unstyled mt-3">
                    <li class="card-text"><strong>Autor(a):</strong> ${produto["Autor(a)"]}</li>
                    <li class="card-text"><strong>Lançamento:</strong> ${produto.lancamento}</li>
                    <li class="card-text"><strong>Preço:</strong> ${produto.preco}</li>
                </ul>
            `;
            modalLivro.show();
        })
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
        alert(`Obrigado pela sua mensagem, ${nome}!\nIremos analisar sua mensagem e retornar em breve.\n\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`);
        
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

document.getElementById("encomendarLivro").addEventListener("change", function() {
    const campos = document.getElementById("consultaCampos");
    
    if (this.checked) {
        campos.style.display = "block";  // Mostra os campos
    } else {
        campos.style.display = "none";   // Esconde os campos
    }
});

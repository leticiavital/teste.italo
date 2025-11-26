const artigosController = {
    async init() {
        this.setupEventListeners();
        await this.carregarArtigos();
    },

    // 🔧 Eventos (inclui a pesquisa)
    setupEventListeners() {

        // Botão buscar
        document.getElementById('searchBtn').addEventListener('click', () => {
            const termo = document.getElementById('searchInput').value.trim();
            artigosController.pesquisarArtigos(termo);
        });

        // Apertar Enter
        document.getElementById('searchInput').addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const termo = e.target.value.trim();
                artigosController.pesquisarArtigos(termo);
            }
        });

        // Fechar modal
        document.getElementById("closeModal").addEventListener("click", () => {
            document.getElementById("modal").style.display = "none";
        });
    },

    // 📰 Carregar todos os artigos
    async carregarArtigos() {
        const container = document.getElementById('articlesContainer');
        container.innerHTML = '<div class="loading">Carregando artigos...</div>';

        try {
            const artigos = await artigosService.getAllArtigos();
            this.renderizarArtigos(artigos);
        } catch (error) {
            container.innerHTML = `<p class="error">Erro ao carregar artigos.</p>`;
        }
    },

    // 🔍 PESQUISAR ARTIGOS
    async pesquisarArtigos(termo) {
        const container = document.getElementById('articlesContainer');

        if (termo === "") {
            this.carregarArtigos();
            return;
        }

        container.innerHTML = '<div class="loading">Buscando artigos...</div>';

        try {
            const resultados = await artigosService.searchArtigos(termo);

            if (resultados.length === 0) {
                container.innerHTML = `
                    <div class="loading">
                        Nenhum artigo encontrado para "<strong>${termo}</strong>"
                    </div>
                `;
            } else {
                this.renderizarArtigos(resultados);
            }
        } catch (error) {
            console.error(error);
            container.innerHTML = `<p class="error">Erro ao buscar artigos.</p>`;
        }
    },

    // 🧱 Monta os cards
    renderizarArtigos(artigos) {
        const container = document.getElementById('articlesContainer');
        container.innerHTML = "";

        artigos.forEach(artigo => {
            const card = document.createElement("div");
            card.classList.add("article-card");

            card.innerHTML = `
                <h2>${artigo.titulo}</h2>
                <p>${artigo.resumo}</p>
                <button class="btn" data-id="${artigo.id}">Ler mais</button>
            `;

            container.appendChild(card);

            card.querySelector("button").addEventListener("click", () => {
                this.abrirModal(artigo);
            });
        });
    },

    // 🪟 Modal
    abrirModal(artigo) {
        const modal = document.getElementById("modal");
        const content = document.getElementById("modalContent");

        content.innerHTML = `
            <h2>${artigo.titulo}</h2>
            <p><strong>Categoria:</strong> ${artigo.categoria}</p>
            <p><strong>Autor:</strong> ${artigo.autor}</p>
            <p>${artigo.conteudo}</p>
        `;

        modal.style.display = "block";
    }
};

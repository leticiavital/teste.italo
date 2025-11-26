// ============================================
// ARQUIVO: js/services/artigosService.js
// Camada de SERVICES - Simula chamadas à API
// ============================================

/**
 * Classe do serviço de artigos
 */
class ArtigosService {
    constructor() {
        this.artigos = [
            {
                id: 1,
                titulo: "Importância da Hidratação",
                resumo: "Descubra como a água é essencial para o bom funcionamento do corpo humano.",
                conteudo: `
                    <p>A hidratação adequada é fundamental para a manutenção da saúde. O corpo humano é composto por aproximadamente 60% de água, e cada sistema do nosso organismo depende dela para funcionar corretamente.</p>
                    
                    <p><strong>Benefícios da hidratação adequada:</strong></p>
                    <p>• Regula a temperatura corporal<br>
                    • Auxilia na digestão e absorção de nutrientes<br>
                    • Mantém a pele saudável<br>
                    • Elimina toxinas através dos rins<br>
                    • Melhora o desempenho físico e mental</p>
                    
                    <p>A desidratação pode causar fadiga, dores de cabeça, tontura e até problemas renais graves. Recomenda-se beber pelo menos 2 litros de água por dia, mas essa quantidade pode variar de acordo com o peso, atividade física e clima.</p>
                `,
                autor: "Dra. Maria Santos",
                data: "2025-11-20",
                categoria: "Nutrição",
                tempo: "5 min"
            },
            {
                id: 2,
                titulo: "Exercícios Físicos Regulares",
                resumo: "Os benefícios da atividade física para corpo e mente.",
                conteudo: `
                    <p>A prática regular de exercícios físicos é uma das melhores decisões que você pode tomar pela sua saúde. Os benefícios vão muito além da perda de peso e ganho de massa muscular.</p>
                    
                    <p><strong>Principais benefícios:</strong></p>
                    <p>• Fortalece o sistema cardiovascular<br>
                    • Reduz o risco de doenças crônicas<br>
                    • Melhora a saúde mental e reduz o estresse<br>
                    • Aumenta a disposição e energia<br>
                    • Fortalece ossos e músculos</p>
                    
                    <p>A Organização Mundial da Saúde recomenda pelo menos 150 minutos de atividade física moderada por semana para adultos. Isso pode incluir caminhadas, natação, ciclismo ou qualquer atividade que você goste.</p>
                    
                    <p>Lembre-se: é importante consultar um médico antes de iniciar qualquer programa de exercícios, especialmente se você tem condições de saúde pré-existentes.</p>
                `,
                autor: "Dr. Carlos Oliveira",
                data: "2025-11-18",
                categoria: "Atividade Física",
                tempo: "6 min"
            },
            {
                id: 3,
                titulo: "Alimentação Balanceada",
                resumo: "Como uma dieta equilibrada impacta sua qualidade de vida.",
                conteudo: `
                    <p>Uma alimentação balanceada é a base para uma vida saudável. O que colocamos no prato todos os dias tem impacto direto em nossa energia, imunidade e bem-estar geral.</p>
                    
                    <p><strong>Princípios de uma alimentação saudável:</strong></p>
                    <p>• Variedade de alimentos naturais<br>
                    • Consumo adequado de frutas e vegetais<br>
                    • Proteínas de qualidade<br>
                    • Carboidratos integrais<br>
                    • Gorduras saudáveis</p>
                    
                    <p>Evite alimentos ultraprocessados, ricos em açúcar, sódio e gorduras trans. Prefira alimentos in natura ou minimamente processados. Planeje suas refeições e mantenha horários regulares.</p>
                    
                    <p>Uma boa alimentação previne doenças como diabetes, hipertensão e obesidade, além de melhorar a disposição e concentração no dia a dia.</p>
                `,
                autor: "Dra. Ana Paula Silva",
                data: "2025-11-15",
                categoria: "Nutrição",
                tempo: "7 min"
            },
            {
                id: 4,
                titulo: "Qualidade do Sono",
                resumo: "A importância de uma boa noite de sono para a saúde.",
                conteudo: `
                    <p>O sono de qualidade é essencial para a recuperação física e mental. Durante o sono, o corpo realiza processos vitais de reparação celular, consolidação de memória e regulação hormonal.</p>
                    
                    <p><strong>Benefícios de dormir bem:</strong></p>
                    <p>• Fortalece o sistema imunológico<br>
                    • Melhora a memória e concentração<br>
                    • Regula o humor e reduz ansiedade<br>
                    • Auxilia no controle do peso<br>
                    • Previne doenças cardiovasculares</p>
                    
                    <p><strong>Dicas para melhorar a qualidade do sono:</strong></p>
                    <p>• Mantenha horários regulares<br>
                    • Evite telas 1 hora antes de dormir<br>
                    • Crie um ambiente escuro e silencioso<br>
                    • Evite cafeína à noite<br>
                    • Pratique relaxamento</p>
                    
                    <p>Adultos devem dormir entre 7-9 horas por noite. A privação crônica de sono está associada a diversos problemas de saúde.</p>
                `,
                autor: "Dr. Roberto Mendes",
                data: "2025-11-12",
                categoria: "Bem-estar",
                tempo: "5 min"
            }
        ];
    }

    /**
     * Simula delay de requisição HTTP
     * @param {number} ms - Milissegundos de delay
     * @returns {Promise<void>}
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Busca todos os artigos
     * @returns {Promise<Array>}
     */
    async getAllArtigos() {
        await this.delay(500); // Simula latência da API
        return [...this.artigos]; // Retorna cópia do array
    }

    /**
     * Busca artigo por ID
     * @param {number} id - ID do artigo
     * @returns {Promise<Object|null>}
     */
    async getArtigoById(id) {
        await this.delay(300); // Simula latência da API
        const artigo = this.artigos.find(a => a.id === id);
        return artigo || null;
    }

    /**
     * Busca artigos por termo de pesquisa
     * @param {string} termo - Termo de busca
     * @returns {Promise<Array>}
     */
    async searchArtigos(termo) {
        await this.delay(400); // Simula latência da API
        const termoLower = termo.toLowerCase();
        
        return this.artigos.filter(artigo => 
            artigo.titulo.toLowerCase().includes(termoLower) ||
            artigo.resumo.toLowerCase().includes(termoLower) ||
            artigo.categoria.toLowerCase().includes(termoLower) ||
            artigo.autor.toLowerCase().includes(termoLower)
        );
    }
}

// Exporta instância do serviço (Singleton)
const artigosService = new ArtigosService();

// Disponibiliza globalmente
if (typeof window !== 'undefined') {
    window.artigosService = artigosService;
}



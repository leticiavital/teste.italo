
document.addEventListener('DOMContentLoaded', () => {
    console.log('InfoClin - Sistema iniciado');
    
    // Verifica se o service está disponível
    if (typeof artigosService === 'undefined') {
        console.error('ArtigosService não foi carregado!');
        return;
    }
    
    // Verifica se o controller está disponível
    if (typeof artigosController === 'undefined') {
        console.error('ArtigosController não foi carregado!');
        return;
    }
    
    // Inicializa o controller principal
    artigosController.init();
    
    console.log('Aplicação carregada com sucesso!');
});

/**
 * Tratamento de erros globais
 */
window.addEventListener('error', (event) => {
    console.error('Erro na aplicação:', event.error);
});


document.addEventListener('DOMContentLoaded', function() {
    // Atualiza automaticamente o ano no copyright
    atualizarCopyright();
    
    // Configura o botão de voltar ao topo
    configurarBotaoTopo();
    
    // Contador de visitas
    contadorVisitas();
});

// Atualiza o ano do copyright automaticamente
function atualizarCopyright() {
    const copyrightElement = document.querySelector('footer p:first-child');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace('2024', currentYear);
    }
}

// Configura o botão de voltar ao topo
function configurarBotaoTopo() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Contador de visitas simples
function contadorVisitas() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    const visitCounter = document.createElement('p');
    visitCounter.textContent = `Esta página foi visitada ${visitCount} vezes`;
    visitCounter.style.marginTop = '10px';
    visitCounter.style.fontSize = '0.9em';
    
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
        footerContent.appendChild(visitCounter);
    }
}

// Função adicional: Formulário de contato (para implementação futura)
function validarFormularioContato() {
    // Esta função pode ser usada quando você adicionar um formulário de contato
    console.log('Função de validação de formulário pronta para implementação');
}
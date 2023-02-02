export default function initAnimacaoScroll(){
    const ativoClass = 'ativo';
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length){
    
    
    const windowMetade = window.innerHeight * 0.3;
    function animaScroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible){
                section.classList.add(ativoClass);
            } else if(section.classList.contains('ativo')){
                section.classList.remove(ativoClass)
            }
        })
    }
    
    animaScroll();
    
    window.addEventListener('scroll', animaScroll);
    }
}
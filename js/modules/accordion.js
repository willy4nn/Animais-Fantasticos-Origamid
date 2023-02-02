export default function initAccordion(){
    const ativoClass = 'ativo';
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    function activeAccordion(){
        this.classList.toggle(ativoClass);
        this.nextElementSibling.classList.toggle(ativoClass);
    };

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    })
    }
}

export default function initTabNav(){
    const ativoClass = 'ativo';
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add(ativoClass);
        function activeTab(index){
            tabContent.forEach((section) => section.classList.remove(ativoClass));
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add(ativoClass, direcao);
        };
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();
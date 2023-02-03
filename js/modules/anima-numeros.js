export default class AnimaNumeros {
  constructor(numeros, obesrveTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.obesrveTarget = document.querySelector(obesrveTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }
  // Recebe um elemento do dom, com número em seu texto, incrementa a partir de 0 até o número final

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  // ativa incrementar número para cada número selecionado do dom

  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }
  // função que ocorre quando a mutação ocorreu

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  // adiciona o mutationobserver para verificar quando
  // a classe ativo é adicionado ao elemento target

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.obesrveTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.obesrveTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}

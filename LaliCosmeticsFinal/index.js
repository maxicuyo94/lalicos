class LinkMenu {
  constructor(label, url) {
    this.label = label;
    this.url = url;
  }

  render() {
    return `<a href="${this.url}">${this.label}</a>`;
  }


}

const menuLinks = [
  new LinkMenu('Maquillajes Realizados', '../page/maquillajesrealizados.html'),
  new LinkMenu('Contacto', '../page/contacto.html'),
  new LinkMenu('Productos Eléctricos', '../page/productoselectricos.html')
]
const mainLinksList = document.getElementById('mainLinksList');

menuLinks.forEach(link => {
  mainLinksList.innerHTML += `<li>${link.render()}</li>`;
})

const footerLinks = document.getElementById('footerLinks');

footerLinks.addEventListener('click', (e) => {
  e.preventDefault();
  footerLinks.innerText = 'Gracias por tu consulta, te responderemos a la brevedad';
})


const darkMode = document.getElementById('darkMode');
const body = document.body;

darkMode.addEventListener('click', () => {
  body.style.backgroundColor = 'black';
})



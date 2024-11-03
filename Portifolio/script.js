// Função para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


let trilho = document.getElementById('trilho')
trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    document.body.classList.toggle('dark');
    document.querySelector('.header').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
} )
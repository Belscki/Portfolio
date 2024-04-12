
const Navegar = document.querySelector(".Navegar");
const PaginaInicial = document.querySelector(".PaginaInicial");
const Apresentacao = document.querySelector(".Apresentacao");


Navegar.addEventListener('click', ()=>{
    PaginaInicial.classList.toggle('active');
    Navegar.classList.toggle('active');
})


Navegar.addEventListener('click', ()=>{
    Apresentacao.classList.toggle('active');
})


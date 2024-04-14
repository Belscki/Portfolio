
const Navegar = document.querySelector(".Navegar");
const PaginaInicial = document.querySelector(".PaginaInicial");
const Apresentacao = document.querySelector(".Apresentacao");
const Conhecimento = document.querySelector(".Conhecimento");
const NavegarMais = document.querySelector(".NavegarMais");
const NavegarMaisMais = document.querySelector(".NavegarMaisMais");
const Projetos = document.querySelector(".Projetos");
const Atracar = document.querySelector(".Atracar");
const Contatos = document.querySelector(".Contatos");
const NavegarNovamente = document.querySelector(".NavegarNovamente");

Navegar.addEventListener('click', ()=>{
    PaginaInicial.classList.toggle('active');
    Navegar.classList.toggle('active');
})
Navegar.addEventListener('click', ()=>{
    Apresentacao.classList.toggle('active');
})
NavegarMais.addEventListener('click', ()=>{
    Conhecimento.classList.toggle("active");
    Apresentacao.classList.toggle("active");
}) 
NavegarMaisMais.addEventListener('click', ()=>{
    Conhecimento.classList.toggle("active");
    Projetos.classList.toggle("active");
})

Atracar.addEventListener('click', () =>{
    Projetos.classList.toggle("active");
    Contatos.classList.toggle("active");
})

NavegarNovamente.addEventListener('click', ()=>{
    Contatos.classList.toggle("active");
    PaginaInicial.classList.toggle("active");
    Navegar.classList.toggle("active");
})



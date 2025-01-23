var app = angular.module('App', []);

app.controller('projetoController', function($scope){
    $scope.projetos = [
        { nome: "Projeto 1" , descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"},
        { nome: "Projeto 2", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"},
        { nome: "Projeto 3", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"},
        { nome: "Projeto 4", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"},
        { nome: "Projeto 5", descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, veniam perferendis, nulla fugit neque soluta saepe enim dolores placeat quisquam cum ut adipisci reprehenderit eius? Blanditiis qui non cupiditate vero!", projLink: "Link"}
    ];
})
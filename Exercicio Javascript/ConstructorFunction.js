// criar um objeto postagem
// titulo, mensagem, autor, visualizacoes,comentarios,estaaovivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualisacoes = 0,
        this.comentarios = [],
        this.estaAoVivo = false
}

let postagem = new Postagem("a", "b", "c",);
console.log(postagem);

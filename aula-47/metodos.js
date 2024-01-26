let pessoa = {
    nome: "Allan",
    idade: 20,
    dizerOla() { //metodo
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizerOla()
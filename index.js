var nome = "Biance"
var idade = 17
var pessoa = {
    nome: "Biance",
    idade: 18, 
    brasileira: true,
    altura: 1.65, 

}

console.log("hello world " + nome)

if (idade >= 18){

    console.log(`${pessoa.nome} é maior de idade porque tem ${idade} anos` )
} else {
    console.log(`${nome} não é maior de idade porque tem ${idade} anos`);
}
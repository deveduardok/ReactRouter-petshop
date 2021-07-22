import axios from 'axios';

//3.2 Primeiro vamos importar o axios
//abaixo vamos abrir a conexao com a API e passaremos a url base da api

export const api= axios.create({
    baseURL:'http://localhost:5000'
})
//vou criar outra funcao busca, arrow function. E lá dentro vou usar a api que criamos!
//get eh pra pegar os dados
//ESTAMOS FAZENDO UMA BUSCA GENERICA, deixaremos + especif qd usarmos dentro de um compon
//teremos uma funcao setDado
//Lidamos com servidor, como a resposta pode vir na hr ou pode demorar um pouco, 
//sao dados assincronos, entao vou colocar o async e await(esperar a resp da api)
//Pronto! fizemos a conexao com a api , Agora vamos criar um compon que vai usar a funcao que criamos!
//Vamos criar o ListaPost.jsx dentro do 'components '
//3.3 temos que passar por parametr a url e a fcao setDados

export const busca = async(url, setDado) => {
    const reposta= await api.get(url)
    setDado(reposta.data)
}
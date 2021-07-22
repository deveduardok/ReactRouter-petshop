import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";

//3.2 componente react sempre tem que importar react
//Já criamos conexao com api e agr estamos criando o compon que vai listar os posts da api
//cria o componente, arrow function,
//vou fazer uma section e uma class(estilo), Aq vou criar como os posts serao exibidos
//Já sabemos que vamos usar a API aqui para fazer as chamadas

//3.3 vamos indicar para o REACT qual o estado inicial da nossa aplicação,
//PARA ISSO VAMOS USAR UM HOOK CHAMADO >> USE STATE, posts(estado inicial) e setPosts(fcao q altera o estado inicial)
//dentro do usestate passamos um array vazio, que é o estado inicial.
//**Preciso importar o usestate.
//Vamos pegar os posts e iterar sobre eles, para pegar cada uma das infos(titulo, categoria, descr,..) p/ montar um card
//coloco {chaves} pra entrar no JS, usando map, para cada post vou criar um card, vou usar o LInk do router dom
//embaixo do link será um article, uma chave para identif cada post como unico,... montamos o card para exibir os dados
//***faremos a chamada da api por meio da 'BUSCA', vou usar ele com useEffect(hook)
//USEEFFECT serve p/ ñ ficar atualizando toda hora o estado da aplicac, ñ esquecer do fim [] array de dependencia
//toda vez q alterarmos o estado da aplic chamamos o busca! vai na url e altera o estado.
//OBSERVANDO, VEMOS QUE SETDADO DA API É O SETPOSTS AQUI
//Colocaremos o ListaPost na home para aparecer na tela!

//4.1 vou colocar o 'to' no LINK>> envia para um id especif dos posts, 
//redirecionamos a rota para esse endereço(../posts/x) apos o clique no cartao x


const ListaPost = ( { url } ) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      busca(url, setPosts)
  }, [url])
 
  return (
    <section className="posts container">
      {posts.map((post) => (
      <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`}>
          <article key={post.id}>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};
export default ListaPost;

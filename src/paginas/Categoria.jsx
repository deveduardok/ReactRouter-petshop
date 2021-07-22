import React, { useEffect, useState } from "react";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import SubCategoria from "../paginas/SubCategoria";
import { Route, useParams, useRouteMatch, Link, Switch } from "react-router-dom";
import { busca } from "../api/api";

const Categoria = () => {
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;

//1º quero exibir a listagem dos posts, independ se cliquei no botao verm ou azul,
//quero que os dois continuem ali renderizados. Entao vou importar o compon LIstaCategorias (compon a gnt abre e fecha tag)
//faço import do compon tb, assim com esse compon, os dois botoes estarão lá. Vou no App.jsx e coloca a rota Categoria lá
//Agora vou ter que exibir os posts relacionado a categoria(botao) escolhido, seria um IF, mas o ROUTE já faz isso p/ nós
//Usarei o LIstaPost com uma query, para selecionar os posts que quero ( da categoria certa)
//Na url>> falo p/ ele ir em post, categoria, mostrar os posts especif daquela categoria
//Como saber qual eh a categ? Vamos usar o HOOK, **useParams!! Ele pega o id e fala qual rota estou. Se estou falando de Rota, coloco a tag Route
// 'exact' pra evitar o comport padrao e o path
//Outro HOOK q iremos usar: 'useRouteMatch', será responsavel por mostrar se estou em 'bem-estar' ou 'comport..'

//5.2 o estado inicial de qd clicamos no botao da subcat, por eqt eh vazio>> crio **useState..subcat.. array vazio
//teremos tb que pegar na API p/ pegar os posts da subcateg,
//COMO usaremos CHAMADA DE API, C/ ATUALIZACAO DE COMPON, chamaremos dentro do **useEffect!!
//faremos a busca pela rota da categoria especifica!! Vou passar uma fcao anonima q vai exec o setSubCategorias pq
//precisamos passar como parametro 'categoria' dentro da fcao anonima, e setSUbCat p/ poder atualizar as subcateg, acessando as categorias

//5.3 tudo q esta dentro da tag ul colocarei {} pq será JS, faremos um mapa das subcat.
//Usaremos um MAP, pra cada subcateg uma arrow funct e colocaremos toda li lá dentro
//Abaixo da li, faremos um Link, que me enviara p/ alguma rota, vai me mandar p/ categ e depois p/ subcategoria,
//url = é o caminho ate a categ, entre os links pegara o nome da subcateg. Vou colocar a 'url' no useRouteMatch, junto com o path.
//VAMOS CRIAR MAIS UMA ROTA, PARA RENDERIZAR O COMPON DA SUBCATEG, passarei o path
//':subcat' deixaremos a subcat dinamica, o useParams que vai falar se estou em higiene ou saude
//VOU colocar um SWITCH para qd achar a rota, parar e ñ ficar procurando

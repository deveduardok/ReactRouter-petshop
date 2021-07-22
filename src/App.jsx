import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from './paginas/Pagina404'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'
import Cabecalho from './components/Cabecalho'



function App() {
  //1.3 importo o Browser e nomeio pra ficar menor, e pego o route tb
  //pra montar a rota e colocar o caminho
  //1.4 para solucionar o probl de mostrar os dois no /sobre, eu coloco o exact path!
  //vamos usar um compon chamado SWITCH, evita que ele use um comport padrao de tentar buscar rotas parecidas
  //2.1 importando a pag404, agr podemos usar aqui dentro das rotas, em volta de uma Route e no path nao coloco nada,
  //assim td vez que nao cair numa rota exata as 2 citadas, ele vai na pag404
  //2.3 vou importar o cabecalho e quero que ele esteja em todas as telas da aplic,
  //Para isso colocarei o compon Cabecalho antes do SWITCH, assim ele renderiza em todas as rotas

//4.1 vou criar uma rota para o Post, tenho q colocar o id clicado na rota. 
//**VOU USAR UM HOOK do react-router-dom, chamado USEPARAMS (está no Post.jsx)
//**este vai fazer ligacao entre o parametro 'id' do Post c/ 'id' da url
//Coloco o path com '/posts/:id', se fizesse sem os ':' seria estático
//vou importar o useParams
//5.1 vou criar uma rota para pag categoria, deixamos ':id'(p/ ser dinamico)
  return (
    <Router>
      <Cabecalho/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria/:id">
          <Categoria />
 
import React, { useState } from "react";
import { busca } from "../api/api";
import { useEffect } from "react";
import "../assets/css/blog.css";
import { Link } from "react-router-dom";

//criar o componente, ele vai ser bem parecido com LISTA POST
//vamos setar o estado incial com o useState, setCategoria vai renderizar o estado, e array vazio.
//precisamos comunicar com API, pedir alguma coisa, importo o 'busca'
//Usaremos useEffect, passaremos a busca nele, enviando p/ rota '/categorias' e depois usa o SET p/atualizar estado
//vamos importar usestate, useeffect e o arq css para o estilo desse compon, q vou contruir no RETURN

//Dentro da <ul> Iremos fazer iteracao na tela para exibir os botoes: vermelho e azul
//Com chaves pq é JS no jsx, faremos um mapa para mapear na tela
//para cada categoria, faremos um LINK, ***NAO ESQUECA da CRASEE!!
//dentro da categoria teremos o nome dela {categoria.nome}
//La na HOme.jsx, chamamos a ListaPost, vamos chamar a ListaCategorias tb
//5.1 Coloquei uma barra na frente do LINK to{`/categ..} >> pq sem o '/' ele entende que add rota(url),
// com a '/' na frente ele navega pra ele sem Add nada!! 

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias`, setCategorias);
  }, []);

  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => (
        <Link to={`/categoria/${categoria.id}`}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
          >
            {categoria.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ListaCategorias;

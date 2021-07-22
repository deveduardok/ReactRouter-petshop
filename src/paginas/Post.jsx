import React, { useEffect, useState } from 'react'
import {busca} from '../api/api'
import '../assets/css/post.css'
import {useParams, useHistory} from 'react-router-dom'

//4.1 vamos criar o componente Post, c/ arrow function e return para renderizar na tela 
//colocaremos o export default pq vamos usar esse compon em outros lugares
//o estado inicial(qd clica) eh vazio, vamos usar useState,que na igualdade é um obj vazio 
//vamos usar tb o useEffect pq vamos usar a req da API novamente, faremos um get na API e pegar o id do post especif
//dentro do busca vai mandar ele pro /post/id e o setPost atualiza o estado, '[id]'eh p/ atualizar o componente toda vez que alterar o id
  //**VOU USAR UM HOOK do react-router-dom, chamado USEPARAMS
  //**ele vai fazer ligacao entre o parametro 'id' do Post c/ 'id' da url
  //vou importar o useParams, cria lo em cima do useState, no App.jsx colocamos ':id' >> ligacao da busca, renderiza o id do post
//4.2 se a promise devolver a resp, se a resp é ok, ele mostra o body, mas aqui ñ trata o erro!
//podemos pegar a devolutiva com o CATCH, dentro dele passamos uma arrow func q exec algo se o id eh invalido!
//Para fazer isso usaremos outro hook do react-router-dom>> **USEHISTORY(dá acesso ao historico de naveg)
//vou criar um LET pro history e vou chama lo  dentro do CATCH, usarei o metodo push com o history
//OU SEJA, CASO ELE BATE EM UM ID Q NAO CONHEÇA, ELE VAI PRA ROTA 404(PAG Ñ EXISTE)
const Post = () => {

let history = useHistory()    

const {id} = useParams()

const [post, setPost] = useState({})

useEffect(() => {
    busca(`/posts/${id}`, setPost)
    .catch(()=>{
        history.push('/404')

    })

}, [id])

    return (
        <main className='container flex flex--centro'>
            <article className='cartao post'>
                <h2 className='cartao__titulo'>{post.title}</h2>
                <p className='carta__texto'>{post.body}</p>

            </article>
        </main>

    )
}

export default Post
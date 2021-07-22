import React from 'react'
import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'


//2.1 vou criar um componente, com uma arrowfunction que retornará algo( no caso é a propria pag)
//vou usar o 'export default' por ultimo pq vou usar essa pag em outros arqs do meu proj, assim fica export padrao para o proj td
//criarei uma img e um paragrafo para a pag de erro, importarei a img tb
//importarei o css que vamos stilizar a pag
//usaremos sempre className no react p/ estilos, pq class eh uma palavra reservada
//lá no App.jsx vou importar a pag404 

const Pagina404 = () =>{
    return(
        <main className='container flex flex--centro flex--coluna'>
            <img className='doguito-imagem' src={imagem} alt='' />
            <p className='naoencontrado-texto'>
                Ops, essa página não existe!
            </p>


        </main>


    )
} 

export default Pagina404
import React from "react";
import {Link} from 'react-router-dom';
import imagem from '../assets/img/doguito.svg'
import '../assets/css/componentes/cabecalho.css'

//2.3 vou criar agr o componente, arrow function
//criarei tda parte do html e o estilo dentro do return...
// terei uma ancora <a> com um href mandando pro barra ( é o home)
//depois de montar todo html, vamos no App.jsx e importar o Cabecalho
//3.1 vou utlizar  um componente do react router, chamado LINK. Vou apagar o ‘a’ 
//e colocar o ‘Link’ no navbar que se refere ao ‘Sobre’!! E invés de ‘href’ será ‘to’.
//**Não esquecer de importar o 'Link'
//Este 'link' no SOBRE fez com q a pag ñ recarregasse mas mudou o conteudo, vamos trocar todas as ancoras 'a' por 'link'
//Continua com # pq nao vamos mandar para nenhum lugar por enqt

const Cabecalho = () =>{

    return(
        <header className='cabecalho container'>
            <div className='menu-hamburguer'>
                <span className='menu-hamburguer__icone'>

                </span>

            </div>
            <div className='cabecalho-container'>
                <Link to='/' className='flex flex--centro'>
                    <img className='cabecalho__logo' src={imagem} alt='logo doguito'/>
                    <h1 className='cabecalho__titulo'>PetShop</h1>
                </Link>
            </div>

            <nav className='menu-cabecalho'>
                <ul className='menu-itens'>
                    <li><Link to ='#' className='menu-item menu-item--entrar'>Entrar</Link></li>
                    <li><Link to='#' className='menu-item'>Produtos</Link></li>
                    <li><Link to='/' className='menu-item'>Blog</Link></li>
                    <li><Link to='/sobre' className='menu-item'>Sobre</Link></li>

                </ul>
                
            </nav>
            <div className='menu-cabecalho-background'></div>

        </header>
    )

}

//usamos export no fim, para podermos usar o Cbacalho em outros arqs

export default Cabecalho;
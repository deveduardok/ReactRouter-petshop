import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
        </div>
        <ListaCategorias />
        <ListaPost url={'/posts'} />

    </main>
  )
}

export default Home

//3.3 vamos colocar o ListaPost que é o nosso componente, e passaremos a nossa url
//importaremos a LIstaPOst
//4.3 Colocaremos o ListaCategorias aqui
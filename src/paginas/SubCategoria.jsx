import React from 'react'
import { useParams } from 'react-router'
import ListaPost from '../components/ListaPost'

//5.2 vou criar o compon, arrowfunction, export default.
//QUERO Q QD RENDERIZE ESSE COMPON, ELE EXIBA A LISTA DE POSTS DQLA SUBCATEGORIA
// Nessa consulta(query string), ele vai em /post, vai em subcategoria para buscar os posts especif desta subcat
//Usaremos a msm estrateg do Categoria.jsx , p/saber ql 'id' da categ, usando useParams
//faremos const, retorna um obj da propr subcategoria e useParams
//Criarei um useState p/ subcategoria no Categoris.jsx

const SubCategoria= () =>{

    const {subcategoria} = useParams()
    return(
        <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
    )

}
export default SubCategoria
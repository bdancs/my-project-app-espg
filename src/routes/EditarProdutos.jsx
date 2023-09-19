import React from 'react'
import { useParams } from 'react-router-dom';

export default function EditarProdutos() {

  //Recuperando o parêmetro ID com o HOOK useParams();

  const {id} = useParams();

  document.title = "EDITAR PRODUTOS" + id;

  return (
    <div>Editar Produtos</div>
  )
}
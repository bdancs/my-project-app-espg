import { useEffect, useState } from "react";
import { ListaProdutosExterna } from "../components/ListaProdutosExterna";

export default function Produtos() {

  document.title = "Lista de Produtos";

  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

  //Estrutura que recebe a lista de produtos externa e repassa para uma lista local.
  useEffect(()=>{
    setListaProdutosLocal(ListaProdutosExterna);
  },[]);

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
            </tr>
          </thead>

          <tbody>

          </tbody>

          <tfoot>
            <tr>
              <td colSpan={4}>PRODUTOS INFORMÁTICOS - QTD = </td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  )
}

      // <div>
      //   <button onClick={()=>setCounter(counter + 1)}>COUNTER - {counter}</button>
      // </div>

      // <div>
      //   <button onClick={()=>setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
      // </div>

  // //Estrutura de declaração do useState.
  // const[counter,setCounter] = useState(0);

  // //Estrutura de declaração do useEffect que sempre executa.
  // useEffect(()=>{
  //   console.log("Este useEffect renderiza sempre que ocorrer uma atualização neste componente ou em um elemento filho.");
  // });

  // //Estrutura de declaração do useEffect que executa uma única vez.
  // useEffect(()=>{
  //   console.log("Este useEffect renderiza apenas uma vez no carregamento do componente.");
  // },[]);

  // //Estrutura de declaração do useState.
  // const[counter2,setCounter2] = useState(0);

  // //Estrutura de declaração do useEffect que executa sempre baseado em um determinado elemento. Este elemento pode der:
  // //Uma constante, um componente, um objeto e ou uma variável. Que deve ser monitorados no arrayn de dependências. [ ]
  // useEffect(()=>{
  //   console.log("Este useEffect renderiza apenas quando o objeto monitorado sofre atualização.");
  // },[counter2]);

  // const handUseState = ()=>{
  //   setCounter(1)
  // }
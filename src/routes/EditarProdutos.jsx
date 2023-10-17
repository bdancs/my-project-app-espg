import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditarProdutos() {

  //Recuperando o parêmetro ID com o HOOK useParams();
  document.title = "EDITAR PRODUTOS";

  const {id} = useParams();

  const [produto, setProduto] = useState({
    id:id,
    nome:'',
    desc:'',
    preco:''
  })

  //http://localhost:5000/produtos

  useEffect(()=>{

    fetch(`http://localhost:5000/produtos/${id}`)
      .then((response)=> response.json())
      .then((response)=> setProduto(response))
      .catch(error=> console.log(error))

  }, [id])

//   const handleChange = (e)=>{

//     const {name,value} = e.target;
//   setProduto({[name]:value});

// }

  return (
    <div>
        <h1>Editar Produtos</h1>

        <div>
          <form>
            <fieldset>
              <legend>Produto Selecionado</legend>

              <div>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto" value={produto.nome} onChange={(e)=> setProduto(e.target.value)}/>
              </div>

              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto" value={produto.desc} onChange={(e)=> setProduto(e.target.value)}/>
              </div>

              <div>
                <label htmlFor="idPreco">Preço</label>
                <input type="number" name="preco" id="idPreco" placeholder="Digite o preço do produto" value={produto.preco} onChange={(e)=> setProduto(e.target.value)}/>
              </div>

              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>
        </div>

    </div>
  )
}
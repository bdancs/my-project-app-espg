import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarProdutos() {

  //Recuperando o parêmetro ID com o HOOK useParams();
  document.title = "EDITAR PRODUTOS";

  const {id} = useParams();

  const navigate = useNavigate();

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

  const handleChange = (e)=>{

    //Destructuring
    const {name,value} = e.target;

    //Preencher o useState com a função set... Utilizando o operador SPREAD...
    setProduto({...produto,[name]:value});

  }

  //Função para fazer a alterações dos dados na base de dados
  const handleSubmit = (e)=>{

    //O 'preventDefault' previne de recarregar
    e.preventDefault();

    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      //No body vai o produto porque é o que a gente quer editar
      //O "JSON.stringify" é para transformar em texto
      body: JSON.stringify(produto)

    })

    .then(response => console.log("STATUS DA REQUISIÃO: " + response.status))
    .catch(error => console.log(error))

    //Redirect
    navigate("/produtos");

  }

  return (
    <div>
        <h1>Editar Produtos</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Produto Selecionado</legend>

              <div>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto" value={produto.nome} onChange={handleChange}/>
              </div>

              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto" value={produto.desc} onChange={handleChange}/>
              </div>

              <div>
                <label htmlFor="idPreco">Preço</label>
                <input type="number" name="preco" id="idPreco" placeholder="Digite o preço do produto" value={produto.preco} onChange={handleChange}/>
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
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from "./Cabecalho.module.css";
import "./Cabecalho.scss";
import { useEffect, useState } from 'react';

export default function Cabecalho() {

  const rotaAtual = useLocation();

  //Criando uma constante para armazenar o sessionStorage
  const userLogado = JSON.parse(sessionStorage.getItem("user-obj"));
  const [usuario] = useState(userLogado);

  const handleLogout = ()=>{
    sessionStorage.removeItem("token-user")
    sessionStorage.removeItem("user-obj")

    window.location = "/login";
  }

  //Esse if está dando a condição de que se o token não existe, a pessoa não vê o cabeçalho
  if (sessionStorage.getItem("token-user")) {
    return (
      <>
        <header className={styles.cabecalho}>

          <div className="usuario">
            <p>Olá, {usuario.name}!</p>
            <p>{usuario.email}</p>
          </div>

          <img src="/img/produtos.png" alt="estrelas saindo de uma caixa" />
          {/* Crie uma lista com 5 links para as nossas rotas:
          OBS: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              {/* No 'Link to=""', entre as aspas vai estar o path para a página */}
              <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>HOME</Link></li>
              <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : "" } onClick={handleLogout}>LOGOUT</Link></li>
              <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>PRODUTOS</Link></li>
            </ul>
          </nav>
        </header>
      </>
    )
  } else {
      return (
        <>
          <header className={styles.cabecalho}>
            
            <img src="/img/produtos.png" alt="Mãos segurando caixas." /> 
  
            {/* Crie uma lista com 5 links para as nossas rotas:
            Obs: Utilize o componente Link do router-dom */}
  
            <nav>
              <ul>
                <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : "" }>HOME</Link></li>
                <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : "" }>LOGIN</Link></li>
              </ul>
            </nav>
  
          </header> 
        </>
      )
    }
}

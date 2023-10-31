import { Link, useLocation } from 'react-router-dom';
import styles from "./Cabecalho.module.css";
import "./Cabecalho.scss";

export default function Cabecalho() {

  const rotaAtual = useLocation();

  return (
    <>
        <header className={styles.cabecalho}>
          <img src="/img/produtos.png" alt="estrelas saindo de uma caixa" />
          {/* Crie uma lista com 5 links para as nossas rotas:
          OBS: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              {/* No 'Link to=""', entre as aspas vai estar o path para a página */}
              <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>HOME</Link></li>
              <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>LOGIN</Link></li>
              <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>PRODUTOS</Link></li>
            </ul>
          </nav>
        </header>
    </>
  )
}

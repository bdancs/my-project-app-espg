import { Link } from 'react-router-dom';
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <>
        <header className={styles.cabecalho}>
          <img src="/img/produtos.png" alt="estrelas saindo de uma caixa" />
          {/* Crie uma lista com 5 links para as nossas rotas:
          OBS: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              {/* No 'Link to=""', entre as aspas vai estar o path para a página */}
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/produtos">PRODUTOS</Link></li>
            </ul>
          </nav>
        </header>
    </>
  )
}

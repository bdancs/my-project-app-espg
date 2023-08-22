//rfc + enter
export default function App() {
  return (
    <>
      <div className="container">

        <Cabecalho/>

        <section>
          {/*Isso é um comentário*/}
          <p><a href="/">Home Page</a></p>

            <button onClick={() => alert("Hello World!")}>Click Me!</button>
        </section>

        <footer>
          <p>&copy; 2021, Vite.js and React</p>
        </footer>
      </div>
    </>
  )
}

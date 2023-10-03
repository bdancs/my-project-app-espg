export default function Conteudo(){
    //Área declarativa (onde declara qualquer coisa/função)

    return(
        //Área imperativa
        <>
            {/*Comentário dentro do jsx*/}
            <section>
                <p><a href="/">Home Page</a></p>

                <button onClick={() => alert("Hello World!")}>Click Me!</button>
            </section>
        </>
    )
}
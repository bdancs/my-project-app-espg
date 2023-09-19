export default function Conteudo(props){
    //Área declarativa (onde declara qualquer coisa/função)

    return(
        //Área imperativa
        <>
            {/*Comentário dentro do jsx*/}
            <section>
                <p><a href="/">Home Page</a></p>

                <button onClick={() => alert("Hello World!")}>Click Me!</button>

                <img src={props.reactLogoProps} alt={props.reactLogoAltProps}/>
            </section>
        </>
    )
}
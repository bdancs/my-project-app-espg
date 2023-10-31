import { useState } from "react"

export default function Login() {
    
    //Vai receber os dados do formulário
    //É um objeto
    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    })

    //O 'async' é para deixar ele(quem? não sei) assíncrono
    const handleChange = async (e)=>{

        //Destructuring
        const{name, value} = e.target;

        //Preemchemdo o Objeto através do
        //useState utilizando o evento onChange e
        //Operador SPREAD(...)
        await setUsuario({...usuario,[name]:value})

    }

    const handleSubmit = async (e)=>{
       
        e.preventDefault();

        let user;

        try {
            const response = await fetch("http://localhost:5000/usuarios");

            if(response.ok){
                console.log(response.json())
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <h1>Login - Informação do Usuário</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados de Acesso: </legend>

                        <div>
                            <label htmlFor="idEmail">Email: </label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite o seu Email." value={usuario.email} onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="idSenha">Senha: </label>
                            <input type="password" name="senha" id="idSenha" placeholder="Digite a sua Senha." value={usuario.senha} onChange={handleChange}/>
                        </div>

                        <div>
                            <button>LOGIN</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
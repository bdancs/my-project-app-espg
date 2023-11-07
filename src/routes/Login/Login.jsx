import { useEffect, useState } from "react"
import "./Login.scss"

export default function Login() {

    const [msgstatus, setMsgstatus] = useState("");

    const [classStatus, setClassStatus] = useState("");
    
    //Vai receber os dados do formulário
    //É um objeto
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })

    //O 'async' é para deixar ele(quem? não sei) assíncrono
    const handleChange = async (e)=>{

        //Destructuring
        const{name, value} = e.target;

        //Preemchemdo o Objeto através do
        //useState utilizando o evento onChange e
        //Operador SPREAD(...)
        await setUsuario({...usuario,[name]:value});

    };

    useEffect(()=>{

        if(msgstatus == "Login realizado com SUCESSO!!"){

            setClassStatus("login-sucesso");

        }else if(msgstatus == "Usuário e/ou Senha incorretos!"){

            setClassStatus("login-erro");

        }else{

            setClassStatus("login");

        }

    }, [msgstatus])

    const handleSubmit = async (e)=>{
       
        e.preventDefault();

        let user;

        try {
            //É um GET utilizado para pegar a lista de usuários
            const response = await fetch("http://localhost:5000/usuarios");

            if(response.ok){
                //console.log(response.json())

                const users = await response.json();

                console.log(users);
                
                //Fazendo a recuperação
                for (let x = 0; x < users.length; x++) {

                    const u = users[x];

                    //Realizando a validação de fato
                    if(u.email == usuario.email && u.senha == usuario.senha){
                        user = u;

                        break; //Para sair de dentro do loop/if/catch
                    }
                    
                }

                if(user){
                    //Redirecionando o usuário para HOME!
                    setMsgstatus("Login realizado com SUCESSO!!");
                    
                    setTimeout(()=>{

                        window.location = "/";
                    
                    }, 5000);
                
                }else{
                    //Limpando o formulário caso a validação falhe!
                    
                    setMsgstatus("Usuário e/ou Senha incorretos!");
                    
                    setTimeout(()=>{

                        setMsgstatus("");

                        setUsuario({
                            "email":"",
                            "senha":""
                        })
        
                        window.location = "/login";

                    }, 5000);

                }

            }else{
                //Limpando o formulário caso a validação falhe!
                setUsuario({
                    "email":"",
                    "senha":""
                })

                window.location = "/login";
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <h1>Login - Informação do Usuário</h1>

            <h2 className={classStatus}>{msgstatus}</h2>

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
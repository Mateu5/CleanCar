import React, { useState } from "react"
import {Link} from 'react-router-dom'
import '../../global.css'
import api from "../../../services/api"

function  Login(){

    const [ email, setEmail] = useState('');
    const [ senha , setSenha] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleLogin = async () => {
        try {

            let res = await api.post('/login', {
                email: email,
                senha: password
            });

            if (res.status === 200) {
                console.log('Login bem-sucedido');
                alert('sucesso');
              }
            
        } catch (error) {
            console.log(error);
        }

    }


    return(
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100'>
            <div className='form_container p-5 rounded bg-white w-20'>
                <form>
                    <h3 className='text-center'>Bem-Vindo</h3>
                    <div className='mb-2'>
                        <label htmlFor="email" >Email</label>
                        <input type="email" placeholder='Digite o E-mail' className='form-control custom-input'
                            value={email} onChange={handleEmailChange}
                        />        
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="senha" >Senha</label>
                        <input type="password" placeholder='Digite a senha' className='form-control custom-input'
                            value={senha} onChange={handleSenhaChange}
                        />        
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox' id="check"/>
                        <label htmlFor="check" className='custom-input-label ms-2'>Lembre-me</label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary' onClick={handleLogin}>Entrar</button>
                    </div>
                    <p className='text-end mt-2'>
                         <a href="">Esqueci minha senha</a> <Link to="/signup" className='ms-2'>Registrar-se</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
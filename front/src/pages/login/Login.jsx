import React from "react"
import {Link} from 'react-router-dom'
import '../../global.css'

function  Login(){
    return(
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100'>
            <div className='form_container p-5 rounded bg-white w-20'>
                <form>
                    <h3 className='text-center'>Bem-Vindo</h3>
                    <div className='mb-2'>
                        <label htmlFor="email" >Email</label>
                        <input type="email" placeholder='Digite o E-mail' className='form-control custom-input'/>        
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="senha" >Senha</label>
                        <input type="password" placeholder='Digite a senha' className='form-control custom-input'/>        
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox' id="check"/>
                        <label htmlFor="check" className='custom-input-label ms-2'>Lembre-me</label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Entrar</button>
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
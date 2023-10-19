import React from "react"
import {Link} from 'react-router-dom'
import '../../global.css'

function Signup(){
    return(
        <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100'>
        <div className='form_container p-5 rounded bg-white w-20'>
            <form>
                <h3 className='text-center'>Bem-Vindo</h3>
                <div className='mb-2'>
                    <label htmlFor="nome" >Nome Completo</label>
                    <input type="text" placeholder='Digite o Nome Completo' className='form-control custom-input'/>        
                </div>
                <div className='mb-2'>
                    <label htmlFor="email" >Email</label>
                    <input type="email" placeholder='Digite o E-mail' className='form-control custom-input'/>        
                </div>
                <div className='mb-2'>
                    <label htmlFor="senha" >Senha</label>
                    <input type="password" placeholder='Digite a senha' className='form-control custom-input'/>        
                </div>
                <div className='mb-2'>
                    <label htmlFor="senhaConfirm" >Confirme a Senha</label>
                    <input type="password" placeholder='Confirme sua Senha' className='form-control custom-input'/>        
                </div>
                <br></br>
                <div className='d-grid mt-2'>
                    <button className='btn btn-primary'>Criar Conta</button>
                </div>
                <p className='text-end mt-2'>
                      Ja tem cadastro?<Link to="/login" className='ms-2'>Entrar</Link>
                </p>
            </form>
        </div>
    </div>
    )
}

export default Signup
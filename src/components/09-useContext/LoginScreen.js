import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { UserContext } from './UserContext'

const getNewID = () => {
    return new Date().getTime();
}

export const LoginScreen = () => {
    // el UserContext es el nombre que le definimos, hay que importarlo
    //  el use context, busca en el arbol de componentes el que estoy pidiendo (UserContext)
    const {user, setUser} = useContext(UserContext)
    const [{name, email}, handleInputChange, reset] = useForm({
        name:'',
        email:''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim().length <= 1 || email.trim().length <= 1) { return; }
        setUser({
            id: getNewID(),
            name: name,
            email: email
        })
        reset();
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-7'>
                <div className='card text-white bg-dark text-center m-5'>
                    <div className='card-body'>
                        <h1 className='h2 card-title'>Iniciar Sesión</h1>
                        <div className='card-text my-2'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <input 
                                        className="form-control" 
                                        type='text' 
                                        placeholder='Nombre'
                                        name='name'
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <input 
                                        className="form-control"
                                        type='email'
                                        placeholder='Correo Electrónico'
                                        name='email'
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Inicar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
                <pre>{JSON.stringify(user)}</pre>
            </div>
        </div>
    )
}

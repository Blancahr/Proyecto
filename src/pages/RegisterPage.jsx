import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';

export const RegisterPage = () => {
    const navigate = useNavigate();

    const { name, email, password, confirmPassword, country, onInputChange, onResetForm } =
        useForm({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            country: '',
        });

    const onRegister = e => {
        e.preventDefault();

        // Add validation for password and confirmPassword here

        navigate('/dashboard', {
            replace: true,
            state: {
                logged: true,
                name,
                email,
                country,
            },
        });

        onResetForm();
    };

    return (
        <div className='wrapper'>
            <form onSubmit={onRegister}>
                <h1>Registrarse</h1>

                <div className='input-group'>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={onInputChange}
                        required
                        autoComplete='off'
                    />
                    <label htmlFor='name'>Nombre:</label>
                </div>

                <div className='input-group'>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        onChange={onInputChange}
                        required
                        autoComplete='off'
                    />
                    <label htmlFor='email'>Email:</label>
                </div>

                <div className='input-group'>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={onInputChange}
                        required
                        autoComplete='off'
                    />
                    <label htmlFor='password'>Contraseña:</label>
                </div>

                <div className='input-group'>
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        value={confirmPassword}
                        onChange={onInputChange}
                        required
                        autoComplete='off'
                    />
                    <label htmlFor='confirmPassword'>Confirmar Contraseña:</label>
                </div>

                <div className='input-group'>
                    <select
                        name="country"
                        id="country"
                        value={country}
                        onChange={onInputChange}
                        required
                    >
                        <option value="">Selecciona un país</option>
                        {/* Add options for countries here */}
                    </select>
                    <label htmlFor='country'>País:</label>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                    <option value="mx">Mexico</option>
	               <option value="CL">Chile</option>
		         <option value="CO">Colombia</option>
                 <option value="AR">Argentina</option>
                </select>


                </div>

                <button>Registrarse</button>
            </form>
        </div>
    );
};

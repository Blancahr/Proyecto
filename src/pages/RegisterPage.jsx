import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';


export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    name,
    email,
    password,
    edad,
    pais,
    incluirTelefono,
    telefono,
    onInputChange,
    onResetForm,
    errors, // Suponiendo que tu hook retorna un objeto de errores
  } = useForm({
    name: '',
    email: '',
    password: '',
    edad: '',
    pais: '',
    incluirTelefono: false,
    telefono: '',
  });

  const onRegister = (e) => {
    e.preventDefault();

    console.log('Datos del formulario:', {
      name,
      email,
      password,
      edad,
      pais,
      incluirTelefono,
      telefono,
    });

    navigate('/dashboard', {
      replace: true,
      state: {
        logged: true,
        name,
        edad,
        pais,
        incluirTelefono,
        telefono,
      },
    });

    onResetForm();
  };

  return (
    <div className="wrapper">
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

            <div>
                <label>Edad</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })} />
                {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
            </div>
            <div>
                <label>País</label>
                <select {...register('pais')}>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                    <option value="mx">Mexico</option>
	           <option value="CL">Chile</option>
		  <option value="AR">Argentina</option>
		<option value="CO">Colombia</option>
                </select>
            </div>
            <div>
                <label>¿Incluir teléfono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && (
                <div>
                    <label>Teléfono</label>
                    <input type="text" {...register('telefono')} />
                </div>


        <button disabled={Object.keys(errors).length > 0}>Registrarse</button>
      </form>
    </div>
  );
};

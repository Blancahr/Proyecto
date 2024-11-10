import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm'; // Asegúrate de que tu hook esté correctamente implementado

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

    // Aquí puedes agregar lógica para enviar los datos al servidor o realizar otras acciones
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
        {/* ... (campos del formulario) */}

        {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
        {/* Mostrar otros mensajes de error según tu implementación */}

        <button disabled={Object.keys(errors).length > 0}>Registrarse</button>
      </form>
    </div>
  );
};

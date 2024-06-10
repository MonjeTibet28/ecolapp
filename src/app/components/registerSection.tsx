import React, { useState, ChangeEvent, FormEvent } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, database } from '../config/firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom'; // Importar useNavigate para redirigir

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  constructionType: string; // Nuevo campo
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    constructionType: '' // Inicializar el nuevo campo
  });

  const navigate = useNavigate(); // Obtener el objeto navigate

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Guardar la información del usuario en la base de datos
      await set(ref(database, 'users/' + user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        constructionType: formData.constructionType // Guardar el nuevo campo
      });

      console.log('Usuario registrado y datos guardados:', user.uid);
      alert('Usuario registrado');

      // Redireccionar al usuario a la página de inicio después del registro
      navigate('/');
    } catch (error) {
      console.error('Error registrando al usuario:', error);
      alert('Error registrando al usuario: '+ error);
    }
  };

  return (
    <div className="why-choose-section">
      <div className="container">
        <div style={{ justifyContent: 'center' }} className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Registrarse</h2>
            <form id="register-form" onSubmit={handleSubmit}>
              <div className="p-3 p-lg-5 border bg-white">
                <div className="form-group">
                  {/* Form fields... */}
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">
                        Nombre <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        id="c_fname"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">
                        Apellido <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        id="c_lname"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_address" className="text-black">
                        Dirección <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Calle, Cuadra, etc."
                        id="c_address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c_rol" className="text-black">
                      ¿Tipo de Construcción? <span className="text-danger">*</span>
                    </label>
                    <select
                      id="c_rol"
                      name="constructionType"
                      required
                      className="form-control"
                      value={formData.constructionType} // Añadir value para el select
                      onChange={handleChange} // Añadir onChange para el select
                    >
                      <option value="">Seleccionar</option>
                      <option value="Casa">Casa</option>
                      <option value="Apartamento">Apartamento</option>
                      <option value="Calle">Calle</option>
                      <option value="Indrustrial">Zona Industrial</option>
                    </select>
                  </div>
                  <div className="form-group row ">
                    <div className="col-md-12">
                      <label htmlFor="c_email_address" className="text-black">
                        Correo <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        required
                        id="c_email_address"
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_state_country" className="text-black">
                        Contraseña<span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        required
                        placeholder="debe tener 6 caracteres mínimo"
                        id="c_state_country"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-5">
                      <label htmlFor="c_postal_zip" className="text-black">
                        Repetir Contraseña <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        required
                        placeholder="repetir contraseña"
                        id="c_postal_zip"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="submit"
                      className="btn btn-black btn-lg py-3 btn-block"
                      style={{ width: 300, fontWeight: 'bold', background: 'black', color: 'white' }}
                    >
                      Registrarse
                    </button>
                  </div>
                </div>
                <div style={{ paddingTop: 30, textAlign: 'center' }}>
                  <NavLink
                    style={{ fontSize: 15 }}
                    className="btn-lg py-3 btn-block"
                    to="/"
                  >
                    Regresar al Menú Principal
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

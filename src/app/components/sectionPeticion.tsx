"use client";
import React, { useState } from 'react';
import { database } from '../config/firebaseConfig';
import { ref, push, set } from 'firebase/database';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

const RequestForm: React.FC = () => {
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');
    const [direccion, setDireccion] = useState('')

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Enero es 0
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };
      
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Guardar la petición en la base de datos de Firebase
            const requestsRef = ref(database, 'peticion');
            const newRequestRef = push(requestsRef);
            await set(newRequestRef, {
                name,
                // email,
                request,
                direccion,
                timestamp: formatDate(Date.now()),
            });

            // Limpiar el formulario
            setName('');
            // setEmail('');
            setRequest('');
            setDireccion('')
            alert('Tu petición ha sido enviada con éxito.');
        } catch (error) {
            console.error('Error al enviar la petición: ', error);
            alert('Hubo un error al enviar tu petición. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div className='why-choose-section'>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '20px' }}>Haz tu petición</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder='example@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="direccion"
                                    placeholder='Calle, Distrito, etc.'
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="request" className="form-label">Petición</label>
                                <textarea
                                    className="form-control"
                                    id="request"
                                    rows={3}
                                    value={request}
                                    onChange={(e) => setRequest(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { RequestForm };

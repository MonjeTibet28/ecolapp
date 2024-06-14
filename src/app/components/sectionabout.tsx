
"use client";
import React from 'react';
import { useEffect } from 'react';
import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'


const OurOriginSection = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>Nuestro Origen</h2>
            <p style={{ fontSize: '20px' }}>EcolApp nació para resolver la gestión ineficiente de materiales de desecho en la construcción en Perú. Validada con actores clave del sector, nuestra plataforma conecta a recolectores independientes con usuarios que necesitan deshacerse de desechos reutilizables, ofreciendo una solución sostenible sin costos adicionales de transporte o infraestructura. Somos pioneros en esta iniciativa única en el país.</p>
          </div>
          <div className="col-lg-5">
            <div className="image-wrap">
              <img src="images/origen.jpg" alt="Origen de EcolApp" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionSection = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="image-wrap">
              <img src="images/mision.jpg" alt="Misión de EcolApp" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>Misión</h2>
            <p style={{ fontSize: '20px' }}>Revolucionar la gestión de materiales de desecho de construcción mediante una plataforma innovadora que conecta a recolectores independientes con usuarios, promoviendo la reutilización de recursos, la sostenibilidad y el desarrollo de prácticas responsables en la industria de la construcción en Perú.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VisionSection = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">

          <div className="col-lg-6">
            <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>Visión</h2>
            <p style={{ fontSize: '20px' }}>Ser la plataforma líder en Perú para la gestión sostenible de materiales de desecho de construcción, reconocida por su impacto positivo en la reducción de residuos y la promoción de una economía circular, donde los desechos de hoy se conviertan en los recursos de mañana.</p>
          </div>
          <div className="col-lg-5">
            <div className="image-wrap">
              <img src="images/vision.jpg" alt="Misión de EcolApp" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const TeamSection = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>Nuestro Equipo</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* Start Column 1 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_4.jpg" className="img-fluid mb-5" alt="Fiorella Castro" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Fiorella Castro</h3>
            <span className="d-block position mb-4">CEO de Estrategia y Producto</span>
            <p>Define la visión del Producto Mínimo Viable de EcolApp y establece las prioridades estratégicas. Desarrolla la propuesta de valor inicial, asegura que el producto responda a las necesidades del mercado y coordina la creación y lanzamiento de las primeras versiones de la plataforma.</p>
          </div>
          {/* End Column 1 */}

          {/* Start Column 2 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_2.jpg" className="img-fluid mb-5" alt="Jhon Martinez" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Jhon Martinez</h3>
            <span className="d-block position mb-4">CEO de Operaciones y Logística</span>
            <p>Se encarga de la planificación y ejecución de las operaciones del MVP, supervisando el diseño de flujos de recolección y las interacciones básicas con recicladores. Asegura la eficiencia en la logística y prueba la viabilidad operativa en el contexto real del MVP.</p>
          </div>
          {/* End Column 2 */}

          {/* Start Column 3 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_3.jpg" className="img-fluid mb-5" alt="Ramiro Cespedes" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Ramiro Cespedes</h3>
            <span className="d-block position mb-4">CEO de Marketing y Validación de Mercado</span>
            <p>Promueve EcolApp durante el lanzamiento del Producto Mínimo Viable, ejecutando campañas de marketing de bajo costo y estableciendo canales de comunicación iniciales. Valida la aceptación del mercado a través de retroalimentación de los primeros usuarios y ajusta las estrategias de promoción en función de los resultados.</p>
          </div>
          {/* End Column 3 */}

          {/* Start Column 4 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_2.jpg" className="img-fluid mb-5" alt="Dario Colombo" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Dario Colombo</h3>
            <span className="d-block position mb-4">CEO de Tecnología y Desarrollo</span>
            <p>Lidera el desarrollo del prototipo del Producto Mínimo Viable, enfocándose en construir una plataforma funcional con las características esenciales. Implementa soluciones técnicas rápidas y efectivas para validar la idea, priorizando la usabilidad y la escalabilidad básica.</p>
          </div>
          {/* End Column 4 */}

          {/* Start Column 5 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_4.jpg" className="img-fluid mb-5" alt="Zingri Urpeque" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Zingri Urpeque</h3>
            <span className="d-block position mb-4">CEO de Finanzas y Administración</span>
            <p>Gestiona el presupuesto limitado del MVP, controlando costos y buscando financiamiento inicial. Administra los recursos financieros, elabora el plan de negocios básico y asegura la transparencia financiera para evaluar la viabilidad económica del MVP.</p>
          </div>
          {/* End Column 5 */}
        </div>
      </div>
    </div>
  );
};



const FAQSection = () => {
  useEffect(() => {
    // Cargar scripts de Bootstrap y Tiny Slider solo en el cliente
    const loadScripts = async () => {
      try {
        // Cargar Bootstrap
        await import('../../../public/js/bootstrap.bundle.min.js');

        // Cargar Tiny Slider
        await import('../../../public/js/tiny-slider.js');
      } catch (error) {
        console.error('Error al cargar scripts:', error);
      }
    };

    loadScripts();

    // Limpiar los scripts al desmontar el componente
    return () => {
      // Realizar limpieza si es necesario
    };
  }, []);


  return (<div className="why-choose-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>Preguntas Frecuentes</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 mb-5 mb-md-0">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {/* Pregunta 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  ¿Qué es EcolApp?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  EcolApp es la primera plataforma virtual en Perú especializada en la gestión de desechos de construcción. Nuestro objetivo es facilitar la recolección de materiales reutilizables, conectando a recolectores independientes con usuarios que necesitan deshacerse de estos materiales de manera eficiente y sostenible.
                </div>
              </div>
            </div>
            {/* Pregunta 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  ¿Cómo funciona EcolApp?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  EcolApp opera como un intermediario digital entre usuarios y recicladores. Los recicladores se registran de manera gratuita en la plataforma para ofrecer sus servicios. Por otro lado, los usuarios interesados en la recolección de materiales deben registrarse primero en la plataforma y luego completar un breve formulario para hacer su solicitud. A partir de ahí, EcolApp se encarga de conectar a los usuarios con recicladores disponibles que se encargan de realizar la recolección de manera eficiente y sostenible.
                </div>
              </div>
            </div>
            {/* Pregunta 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  ¿Quiénes pueden utilizar EcolApp?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  EcolApp está diseñado para ser utilizado principalmente por empresas de construcción pero también esta disponible para:
                  <ul className="list-unstyled list-puntos">
                    <br/>
                    <li>Propietarios de viviendas</li>
                    <li>Desarrolladores inmobiliarios</li>
                    <li>Cualquier persona que necesite deshacerse de materiales de construcción de manera responsable.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pregunta 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  ¿Qué tipos de materiales recoge EcolApp?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  EcolApp facilita la recolección de una variedad de materiales de desecho de construcción, incluyendo:
                  <ul className="list-unstyled list-puntos">
                    <li>Acero</li>
                    <li>Aluminio</li>
                    <li>Cobre</li>
                    <li>Hormigón</li>
                    <li>Plástico</li>
                    <li>Madera</li>
                    <li>Vidrio</li>
                    <li>Otros materiales de desecho de construcción, como cerámica, cartón, papel, entre otros.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pregunta 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  ¿Cómo me registro en EcolApp?
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  El registro en EcolApp es sencillo. Solo necesitas completar un formulario con tus datos básicos y seguir las instrucciones en pantalla para crear una cuenta de usuario.
                </div>
              </div>
            </div>
            {/* Pregunta 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  ¿Cómo me registro como reciclador en EcolApp?
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  Para registrarte como reciclador, simplemente accede a nuestra plataforma, completa el formulario de registro con tus datos y ofrece tus servicios. Una vez registrado, podrás recibir solicitudes de recolección de usuarios en tu área.
                </div>
              </div>
            </div>
            {/* Pregunta 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  ¿Cómo solicito la recolección de materiales?
                </button>
              </h2>
              <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  Para solicitar la recolección de materiales específicos a través de EcolApp, comienza registrándote como usuario en la plataforma. Posteriormente, completa un breve formulario en la sección “contratar” para realizar tu solicitud. Una vez hecho esto, EcolApp actuará como intermediario digital, conectándote con recicladores disponibles a través de correo electrónico, quienes se encargarán de llevar a cabo la recolección de manera eficiente y sostenible.
                </div>
              </div>
            </div>
            {/* Pregunta 8 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                  ¿Qué información del recolector recibiré después de hacer una solicitud en EcolApp?
                </button>
              </h2>
              <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  Después de realizar una solicitud en EcolApp, recibirás por correo electrónico la información del recolector asignado, incluyendo su nombre completo, DNI, tipo de transporte que utiliza, y el tipo de reciclaje que realiza, entre otros detalles relevantes. Esto te permitirá identificar al recolector y coordinar la recolección de manera segura y eficiente.
                </div>
              </div>
            </div>
            {/* Pregunta 9 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                  ¿Qué costo tiene usar EcolApp?
                </button>
              </h2>
              <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  Para los recicladores, registrarse y ofrecer sus servicios en EcolApp es totalmente gratuito. Los usuarios pagan una tarifa mínima por cada solicitud de recolección que realicen a través de la plataforma.
                </div>
              </div>
            </div>
            {/* Pregunta 10 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                  ¿Qué beneficios ofrece EcolApp?
                </button>
              </h2>
              <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  EcolApp ofrece varios beneficios, incluyendo:
                  <ul className="list-unstyled list-puntos">
                    <li>Conexión directa con recicladores independientes.</li>
                    <li>Recolección eficiente y sostenible de materiales de desecho.</li>
                    <li>Eliminación de costos adicionales para los usuarios (transporte, infraestructura).</li>
                    <li>Contribución a la sostenibilidad y optimización en la gestión de residuos de construcción.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pregunta 11 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEleven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                  ¿Es seguro usar EcolApp?
                </button>
              </h2>
              <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  Sí, EcolApp prioriza la seguridad y la confianza. Verificamos la información de los recicladores registrados y facilitamos un entorno confiable para ambas partes.
                </div>
              </div>
            </div>
            {/* Pregunta 12 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwelve">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                  ¿Cómo puedo contactar al soporte de EcolApp?
                </button>
              </h2>
              <div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  Si tienes alguna pregunta o necesitas asistencia, puedes contactar a nuestro equipo de soporte a través de un correo electrónico a 
                  <a href="mailto: ecolapp.oficial@gmail.com"> ecolapp.oficial@gmail.com</a>.
                </div>
              </div>
            </div>
            {/* Pregunta 13 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThirteen">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                  ¿Cómo se asegura la sostenibilidad en EcolApp?
                </button>
              </h2>
              <div id="flush-collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  EcolApp promueve la sostenibilidad al facilitar la recolección y reutilización de materiales de construcción que de otro modo podrían terminar en vertederos, reduciendo el impacto ambiental y promoviendo prácticas de construcción más responsables.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export { TeamSection, MissionSection, OurOriginSection, VisionSection, FAQSection }
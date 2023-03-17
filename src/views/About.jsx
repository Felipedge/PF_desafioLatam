import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='container-about'>
            <div className='container-text'>
                <h1 className='titulo-about' >Quienes somos... </h1>
                <p className='text-about'>Francisco Jiménez: Ingeniero Mecánico. Francisco tenía una amplia experiencia en la fabricación de estructuras metálicas y maquinaria industrial. Como líder técnico de la empresa, fue el encargado de diseñar las estructuras y supervisar su producción. </p>
                <p className='text-about'>Javier López: Técnico en soldadura y metalurgia. Javier era experto en la soldadura de acero inoxidable y otros metales. Como responsable de producción de la empresa, supervisó la fabricación y el montaje de las estructuras en el taller</p>
                <p className='text-about'>Natalia Ortiz: Licenciada en Administración y Dirección de Empresas. Natalia tenía una amplia experiencia en la gestión empresarial y fue la encargada de dirigir la empresa, administrar las finanzas, establecer estrategias y gestionar el marketing y las relaciones con los clientes. </p>
                <p className='text-about'>Juntos, estos tres profesionales fundaron la empresa FJ INOX en 1990, una empresa especializada en la fabricación y montaje de estructuras metálicas, especialmente de acero inoxidable. Su amplia experiencia y conocimiento en diferentes áreas les permitió construir una empresa sólida que creció rápidamente en el mercado. La empresa se destacó por su alta calidad en la fabricación de las estructuras y su compromiso con la atención al cliente, lo que les permitió ganar la confianza de sus clientes y mantener una sólida reputación en el mercado.</p>
            </div>
            <div>
            <img className='img-about' src="./images/soldador.jpeg" alt="soldador" />
            </div>
        </div>
    );
}

export default About;

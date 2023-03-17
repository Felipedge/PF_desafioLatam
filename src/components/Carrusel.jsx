import Carousel from 'react-bootstrap/Carousel';
import './carrusel.css'

function Carrusel() {
    return (
        <Carousel >
            <Carousel.Item className='slide'> 
                <img
                    className="d-block w-100 img"
                    src="./images/01.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100 img"
                    src="./images/02.jpeg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100 img"
                    src="./images/04.jpeg"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;
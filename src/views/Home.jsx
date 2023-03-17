import React from 'react';
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from '../components/Carrusel';
import Body from '../components/Body';

const Home = () => {
    return (
        <div>
            <div>
                <Carrusel/>
                <Body/>
            </div>
        </div>
    );
}
export default Home;

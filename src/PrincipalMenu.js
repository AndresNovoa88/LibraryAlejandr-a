import React, {useState} from 'react';
import '../src/CSS/Styles.css';
import {useNavigate} from "react-router-dom";
import {Carousel} from "react-bootstrap";

const MainMenu = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const deleteBook = () => {
        navigate('/deleteBook')
    }

    const principalPage = () => {
        navigate('/')
    }

    const registerBook = () => {
        navigate('/RegisterBook')
    }

    const updateBook = () => {
        navigate('/updateBook')
    }

    const searchBook = () => {
        navigate('/searchBook')
    }

    const listBook = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigate('/listBook');
        }, 2500);
    };

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1 className="menu-title">Library Alejandría</h1>
            </header>
            <div className="content-container">
                <div className="carousel-container">
                    <Carousel controls={false} interval={1000} fade={false}>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img1.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img2.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img3.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img4.jpeg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img5.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="menu-buttons">
                    <button className="menu-button" onClick={principalPage}>
                        Pagina Principal
                    </button>
                    <button className="menu-button" onClick={registerBook}>
                        Registrar Libro
                    </button>
                    <button className="menu-button" onClick={deleteBook}>
                        Eliminar Libro
                    </button>
                    <button className="menu-button" onClick={searchBook}>
                        Buscar Libro
                    </button>
                    <button className="menu-button" onClick={updateBook}>
                        Actualizar Libro
                    </button>
                    <button className="menu-button" onClick={listBook}>
                        {loading ? 'Trayendo datos...' : 'Libros almacenados'}
                    </button>
                </div>
                <div className="carousel-container">
                    <Carousel interval={1000} controls={false} fade={false}>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img6.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img7.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img8.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img9.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/img10.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

const UpdateBook = () => {
    const actualizarLibro = () => {
        console.log('Libro actualizado');
    };

    return (
        <div className="menu-container">

            <header>
                <div className="titleothers">
                    <h1 className="texto">Actualizar libro</h1>
                </div>
                <div className="subcontainerSecondPage">
                    <div className="caja">
                        <div className="form">
                            <div className="row">
                                <div>
                                    <label htmlFor="isbn" className="rojo">ISBN: </label>
                                    <input type="text" name="isbn" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="titulo" className="rojo">Título: </label>
                                    <input type="text" name="titulo" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="autor" className="rojo">Autor: </label>
                                    <input type="text" name="autor" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="tema" className="rojo">Tema: </label>
                                    <input type="text" name="tema" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="medio" className="rojo">Tipo de medio del ejemplar: </label>
                                    <input type="text" name="medio" placeholder="(fisico o electrónico)"/>
                                </div>
                                <div>
                                    <label htmlFor="ubicacion" className="rojo">Ubicación física: </label>
                                    <input type="text" name="ubicacion" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="fechaedicion" className="rojo">Fecha de edición: </label>
                                    <input type="text" name="fechaedicion" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="numeropaginas" className="rojo">Número de páginas: </label>
                                    <input type="text" name="numeropaginas" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadejemplares" className="rojo">Cantidad de ejemplares: </label>
                                    <input type="text" name="cantidadejemplares" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="disponibles" className="rojo">Cantidad de ejemplares disponibles: </label>
                                    <input type="text" name="disponibles" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="resumen" className="rojo">Resumen: </label>
                                    <input type="text" name="resumen" placeholder="Buscar..."/>
                                </div>
                            </div>
                        </div>
                        <ButtonGroup>
                            <Button className="custom-violent-buttonb" variant="secondary" onClick={() => window.location.href = '/'}>
                                Página principal
                            </Button>
                            <Button className="custom-violent-buttonb" variant="secondary" onClick={actualizarLibro}>
                                Actualizar libro
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default UpdateBook;
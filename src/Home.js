import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './CSS/Styles.css';

const Home = () => {
    const navigate = useNavigate();

    const PrincipalMenu = () => {
        navigate('/principalMenu');
    };

    return (
        <div className="menu-container">
            <div className="menu-container">
                <header>
                    <div className="title">
                        <h1 className="texto">Library Alejandría</h1>
                    </div>
                </header>

                <div className="card-container">
                    <Card style={{ width: '18rem', marginBottom: '20px' }} className="custom-violent-button"
                        border="green">
                        <Card.Img variant="top" src="/images/img1.jpg" alt="Cien años de soledad" />
                        <Card.Body>
                            <Card.Title>Cien años de soledad</Card.Title>
                            <Card.Text>
                                Esta novela narra la historia de la familia Buendía a lo largo de siete generaciones
                                en el ficticio pueblo de Macondo. A través de la magia y el realismo, García Márquez
                                explora temas como el amor, la soledad y el destino. La historia mezcla lo mágico con
                                lo real para ofrecer una profunda reflexión sobre la condición humana y la historia de
                                América Latina.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginBottom: '20px' }} className="custom-violent-button"
                        border="green">
                        <Card.Img variant="top" src="/images/img2.jpg" alt="1984" />
                        <Card.Body>
                            <Card.Title>1984</Card.Title>
                            <Card.Text>
                                En una distopía totalitaria, Winston Smith vive bajo la opresión del Partido, que controla
                                todos los aspectos de la vida. La novela explora temas de vigilancia, control de la información
                                y la manipulación de la verdad. Winston busca rebelarse contra el régimen opresivo y encontrar
                                la verdad en un mundo donde la privacidad y la libertad están completamente suprimidas.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginBottom: '20px' }} className="custom-violent-button"
                        border="green">
                        <Card.Img variant="top" src="/images/img3.jpg" alt="Orgullo y prejuicio" />
                        <Card.Body>
                            <Card.Title>Orgullo y prejuicio</Card.Title>
                            <Card.Text>
                                Ambientada en la Inglaterra del siglo XIX, esta novela sigue la vida de Elizabeth Bennet,
                                una joven con una fuerte personalidad y opiniones firmes. La historia se centra en su
                                relación con el adinerado y orgulloso Sr. Darcy, y explora temas de matrimonio, clase social
                                y moralidad, a menudo con un toque de humor y crítica social.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginBottom: '20px' }} className="custom-violent-button"
                        border="green">
                        <Card.Img variant="top" src="/images/img4.jpeg" alt="El gran Gatsby" />
                        <Card.Body>
                            <Card.Title>El gran Gatsby</Card.Title>
                            <Card.Text>
                                La novela se ambienta en los años 20 en los Estados Unidos y sigue la vida del enigmático
                                millonario Jay Gatsby. A través de la mirada del narrador, Nick Carraway, se exploran temas de riqueza,
                                amor y la búsqueda del sueño americano. Gatsby, conocido por sus extravagantes fiestas,
                                está obsesionado con recuperar a su antiguo amor, Daisy Buchanan, en un contexto de decadencia y
                                desilusión.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <button className="custom-violent-buttonb" onClick={PrincipalMenu}>MENU PRINCIPAL</button>

            </div>

            <footer className="footer">
                <p>© Andrés Camilo Novoa. Todos los derechos reservados.</p>
            </footer>

        </div>
    );
};

export default Home;
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import avangersImage from "../assets/superhero/avangers.jpeg"
import batmanImage from "../assets/superhero/batman.jpeg"
import blackwidowImage from "../assets/superhero/blackwidow.jpeg"
import mulanImage from "../assets/superhero/mulan.jpeg"
import spiderImage from "../assets/superhero/spider.jpeg"
import xmenImage from "../assets/superhero/xmen.jpeg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={avangersImage} alt="Dilan Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Dilan</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                        
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={batmanImage} alt="Dilan Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Dilan</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                        
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={blackwidowImage} alt="Dilan Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Dilan</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                        
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={mulanImage} alt="Dilan Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Dilan</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                        
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={spiderImage} alt="Dilan Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Dilan</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                        
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={xmenImage} alt="Dilan Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Dilan</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with natural lead-in to additional content.
                            </Card.Text >
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                        </div>
                        
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Superhero
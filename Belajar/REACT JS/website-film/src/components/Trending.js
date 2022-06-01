import { Card, Container, Row, Col, Image } from "react-bootstrap"
import dilanImage from "../assets/trending/dilan.jpg"
import dollImage from "../assets/trending/doll.jpeg"
import kknImage from "../assets/trending/kkn.jpeg"
import maleficentImage from "../assets/trending/maleficent.jpeg"
import popeyeImage from "../assets/trending/popeye.jpeg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                    <Card className="movieImage">
                        <Image src={dilanImage} alt="Dilan Movies" className="images" />
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
                        <Image src={dollImage} alt="Dilan Movies" className="images" />
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
                        <Image src={kknImage} alt="Dilan Movies" className="images" />
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
                        <Image src={maleficentImage} alt="Dilan Movies" className="images" />
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
                        <Image src={popeyeImage} alt="Dilan Movies" className="images" />
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

export default Trending
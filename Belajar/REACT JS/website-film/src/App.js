import { Col, Container, Row } from "react-bootstrap"
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='MyBG'>
        <NavigationBar />
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-item-center border">
            <Row>
              <Col>
              <h1>NONTON GRATIS</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* end of intro */}
    </div>
  );
}

export default App;

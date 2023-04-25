import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="p-0 m-0 bg-success text-dark text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Row className="align-items-center justify-content-center min-vh-100 d-flex flex-column" style={{ height: "100vh" }}>
        <Col md={6} className="text-center p-5 m-5 bg-light rounded-3 shadow p-5 m-5">
          <h1 className="display-4 fw-bold text-success mb-3 font-monospace text-decoration-none text-lowercase font-italic text-center">Welcome to My Website</h1>
          <p className="lead fw-bold mb-3 text-success text-center text-lowercase font-italic font-monospace text-decoration-none">
            Press the button to generate a random fruit image.
          </p>
          <Button variant="success" className="mt-3 px-5 py-2 rounded-pill shadow-sm" href="/about" size="lg">
            Refresh
          </Button>
        </Col>
        <Col md={6} className="p-0 m-0 bg-success">
          <img
            src="https://source.unsplash.com/random/900x700/?fruit"
            alt="Random image"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center",  borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

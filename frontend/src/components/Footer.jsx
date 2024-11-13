import '../assets/styles/Footer.css';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col className='text-center py-3 footer-text'>
                        ShopEasy &copy; {currentYear}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

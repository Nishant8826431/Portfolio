import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = ()=>{
    return(
        <footer className="footer">
            <Container  className="d-flex align-items-center">
                <Row className=" align-item-center p-2"></Row>
                {/* <Col sm={6}>
                    <img src={logo} alt="Logo"/>
                </Col> */}
                <Col sm={6} >
                    <div className="social-icon">
                        <a href=""><img src={navIcon1}/> </a>
                        <a href=""><img src={navIcon2}/> </a>
                        <a href=""><img src={navIcon3}/> </a>
                    </div>
                    
                </Col>
                <Col sm={6}>
                <p>CopyRight 2023. All Right Reserved by Nishant</p>
                </Col>
            </Container>
        </footer>
    )

}
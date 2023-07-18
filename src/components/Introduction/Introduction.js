import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

export default function Introduction() {
    
    const handleGetInTouch = () => {
        const dynamicFormSection = document.querySelector("#Service-form");
        if (dynamicFormSection) {
          dynamicFormSection.scrollIntoView({ behavior: "smooth" });
        }
      };


    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            Welcome to my Dynamic Form {" "}
                            <span className="pt-2 pb-4">that you will do everything that you want</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5">
                        Hi I'm Luis Vanegas, I like to go to the movies and share a lot with my family.        
                                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                                <Button
                                    className="p-3"
                                    onClick={handleGetInTouch}
                                >Get in touch</Button>
                                <Button className="p-3">Get in touch</Button>
                            </div>
                            <div className="btn-start-create">
                                <a href="#dynamic-form">Start to create</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}

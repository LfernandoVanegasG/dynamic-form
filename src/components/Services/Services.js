import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/factura.PNG";
import imgCourse2 from "../../assets/img/pos.PNG";
import imgCourse3 from "../../assets/img/contable.PNG";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Electronic invoicing",
            subtitle: "Read all about this great service",
            image: imgCourse1,
            footer: "Go to service  ➡️",
            link: "https://intelitech.co/",
        },
        {
            title: "POS System",
            subtitle: "Read all about this great service",
            image: imgCourse2,
            footer: "Go to service ➡️",
            link: "https://intelitech.co/sistema-pos/",
        },
        {
            title: "Accounting system",
            subtitle: "Read all about this great service",
            image: imgCourse3,
            footer: "Go to service ➡️",
            link: "https://intelitech.co/contabilidad-en-la-nube/",
        },
    ];

    return (
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

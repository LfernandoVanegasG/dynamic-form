import { Card } from "react-bootstrap";
import "./CardResume";
export default function CardResumeCarros(props) {

    const {subtitle, carrosStorage, text}=props;

    return (
        <div>
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle>
                        <b>{subtitle}</b>
                    </Card.Subtitle>
                   
                       
                    
                    <ul>
                     
                        {carrosStorage.map((carros, index)=>(
                            <li key={index}>{carros.label}</li>
                            
                        ))}
                    </ul>
                </Card.Body>
            </Card>
            {text &&(
                <Card className="text-center p-2 card-resume">
                    <Card.Body>
                        <Card.Subtitle>
                            <b>Your Additional cars is: </b>
                        </Card.Subtitle>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}

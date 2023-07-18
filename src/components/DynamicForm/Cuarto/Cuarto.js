import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Select from "react-select";

const options2=[
    {id:1, value:"Acura", label:"Acura 🚗"},
    {id:2, value:"Alfa Romeo", label:"Alfa Romeo 🚗"},
    {id:3, value:"Audi", label:"Audi 🚗"},
    {id:4, value:"Baic", label:"Baic 🚗"},
    {id:5, value:"BAW", label:"BAW 🚗"},
    {id:6, value:"BMW", label:"BMW 🚗"},
    {id:7, value:"Brilliance", label:"Brilliance 🚗"},
];
/*
<Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />*/
export default function Cuarto() {
    const [selectOption2, setSelectOption2]=useState(null);
    const carrosSer= JSON.stringify(selectOption2);
    localStorage.setItem("carros", carrosSer);
  const onChangeAdditionalcarro = (e) =>{
        const sport2 = e.target.value;
        localStorage.setItem("additionalcarros", sport2);
    };
    return (
        <div>
            <h2>Select your favourite cars</h2>
            <h4>Tell me about your cars</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>Select your cars</h5>
                        <Select 
                            defaultValue={selectOption2}
                            onChange={setSelectOption2}
                            options={options2}
                            isSearchable
                            isMulti
                        />
                    </Col>
                    <Col lg="7" className="mt-4">
                        <h5>Do you want to add more</h5>
                        <Form.Control
                            type="text"
                            placeholder="others"
                            onChange={(e) => onChangeAdditionalcarro(e)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

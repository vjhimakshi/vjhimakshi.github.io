import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/style.css";
import sjsu from "../images/sjsu.png";
import uecu from "../images/uecu.png";

function Education() {
  return (
    <Container fluid className="about-section" id ="education">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <h1 class="heading"><span>Education</span> </h1>
            <Card className="educard">
                    <Card.Body>
                    <Row xs={12}>
                        <Col xs={2}>
                        <Card.Img src={sjsu} style={{height:'90%',width:'85%'}}/>       
                        </Col>
                        <Col xs={10}>               
                        <Card.Title>San Jose State University</Card.Title>
                        <Card.Subtitle className="mb-2">Masters of Software Engineering</Card.Subtitle>
                        <Card.Text> 2021-2022 <br/>
                         {/* GPA: 3.5/4 <br/> */}
                         {/* Enterprise Distributed Systems, Software Design, Data Mining, Networking */}
                         Data Structures and Algorithms, Enterprise Distributed Systems, Software Systems Engineering, Network Programming and Application
                         </Card.Text>
                        </Col>  
                    </Row>
                    </Card.Body>
            </Card>
            <Card className="educard">
                    <Card.Body>
                    <Row xs={12}>
                        <Col xs={2}>
                        <Card.Img src={uecu} style={{height:'90%',width:'85%'}}/>       
                        </Col>
                        <Col xs={10}>               
                        <Card.Title>Ujjain Engineering College</Card.Title>
                        <Card.Subtitle className="mb-2">Bachelors of Electronics and Communication</Card.Subtitle>
                        <Card.Text> 2012-2016 <br/>
                         {/* GPA: 8.2/10 <br/> */}
                         Computer Networks, Semiconductor Devices
                         </Card.Text>
                        </Col>  
                    </Row>
                    </Card.Body>
            </Card>
        </Row>
    </Container>
  );
}

export default Education;
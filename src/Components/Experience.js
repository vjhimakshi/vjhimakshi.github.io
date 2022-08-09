import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../css/style.css";

function Experience() {
  return (
    <Container fluid className="about-section" id ="experience">
          <h1 class="heading"><span>Work Experience</span> </h1>
          <Row style={{ justifyContent: "center"}}>
          <Card className="educard">
                    <Card.Body>
                        {/* <Card.Img src={sjsu} style={{height:'40%',width:'85%'}}/>        */}
                        <Card.Title>Astoria AI Inc.</Card.Title>
                        <Card.Subtitle className="mb-2">Software Intern</Card.Subtitle>
                        <Card.Text> Jun 2022- Aug 2022  <br/>
                        <div style={{textAlign:'left'}}>
                                <ul>
                                    <li>Compiled 100+ attributes of candidates' life progression and 80+ characteristics of employers to produce data points for an AI model.</li>
                                    <li>Designed candidate's career path UI, including Lo-fi wireframes and prototypes using the Figma tool.</li>
                                    <li>Created an advertisement video to show the career path journey on platform. </li>
                                </ul>
                          </div>
                         </Card.Text>
                    </Card.Body>
            </Card>
            </Row><br/>
            <Row style={{ justifyContent: "center"}}>
            <Card className="educard">
                    <Card.Body>
                        {/* <Card.Img src={uecu} style={{height:'90%',width:'85%'}}/>        */}
                        <Card.Title>Tata Consultancy Services</Card.Title>
                        <Card.Subtitle className="mb-2">IT Analyst</Card.Subtitle>
                        <Card.Text> Dec 2016- Apr 2020  <br/>
                        <div style={{textAlign:'left'}}>
                                <ul>
                                    <li>Developed programs to automate SWIFT messages generation by extracting transaction details from the Banking Eximbills module.</li>
                                    <li>Implemented tools using bash and SQL to generate various monthly/quarterly financial reports depending on banking module involved.</li>
                                    <li>Involved in interfacing with clients for business requirement gathering, conducting system analysis, finalizing functional specifications. </li>
                                </ul>
                          </div>
                         </Card.Text>
                    </Card.Body>
            </Card>
            </Row>
    </Container>
  );
}

export default Experience;
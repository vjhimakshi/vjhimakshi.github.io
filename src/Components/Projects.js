import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';
import { AiFillGithub } from "react-icons/ai";
import '../css/style.css'
import uber from "../images/uber.jpeg";
import indeed from "../images/indeed.png";
import airline from "../images/airline.jpeg";

function Projects(){
    return(
        <Container id="projects">
                <h1 class="heading"><span>Projects</span> </h1>
                <Row style={{width:'90%'}}>
                <Col>
                <Card className="projcard">
                    <Card.Body>   
                    <Card.Img src={indeed} style={{height:"12vw", marginBottom:'2rem'}}/>
                        <Card.Title>Indeed Clone <Card.Link style={{float:'right'}} href="#">
                            <AiFillGithub         
                            className="social-icons"
                            sx={{ fontSize: 45 }}/></Card.Link>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Technologies: MERN Stack, Kafka, Redis, SQL, AWS, Passport.js, JWT</Card.Subtitle>
                        <Card.Text>
                            <div>
                                <ul>
                                    <li>Replicated Indeed's Multi-tier distributed and scalable infrastructure using message queues, caching, connection pooling, load balancer, and deployed on AWS EC2. </li>
                                    <li>Increased throughput from 150 requests/minute to 4000 requests/minute while handling a load of 500 concurrent users fetching 10,000 messages simultaneously. </li>
                                </ul>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                <Card className="projcard">
                    <Card.Body>
                        <Card.Img src={uber} style={{height:"12vw", marginBottom:'2rem'}}/>       
                        <Card.Title>UberEats Clone <Card.Link style={{float:'right'}} href="#">
                            <AiFillGithub         
                            className="social-icons"
                            sx={{ fontSize: 45 }}/></Card.Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Technologies: MERN Stack, Redux, Kafka, AWS, Passport.js, JWT, GrapghQL </Card.Subtitle>
                        <Card.Text>
                        <div style={{textAlign:'left'}}>
                                <ul>
                                    <li>Developed Uber eats prototype for customer and restaurant personas with functionalities like order tracking, status update, food catalog, pagination search etc. </li>
                                    <li>Implemented various versions of the application with increasingly complex infrastructure to better understand the advantages and trade-offs of the availability and scalability.  </li><br/>
                                </ul>
                        </div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                <Card className="projcard">
                    <Card.Body>
                        <Card.Img src={airline} style={{height:"12vw", marginBottom:'2rem'}}/>       
                        <Card.Title>Airline Management System <Card.Link style={{float:'right'}} href="https://github.com/vjhimakshi/team-project-202Airlines">
                            <AiFillGithub         
                            className="social-icons"
                            sx={{ fontSize: 45 }}/></Card.Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Technologies: React JS,Node.js, MySQL, AWS EC2</Card.Subtitle>
                        <Card.Text>
                        <div style={{textAlign:'left'}}>
                                <ul>
                                    <li>Built a web service that provides and manages various airline activities like booking facility, mileage account, booking history etc.</li>
                                    <li>Created wireframes, maintained Agile document aloong with its core values and complete application is deployed on AWS EC2.</li><br/><br/>
                                </ul>
                        </div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
    )
}

export default Projects;
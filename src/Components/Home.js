import Particle from './Particle2';
import React from "react";
import Typewriter from 'typewriter-effect';
import {Row,Col} from 'react-bootstrap';
import '../css/style.css'
import himakshi from "../images/himakshi.png";

function Home() {
    return (
        <div id ="home" style={{marginTop:"130px"}}>
            <Particle />
            <Row>
                <Col>
                <img src={himakshi} style={{width:'60%',border:'.1rem solid #8a2be2',borderRadius:'50%',background:'white',padding:'0'}} alt="Himakshi"/>       
                </Col>
                <Col className="contact" style={{height:'25vw',
                marginRight:'5rem',width:'50%', marginTop:'1%'}}>
                <h1><Typewriter
                    options={{
                        strings: ['Hello','Hi','Namaste','Hola'],
                        autoStart: true,
                        loop: true,
                    }}/> World! <br/>
                I'm <span style={{color:'#632695'}}> Himakshi Vijayvargiya</span>.
                </h1><br/>
                <div style={{textAlign:'left'}}><ul>
                    <li>Self-driven, result-oriented, and a quick learner with 3+ years of industry experience.</li>
                    <li>Pursuing a Master's degree in Software Engineering specializing in Networking Software.</li>
                    <li>Experience in full-stack and distributed system design.</li>
                    <li>Well-versed with Agile methodology, project execution tools, and version control tools.</li>
                    </ul></div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
import React from "react";
import { Container,Col, Row } from "react-bootstrap";
import {  DiReact, DiNodejs, DiCss3, DiHtml5,DiJavascript1 } from "react-icons/di";
import { SiRedux,SiJava, SiMongodb, SiMysql,SiAmazonaws,SiFigma, SiGithub } from "react-icons/si";
import '../css/style.css'


function Skills() {
	return (
		<Container fluid id ="skills">
		  <Container>
			<Row style={{ justifyContent: "center", padding: "10px" }}>
			  <Col
				md={7}
				style={{
				  justifyContent: "center",
				  paddingTop: "30px",
				  paddingBottom: "50px",
				}}
			  >
			  </Col>
			</Row>
			<h1 class="heading"><span>Skillset</span> </h1>
		<Row style={{ justifyContent: "center", paddingBottom: "50px",alignContent:'center'}} md="auto">
			<Col xs={4} md={2} className="tech-icons">
				<SiFigma />
				<p>Figma</p>
			</Col>
            <Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
				<p>HTML</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
				<p>CSS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
				<p>JavaScript</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
				<p>Node JS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedux />
				<p>React</p>
			</Col>
            <Col xs={4} md={2} className="tech-icons">
				<DiReact />
				<p>Redux</p>
			</Col>
            <Col xs={4} md={2} className="tech-icons">
				<SiJava />
				<p>Java</p>
			</Col>
            <Col xs={4} md={2} className="tech-icons">
				<SiMongodb />
				<p>MongoDB</p>
			</Col>
            <Col xs={4} md={2} className="tech-icons">
				<SiMysql />
				<p>MySQL</p>
			</Col>
            <Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
				<p>AWS</p>
			</Col>
            <Col xs={4} md={2} className="tech-icons">
				<SiGithub />
				<p>Github</p>
			</Col>
			</Row>
        </Container>
		</Container>
	);
}

export default Skills;

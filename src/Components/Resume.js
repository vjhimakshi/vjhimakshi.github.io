import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle2";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";

function Resume() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid>
				<Particle />
				<Row className="resume"  style={{ justifyContent: "center", position: "relative" }}>
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							Height="1056px"
							src="https://drive.google.com/file/d/1arUt3C4iUN4N4YmqwtkFtb5r7RXofz_F/preview"
						/>
					</Card>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						style={{background:'#632695'}}
						href={
							"https://drive.google.com/uc?export=download&id=1arUt3C4iUN4N4YmqwtkFtb5r7RXofz_F"
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default Resume;

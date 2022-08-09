import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import {MdEmail, MdPlace } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import '../css/style.css';

function Contact() {
  return (
    <section id="contact">
      <Container fluid >
      <h1 class="heading"><span>Get in Touch</span> </h1>
      <div class="contact mx-auto">
                <div>
                  <MdEmail
                    className="social-icons"
                    color="secondary"
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="mailto:himakshi.vijayvargiya@sjsu.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:'none',color:'black' }}
                  > <b>himakshi.vijayvargiya@sjsu.com</b>
                  </a>
                </div>
                <div>
                  <MdPlace
                    color="secondary"
                    className="social-icons"
                    sx={{ fontSize: 45 }}
                  /> <b> Cupertino, California</b>
                </div>
              <div>
                  <a
                    href="https://github.com/vjhimakshi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub         
                    className="social-icons"
                    sx={{ fontSize: 45 }}/>
                  </a> &nbsp;
                  <a
                    href="https://www.linkedin.com/in/himakshi-vijayvargiya/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn         
                    className="social-icons"
                    sx={{ fontSize: 45}}/>
                  </a>
                  </div>
                  </div>
      </Container>
    </section>
  );
}

export default Contact;

import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Sobre mí" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <h1 style={{textAlign: "left"}}>¿Quien soy?</h1>
                <p className="about-wrapper__info-text">
                  {'Tengo 21 años y una gran pasión por el desarrollo de páginas web.'}
                </p>
                <hr></hr>
                <p className="about-wrapper__info-text">
                  {
                    'Actualmente estoy en segundo año de '} 
                    <a href="asdasd.com">Licenciatura en sistemas de información en FACENA UNNE</a>
                    {' y me encuentro estudiando múltiples cursos de desarrollo frontend.'
                  }
                </p>
                <hr></hr>
                <h1 style={{textAlign: "left"}}>Tecnologías y Software</h1>
                <ul style={{fontSize:"1.6rem",paddingInlineStart:"2rem",textAlign: "left"}}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>C</li>
                  <li>Photoshop</li>
                </ul>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      CV
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

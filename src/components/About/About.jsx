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
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              
                <AboutImg alt="profile picture" filename={img} />
             
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hi, my name is Vishwanath Ezhil, I am a web developer and I live in New Jersey. I am currently pursuing my Masters in Business and Information Sytems from New Jersey Institute of Technology.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I am aspiring for a prolific career in Information Technology, with the right blend of passion, commitment, and interest in technological leadership. I believe in developing innovative business practice by leveraging technology, harnessing emerging concepts to fill gaps between latent needs and existing processes. My special areas of interest are cloud services and analytics.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Some of my hobbies include Photography and Cycling.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href='https://www.scribd.com/document/503199178/Resume-Vishwanath-Ezhil'
                    >
                      Resume
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

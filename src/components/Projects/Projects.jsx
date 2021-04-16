import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import Logo from '../../images/react1.png';
import Logo1 from '../../images/combo4.png';
import Logo2 from '../../images/node.png';
// import Logo3 from '../../images/react1.png';


const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, img2, id } = project;

            return (
              <Row key={id}>
                <Col >
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <Col >
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
                          <div style={{paddingTop:'20px'}}></div>
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        
                        <p>
                          {info ||
                            'Built a React application to book movie tickets for movies currently playing in theatres. Built a React application to book movie tickets for movies currently playing in theatres.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      
                       <div style={{marginBottom:'15px', display:'inline-block'}}>
                          <h2 style={{ display:'inline-block'}}>Technologies Used: </h2>
                            <img src={Logo} width='50px' height='50px' style={{ marginLeft:'15px'}} ></img>
                            <img src={Logo1} width='150px' height='50px'style={{marginLeft:'15px'}}></img>
                            {/* <img src={Logo2} width='50px' height='50px' style={{marginLeft:'15px'}}></img> */}
                          </div> 
                          </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                         Live Build
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                   
                  </Fade>
                </Col>
                
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

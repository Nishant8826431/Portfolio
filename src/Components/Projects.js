import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/project-img1.png'

export const Projects = () => {
  const project = [
    {
      title: "E-commerce Frontend",
      description: "Design & Development",
      imgUrl: projImg1,
      http:"#"
    },
    {
      title: "To-do list",
      description: "Design & Development",
      imgUrl: projImg1,
      http:"#"
    },
    {
      title: "CRUD from full stack",
      description: "Design & Development",
      imgUrl: projImg1,
      http:"#"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      http:"#"
    },
    
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          
            <div className="animate__animated animate__slideInUp">
            <h2>Projects</h2>
            <p>Here are my Projects</p>
            </div>           
            <Tab.Container id="projects-tab" defaultActiveKey="First">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="First">Tab one</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Second">Tab two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Third" >
                  Tab three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="First">
                    <Row>
                        {
                            project && project.map((item , index)=>{
                                return(
                                    <ProjectsCard  key={index} {...item}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="Second">
                   <Row>
                   
                           {"There is no Projects . It will be updated soon...."}
                        
                   </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="Third">{"There is no Projects . It will be updated soon...."}</Tab.Pane>

            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}/>
    </section>
  );
};

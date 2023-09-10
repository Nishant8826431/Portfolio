import { logDOM } from "@testing-library/react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum , setLoopNum] = useState(0)
  const [isDeleting , setIsDeleting] = useState(false);

  const toRorate = ['Web Developer' , 'Full stack Developer' , 'MERN stack Developer' ]
  const [text , setText] = useState('');
  const [delta , setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  var tick = () =>{
    let i = loopNum % toRorate.length;
    let fullText = toRorate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta / 2);
    }
    if(!isDeleting && updateText === fullText){
      setIsDeleting(true);
      setDelta(period)
    }else if(isDeleting && updateText ===  ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick()
    }, delta)
    return()=>{clearInterval(ticker)};
  } , [text])


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} ms={6} xl={7}>
           
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {" "}
              {`Hi I'm Nishant `}
              <span className="wrap"><br/>{text} </span>{" "}
            </h1>
            <p>
              Highly motivated and enthusiastic web developer with a passion for
              creating innovative and user-friendly websites. Seeking a
              challenging position as a web developer in a dynamic organization
              to kick-start my career and contribute to the development of
              cutting-edge web solutions.
            </p>
            <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
            
            
          </Col>

          <Col xs={12} ms={6} xl={5}>
            <img src={headerImg} alt=""/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

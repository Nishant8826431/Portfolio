import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = ()=>{
    const formInitialDetails = {
        firstName : "",
        lastName : "",
        email : "",
        phone : "", 
        message : ""
    }
    const [formDetails , setFromDetails] = useState(formInitialDetails);
    const [buttonText , setButtonText] = useState('send');
    const [status , setStatus] = useState({});

    const onFormUpdate = (category , value)=>{
        setFromDetails(
            {
                ...formDetails, [category] : value
            }
        )
    }

    const  handleSubmit = (e)=>{
               e.preventDefault()
            console.log(formDetails);

            setFromDetails(formInitialDetails)

            
    }

    


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={contactImg}/>
                    </Col>
                    <Col md={6}>
                        <h2>
                            Get in touch
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="First Name" value={formDetails.firstName} onChange={(e)=>onFormUpdate("firstName" , e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" placeholder="Last Name" value={formDetails.lastName} onChange={(e)=>onFormUpdate("lastName" , e.target.value)}/>

                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" placeholder="email" value={formDetails.email} onChange={(e)=>onFormUpdate("email" , e.target.value)}/>

                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" placeholder="Phone no." value={formDetails.phone} onChange={(e)=>onFormUpdate("phone" , e.target.value)}/>

                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate("message" , e.target.value)} >

                                    </textarea>

                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    {
                        status.message && <Col><p className={status.success === false ? "danger" : "success"}>{status.message}</p></Col>
                    }
                </Row>
            </Container>
        </section>
    )
}
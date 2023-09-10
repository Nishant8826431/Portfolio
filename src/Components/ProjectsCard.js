import { Col } from "react-bootstrap"

export const ProjectsCard = ({title , description , imgUrl , http})=>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a className="text-white" href={http}><img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                </a>
            </div>
        </Col>
    )
}
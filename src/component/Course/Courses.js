import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import './Courses.css'
import { BsFillStarFill } from "react-icons/bs";

function Courses (props) {
  
  return (
    <div className='my-5'>
      <Container>
        <Row className='justify-content-center align-items-center flex-wrap mx-5 px-5'>
          {props.data.map((ele, ind) => {
            return (
              <Col md={4} key={ind} >
                <Card style={{ maxWidth:'24rem' }} className='m-auto my-3'>
                  <Card.Img variant='top' src={ele.img} />
                  <Card.Body>
                    <Card.Title className='py-1 text-start fw-bold'>{ele.name}</Card.Title>
                    <div className="CardText d-flex justify-content-between pt-3 pb-2 border-top">
                        <div className="stars" style={{color:'yellow'}}>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        </div>
                    <Button variant='primary' style={{background :'#003366'}} className='border-0'>Know More..!</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
      <button className='Btn'>View All Couses</button>
    </div>
  )
}
export default Courses

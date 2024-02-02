import { Col, Container, Row, Card } from 'react-bootstrap'
import './WhyChoose.css'
import Title from '../Title/Title.js'
function WhyChoose (props) {
  
  return (
    <div style={{background: '#f7f7f7'}}>
      <Title SubName='READ OUR DIFFERENCE' Name={'WHY CHOOSE CREATIVE'}></Title>
      <Container>
        <Row className='px-4 mx-5'>
          {props.data.map((ele, ind) => {
            return (
              <Col key={ind} lg={4} className='my-3 '>
                <Card style={{ maxWidth: '24rem' ,margin:'auto'}} className='border-0 chooseCard' >
                  <div class={ele.className} id={ele.id} >
                    <Card.Img  src={ele.img}  />
                  </div>
                  <Card.Body>
                    <Card.Title>{ele.name}</Card.Title>
                    <Card.Text className='px-3'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
export default WhyChoose

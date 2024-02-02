import { Col, Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'

function Demand (props) {
 
  return (
    <div className='px-5 mx-5'>
      <Container>
        <Title
          SubName='Our Demanded Courses -'
          class='text-start fw-bold fs-5'
        ></Title>
        <Row className='flex-wrap text-start'>
          {props.data.map((ele, ind) => {
            return (
              <Col md={4} className='pt-1 px-1'>
                <p key={ind} className='p-1 m-0 border'>
                  <a style={{fontSize:'14px'}}>{ele.name}</a>
                </p>
              </Col>
            )
          })}
        </Row>
        <p className='text-start'>
          <a>Show More</a>
        </p>
      </Container>
    </div>
  )
}
export default Demand

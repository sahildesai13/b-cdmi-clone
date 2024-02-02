import { Col, Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'
import { FaQuoteRight } from 'react-icons/fa'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './Alumani.css'
function Alumani (props) {
  return (
    <div>
      <Container>
        <Row className='mx-5 px-5'>
          <Col lg={6}>
            <Title
              Name={'ALUMANI SPEAK'}
              SubName={'HAPPY STUDENTS'}
              class='text-start'
            ></Title>
            <div className='imgPart d-flex justify-content-between align-items-center'>
              <FaQuoteRight style={{ color: '#ebebeb', fontSize: '70px' }} />
            </div>
            <div className='sliderBtn'></div>
            <div className='SliderA mt-2'>
              <OwlCarousel
                className='owl-theme'
                loop
                nav={true}
                items={1}
                dots={false}
              >
                {props.data.map((ele, ind) => {
                  return (
                    <div class='item' key={ind}>
                      <p
                        className=''
                        style={{ color: 'grey', textAlign: 'justify' }}
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Accusamus obcaecati iste corporis cumque deserunt
                        corrupti perferendis optio quam, fuga nobis cupiditate
                        ullam eveniet odio voluptates, possimus ab? Neque, non
                        ad!
                      </p>
                      <div className='stdDtl d-flex align-items-center justify-content-start '>
                        <div className='stdImg'>
                          <img src={ele.img}  />
                        </div>
                        <div className='text-start ms-4'>
                          <p className='mb-1'>{ele.name}</p>
                          <p style={{ fontStyle: 'italic', color: 'yellow' }}>
                            {ele.post}{' '}
                            <span style={{ color: 'grey' }}>@ {ele.at} </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </OwlCarousel>
            </div>
          </Col>
          <Col lg={6}>
            <div className="AImgCover">
                <img src={require(`./img/SahiLImg.jpg`)} width={'100%'}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Alumani

import { Col, Container, Row } from 'react-bootstrap'
import './AboutUs.css'
function AboutUs () {
  return (
    <div className='my-5 py-5'>
      <Container fluid >
        <Row>
          <Col lg={7} className='p-0'>
            <div
              className='aboutDtlCover position-relative  h-100'
              width={'100%'}
            >
              <div
                className='aboutDtl position-absolute top-0 start-0 '
                style={{ padding: '10% 7%' }}
              >
                <div className='aboutTitle text-start'>
                  <h6 className='fw-normal'>ABOUT US</h6>
                  <h6 className='fw-bold'>
                    IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!
                  </h6>
                </div>
                <div className='aboutBody'>
                  <p
                    className='line-height-lg'
                    style={{ textAlign: 'justify' }}
                  >
                    Creative Design & Multimedia Institute(CDMI) is a reputed
                    training institute in Gujarat for Data Science, Machine
                    Learning, Blockchain Development, AR/VR Game Development,
                    Full Stack Web Development, Web Design, Game Design, Mobile
                    App Development, Video Editing & All types of IT Courses
                    with 10 years of full-fledged, result-oriented training
                    experience. We stepped in the market in 2014 with the goal
                    to help students, working professionals and other interested
                    candidates get that dream job or open that desired freelance
                    business in some of the most popular Computer / IT fields.
                    Our aim is to ease the hiring process for businesses and
                    organizations by providing work-ready professionals who can
                    contribute greatly to their success. Since then, we have
                    worked hard to achieve this goal and dedicated our time and
                    resources to train students extensively.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} className='p-0'>
            <div className='imgCover'>
              <img src={require(`./img/about.webp`)} width={'100%'} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default AboutUs

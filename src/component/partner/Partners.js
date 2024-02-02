import { Container } from 'react-bootstrap'
import Title from '../Title/Title'
import './Partners.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

function Partners (props) {
 

  const respon = {
    0: {
      items: 1,
      nav: true
    },
    375: {
      items: 2,
    },
    425: {
        items: 3,
      }
      
  }
  return (
    <div className='px-5 mx-5'>
      <Title
        SubName='STUDENT PLACEMENT'
        Name='OUR RECRUITMENT PARTNERS'
      ></Title>
      <Container>
        <OwlCarousel
          className='owl-theme'
          loop
          margin={10}
          nav={false}
          dots={false}
          items={6}
          {...respon}
          autoPlay
          autoplayTimeout={1000}
        >
          {props.data.map((ele, ind) => {
            return (
              <div class='item m-auto border' key={ind}>
                <img src={ele.img} className='partnerItem m-auto'/>
              </div>
            )
          })}
        </OwlCarousel>
      </Container>
    </div>
  )
}
export default Partners

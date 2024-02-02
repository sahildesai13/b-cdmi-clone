import Carousel from 'react-bootstrap/Carousel';
import './Slider1.css';
import { Container } from 'react-bootstrap';
function Slider1(props) {
    return (
        <div>
            <Container fluid>
                <Carousel fade>
                    {
                        props.data.map((ele, ind) => {
                            return (
                                <Carousel.Item key={ind}>
                                    <img src={ele.image} width={'100%'} />
                                </Carousel.Item>
                            );
                        })
                    }
                </Carousel>
            </Container>
        </div>
    );
}
export default Slider1;
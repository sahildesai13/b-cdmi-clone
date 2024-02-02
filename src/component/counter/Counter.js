import { Col, Container, Row } from "react-bootstrap";
import './counter.css';
function Counter(props) {

    return(
      <div className="py-5 ">
        <Container fluid >
            <div className="CounterCover">
                <div className="counter text-white py-5 ">
                    <Row>
                        {
                            props.data.map((ele,ind)=>{
                                return(
                                    <Col key={ind}>
                                        <div className="countDtl">
                                            <img src={ele.img} width={'80px'} />
                                            <h4 className="py-2 fw-bold">{ele.num}</h4>
                                            <p className="fw-bold">{ele.name}</p>
                                        </div>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </div>
            </div>
        </Container>
      </div>  
    );
}
export default Counter;
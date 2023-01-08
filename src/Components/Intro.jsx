import {Col, Container, Row} from 'react-bootstrap';

const IntroApp = () => {
    return(
        <div>
            <Container>
                <Col>
                    <Row>
                        <div id='home' style={{fontWeight : "500", fontSize : "18px", margin : "auto"}}>
                            <h1>JKT 48</h1>    
                        </div>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default IntroApp
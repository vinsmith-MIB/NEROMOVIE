import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='welcome d-flex justify-content-center align-item-center '>
                <Row>
                    <Col>
                        <div className='title'>MOVIE BAJAKAN</div>
                        <div className='title'>KUALITAS GA MURAHAN</div>
                        <div className='introButton mt-4'>
                            <Button >TONTON SEMUA DISINI</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro;
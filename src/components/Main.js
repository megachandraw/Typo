import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export const Main = () => {
  return (
    <div>
    <Container className='mt-3'>
      <Row className='m-2'>
        <Col>
        <h5>Ketentuan : </h5>
        <p>Career-focussed curriculum

Develop skills in computing with a strong programming and mathematics focus, plus project management, presentation skills and teamwork.
	Quality teaching

Gain the same academic direction and expertise as provided on campus.
	Affordable Excellence

Fees are structured to take account of your geographic location; pay-as-you-go each time you take a module.</p>
        </Col>
      </Row>
      <Row className='m-2'>
        <Col>
        <h5>Rekomendasi : </h5>
        <p>Career-focussed curriculum

Develop skills in computing with a strong programming and mathematics focus, plus project management, presentation skills and teamwork.
	Quality teaching

Gain the same academic direction and expertise as provided on campus.
	Affordable Excellence

Fees are structured to take account of your geographic location; pay-as-you-go each time you take a module.</p>
        </Col>
      </Row>
    </Container>
    <Form className='m-4'>
      <Row>
        <Col className='container-typo'>
            <h5 className='typo-text'>Masukkan Teks disini : </h5>
            <textarea className='box-typo'></textarea>
        </Col>
        <Col className='container-typo'>
        <h5 className='typo-text'>Hasil Cek Typo : </h5>
            <textarea className='box-typo'></textarea>
        </Col>
      </Row>
    <Button className='button-typo'>Lihat Hasil</Button>{' '}
    </Form>
    </div>
  );
}

// export default Main;
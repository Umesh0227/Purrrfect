import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="WhatsApp Image 2024-09-05 at 19.14.49_519a75fa.jpg" className="card1"/>
      <Card.Body>
        <Card.Title>Fawn persian cat</Card.Title>
        <Card.Text>
          Furry cat with a lots of nakhre .
        </Card.Text>
        <Button variant="primary">Make it yours</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
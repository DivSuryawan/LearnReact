import {Card, Button} from 'react-bootstrap';

const CardService =(props) =>{
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image}  />
        <Card.Body>
          <Card.Title>{props.service}</Card.Title>
          <Card.Text>{props.deskripsi}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}
export default CardService;
import {Card} from 'react-bootstrap';

const CardShop =(props) =>{
    return (
      <Card>
        <Card.Img variant="top" src={props.image} style={{ height: "10rem" }} />
        <Card.Body>
          <Card.Text>{props.deskripsi}</Card.Text>
        </Card.Body>
      </Card>
    );
}
export default CardShop;
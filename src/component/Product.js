import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () =>{
    const url = "https://fakestoreapi.com/products";
    const [products, setProduct] = useState([]);

    const getDataProduct = async() =>{
        let respon = await fetch(url);
        let dataProduct = await respon.json();
        setProduct(dataProduct);
    }
    useEffect( () => {
        getDataProduct();
    })

    return (
      <>
        <div className="container">
          <div className="row">
            <h1>My Product</h1>
            {products.map((product) => {
                return(
                    <div className="col-3">
                        <CardProduct 
                            key={product.id} 
                            title={product.title} 
                            price={product.price}
                            desc={product.description}
                            img={product.image} />
                    </div>
                )}
            )}
          </div>
        </div>
      </>
    );
}
function CardProduct(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} style={{ height :'300px' }} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.desc}
          <p>Price : {props.price}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import '../assets/styles/ProductScreen.css';
import axios from "axios";


const ProductScreen = () => {

    const { id: productId } = useParams(); 
    const [product, setProduct] = useState({});

    useEffect(() => {
      console.log(productId);
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        };
        fetchProduct();
    }   , [productId]);

    

    return (
        <>
          <Link to="/" className="btn btn-light my-3">
            Go Back
          </Link>
    
          <Row>
            <Col md={5}>
              {product && product.image && (
                <Image src={product.image} alt={product.name} fluid />
              )}
            </Col>
    
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3 className="product-title">{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item className="rating-section">
                  <Rating value={product.rating} />
                  <span className="review-count">{product.numReviews} reviews</span>
                </ListGroup.Item>
                <ListGroup.Item className="price-section">
                  Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item className="description-section">
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
    
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
          </Row>
        </>
    );
};

export default ProductScreen;

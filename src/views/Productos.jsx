import { Card, Button } from 'react-bootstrap';
import './productos.css';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of product 1',
        price: 10.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of product 2',
        price: 19.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of product 3',
        price: 7.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of product 3',
        price: 7.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of product 3',
        price: 7.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of product 3',
        price: 7.99,
        image: 'https://via.placeholder.com/150',
    },
];

const ProductList = () => {

    const navigate = useNavigate();

    const navigateProducto = (id) => {
        navigate(`/Producto/${id}`);
    };
    

return (
    <>
        <div className='container-cards' >
            <h1 className='text-productos'>Conoce nuestros productos</h1>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-2">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text variant="primary">${product.price}</Card.Text>
                                <Button variant="primary">Add</Button>
                                <Button onClick={() => navigateProducto(product.id)} variant="primary">Ver detalles</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    </>
);
};

export default ProductList;

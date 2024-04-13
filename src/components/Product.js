import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Products() {
  const Notify = () => {
    toast("Item Added to cart");
  };

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => setProducts(result));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
    Notify();
  }

  const cards = products.map(product => (
    <div className='col-md-3 mb-4' key={product.id}>
      <Card style={{ height: '100%', boxShadow: '2px 8px 16px 2px rgba(0,0,0,0.4)' }}>
        <div className='text-center' style={{ height: '200px' }}>
          <Card.Img 
            variant="top" 
            src={product.image} 
            className="card-img-top" 
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
          />
        </div>
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{product.title}</Card.Title>
          <Card.Text style={{ color: 'black' }}>
            INR: {product.price}
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="dark" onClick={() => addToCart(product)}>Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div style={{ backgroundColor: '#CF9FFF', color: 'white' }}>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> 
      <Header />
      <h1 style={{ color: 'black', textAlign: 'center' }} >our products</h1>
      <div className='row'>
        {cards  || <Skeleton/>}
      </div>
    </div>
  )
}
   
export default Products;









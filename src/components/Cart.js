import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css'; // Import your CSS file with the styles

function Cart() {
  const Notify = () => {
    toast("Item removed from cart");
  };
  const product = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const RemoveCart = (id) => {
    dispatch(remove(id));
    Notify();
  };

  const cards = product.map(products => (
    <div className='col-md-3' key={products.id}>
      <Card style={{ height: '100%' }}>
        <div className='text-center' style={{ height: '200px' }}>
          <Card.Img 
            variant="top" 
            src={products.image} 
            className="card-img-top" 
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
          />
        </div>
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>
            INR:{products.price}
          </Card.Text>
          <div className="d-flex justify-content-center">
          <Button variant="danger" onClick={() => RemoveCart(products.id)}>Remove item</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
   <div style={{ backgroundColor: '#CF9FFF', color: 'white' }}>
    <div className='row'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {cards}
    </div>
    </div>
  );
}

export default Cart;


import React from 'react';
import './Header.css'; // Import your CSS file with the styles

function Footer() {
  return (
    <section id="footer">
    <footer className="footer">
      <div className="container">
        <div className="row">
            <div className='d-flex justify-content-center' style={{marginLeft:'180px'}}>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2024 Your Company. All Rights Reserved. by sai@akula</p>
      </div>
    </footer>
    </section>
  );
}

export default Footer;

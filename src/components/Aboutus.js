import React from 'react';

const AboutUs = () => {
    return (
        <section id="about">
        <div className="about-us-section" style={{ backgroundColor: '#CF9FFF' }}>
            <div className="container">
                <h2 className="card-title" style={{ textAlign: 'center' }}>About Us</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card" style={{ marginTop: '30px', boxShadow: '2px 8px 16px 2px rgba(0,0,0,0.8)' }}>
                            <div className="card-body">
                                <p className="card-text">Welcome to our online ecommerce store! We're committed to providing top-quality products and exceptional customer service. Our mission is to make online shopping convenient, enjoyable, and secure for every customer. Whether you're looking for electronics, fashion, home decor, or health and beauty products, we've got you covered!</p>
                                <p className="card-text">We strive to exceed your expectations with our exceptional customer service and prompt delivery. Join us in our journey and discover the convenience of shopping with Brado Ecommerce!</p>
                                <a href="#home" className="btn btn-primary">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default AboutUs;





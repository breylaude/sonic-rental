import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from 'axios';

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/profile.php?id=61551613722978",
    icon: "ri-facebook-line",
  },
  {
    url: "",
    icon: "ri-whatsapp-line",
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server's endpoint
      await axios.post('/send-email', formData);

      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Display a success message or handle redirection
      alert('Message sent successfully');
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the message');
    }
  };


  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit}>
              <FormGroup className="contact__form">
                <Input
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="contact__form">
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="contact__form">
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </FormGroup>
              <button className="contact__btn" type="submit">
                Send Message
              </button>
            </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Brgy. San Miguel, Puerto Princesa City, Palawan 5300
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">(0936)-567-1353</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">example@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Or You Can Reach Us Via</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;

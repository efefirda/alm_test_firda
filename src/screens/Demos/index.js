import React, { useState } from 'react';
import '../../App.css';
import Header from '../../components/Header';
import Text from '../../components/Text';
import IMG_BOTTOM from '../../assets/image/bottom-image.png';
import { Button, Col, Row } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import StickyMenu from './StickyMenu';

const Demos = () => {
  return (
    <div className="main-container">
      <Header />
      <Row noGutters className="justify-content-center mt-32">
        <Col md={8} className="text-center">
          <h2 className="text-white">Catering should be an experience</h2>
          <h1 className="text-white">
            We use only the finest and fhreshest ingredients
          </h1>
          <h6 className="mt-32 text-white">
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vestibulum euismod efficitur. Praesent sodales purus et magna
              rutrum, ac finibus lectus gravida.
            </i>
          </h6>
          <Button className="cta-button mt-32" variant="success">
            Request a Quote <FaChevronRight size={10} color="#fff" />
          </Button>
        </Col>
      </Row>
      <img id="bottom-image" src={IMG_BOTTOM} alt="" />
      <Row noGutters id="bottom-section" className="jusify-content-center">
        <Col md={8} style={{ width: 500 }} className="text-center">
          <h2>Catering should be an experience</h2>
          <h1>We use only the finest and fhreshest ingredients</h1>
          <h6 className="mt-32">
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vestibulum euismod efficitur. Praesent sodales purus et magna
              rutrum, ac finibus lectus gravida.
            </i>
          </h6>
        </Col>
      </Row>
      <StickyMenu />
    </div>
  );
};

export default Demos;

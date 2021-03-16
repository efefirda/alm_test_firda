import React, { useState, Fragment } from 'react';

import {
  Dropdown,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Row,
  Col,
  FormControl,
  Button,
} from 'react-bootstrap';
import {
  FaChevronDown,
  FaShoppingCart,
  FaSearch,
  FaBars,
} from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      {isOpen && (
        <div className="menu-dropdown">
          <Row noGutters>
            <Col>
              <ul>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
              </ul>
            </Col>
          </Row>
        </div>
      )}
      <header class="header">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <Row
          noGutters
          className="menu-desktop align-items-center"
          style={{ height: '100%' }}
        >
          <Col md={4}>
            <Row noGutters className="justify-content-end">
              <div
                onClick={() => (window.location.href = '/')}
                className="d-flex mr-24 align-items-center"
              >
                <span className="mr-8">Demos</span> <FaChevronDown size={10} />
              </div>
              <div className="d-flex mr-24 align-items-center">
                <span className="mr-8">Pages</span> <FaChevronDown size={10} />
              </div>
              <div
                className="d-flex align-items-center"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onClick={() => (window.location.href = '/portfolio')}
              >
                <span className="mr-8">Portfolio</span>{' '}
                <FaChevronDown size={10} />
              </div>
            </Row>
          </Col>
          <Col>
            <Row
              noGutters
              className="justify-content-end align-items-center pr-4"
            >
              <FaShoppingCart size={16} className="mr-24" />
              <FaSearch size={16} className="mr-24" />
              <input id="search" />
            </Row>
          </Col>
        </Row>
        <ul class="menu">
          <li>Demos</li>
          <li>Pages</li>
          <li>Portfolio</li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import Text from '../../components/Text';
import { Col, Row } from 'react-bootstrap';
import { FaBox } from 'react-icons/fa';
import Header from '../../components/Header';
const ProgressRing = (props) => {
  const { radius = 160, stroke = 30, progress, title } = props;

  let normalizedRadius = radius - stroke * 2;
  let circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (-Math.abs(progress) / 100) * circumference;

  return (
    <div style={{ position: 'relative' }} className="text-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#564247"
          fill="transparent"
          strokeWidth={stroke / 2}
          stroke-width={stroke / 2}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#f07a82"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{
            strokeDashoffset,
            transform: 'rotate(-90deg)',
          }}
          stroke-width={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: 120,
          left: 140,
        }}
      >
        <Text size="headline" color="#f07a82" bold>
          {progress}%
        </Text>
      </div>
      <div>
        <Text size="title" color="#f07a82" bold>
          {title}
        </Text>
      </div>
    </div>
  );
};

const ProgressBar = (props) => {
  const { progress, title } = props;
  const width = progress + '%';
  return (
    <div className="p-24">
      <Row noGutters style={{ width: '100%' }} className="align-items-center">
        <div style={{ width: '80%', paddingRight: 24, position: 'relative' }}>
          <div className="bar-secondary" style={{ width: '100%' }}></div>
          <div className="bar" style={{ width: width }}></div>
        </div>
        <Text size="headline" color="#564247">
          {progress}%
        </Text>
      </Row>
      <Text size="title" color="#9f818b">
        {title}
      </Text>
    </div>
  );
};

const Box = () => {
  return (
    <div
      style={{
        background: '#372a2e',
        width: 300,
        padding: 24,
      }}
    >
      <div>
        <FaBox color="#a3868e" size={48} />
      </div>
      <div className="mt-32">
        <Text size="subtitle" color="#f07a82" bold>
          Design
        </Text>
      </div>
      <div className="mt-16">
        <Text color="#a3868e" size="small">
          Lorem ipsum sit dolor amet ipsum sit dolor amet Lorem ipsum sit dolor
          amet ipsum sit dolor amet
        </Text>
      </div>
    </div>
  );
};
const Portfolio = () => {
  const [progress, setProgress] = useState(10);

  return (
    <div className="main-container">
      <Header />
      <div style={{ background: '#312828' }}>
        <Row noGutters>
          <Col
            md={2}
            style={{
              background: '#404040',
              height: 600,
            }}
            className="align-items-center justify-content-center d-flex"
          >
            <Text color="white">My Portfolio</Text>
          </Col>
          <Col md={6}>
            <Row noGutters>
              <Col md={6} className="justify-content-end d-flex pr-12">
                <Box />
              </Col>
              <Col md={6} className="pl-12">
                <Box />
              </Col>
            </Row>
            <Row noGutters className="mt-24">
              <Col md={6} className="justify-content-end d-flex pr-12">
                <Box />
              </Col>
              <Col md={6} className="pl-12">
                <Box />
              </Col>
            </Row>
          </Col>
          <Col md={4} className="p-24">
            <Text size="title" color="#f07a82" bold>
              Services
            </Text>
            <div>
              <Text color="#a3868e">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas felis lorem, placerat sit amet auctor eget, maximus nec
                est. Maecenas vulputate commodo nisi,
              </Text>
            </div>
            <div className="mt-24">
              <Text color="#a3868e" size="small">
                Praesent ante velit, ultrices nec varius vitae, posuere at quam.
                Donec sed iaculis nisl, ac tempus urna. Etiam vel arcu sem.
                Vivamus ornare nunc vel lorem aliquam, at tincidunt risus
                varius. Phasellus faucibus a erat vitae eleifend. Vivamus a
                gravida sem. Mauris pretium dolor feugiat ipsum ullamcorper,
                vitae dapibus dui consectetur. Duis lobortis mi in felis
                vulputate ullamcorper. Mauris laoreet, nunc vitae lacinia
                convallis, nulla nibh imperdiet lectus, eu luctus risus tellus
                eu libero.
              </Text>
            </div>
            <Row noGutters className="mt-24 ">
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  boxShadow: 'none',
                  background: 'none',
                  border: 'solid 1px #f07a82',
                  padding: '8px 24px',
                  color: 'white',
                  fontSize: 12,
                }}
                className="mr-24"
              >
                Download CV
              </button>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  boxShadow: 'none',
                  background: 'none',
                  border: 'solid 1px #f07a82',
                  padding: '8px 24px',
                  color: 'white',
                  fontSize: 12,
                }}
              >
                Download CV
              </button>
            </Row>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <ProgressRing progress={57} title="creativity" />
          </Col>
          <Col>
            <ProgressRing progress={60} title="creativity" />
          </Col>
          <Col>
            <ProgressRing progress={74} title="creativity" />
          </Col>
          <Col>
            <ProgressRing progress={31} title="creativity" />
          </Col>
        </Row>
        <Row noGutters>
          <Col md={6}>
            <ProgressBar progress={80} title="creativity" />
          </Col>
          <Col md={6}>
            <ProgressBar progress={70} title="creativity" />
          </Col>
        </Row>
        <Row noGutters>
          <Col md={6}>
            <ProgressBar progress={60} title="creativity" />
          </Col>
          <Col md={6}>
            <ProgressBar progress={50} title="creativity" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;

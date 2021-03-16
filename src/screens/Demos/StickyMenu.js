import React, { useState } from 'react';
import {
  FaChevronRight,
  FaChartPie,
  FaPhone,
  FaMailBulk,
  FaHome,
  FaServer,
  FaUser,
} from 'react-icons/fa';

const StickyMenu = () => {
  const [hover, setHover] = useState('');
  const [active, setActive] = useState('');

  const menu = [
    { icon: <FaChartPie />, tooltip: 'Lorem ipsum ' },
    { icon: <FaPhone />, tooltip: 'Lorem ipsum sit' },
    { icon: <FaMailBulk />, tooltip: 'Lorem' },
    { icon: <FaUser />, tooltip: 'Lorem ipsum sit' },
    { icon: <FaServer />, tooltip: 'Lorem ipsum sit' },
    { icon: <FaHome />, tooltip: 'Lorem ipsum sit' },
  ];
  return (
    <div id="sticky-menu">
      {menu.map((v, i) => {
        return (
          <div
            className="icon-container"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover('')}
            onClick={() => setActive(i)}
            style={{
              background:
                active === i ? '#f5f5f5' : hover === i ? '#edfdf5' : 'none',
            }}
          >
            <div
              style={{
                color:
                  active === i ? '#88a065' : hover === i ? 'green' : '#7b7b7b',
              }}
            >
              {v.icon}
            </div>
            {hover === i && (
              <div className="sticky-tooltip-menu">{v.tooltip}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StickyMenu;

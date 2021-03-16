import React from 'react';

const Text = ({ className, color, size, bold, style, children, ...rest }) => {
  let classNameArr = [];
  let weightClass = 'weight-normal';
  if (size && availableSize.includes(size)) {
    classNameArr.push('text-' + size);
  }
  if (bold) {
    weightClass = 'weight-bold';
  }
  classNameArr.push(weightClass);

  return (
    <span
      className={className + ' ' + classNameArr.join(' ')}
      style={{ ...style, color: color, lineHeight: 2 }}
      {...rest}
    >
      {children}
    </span>
  );
};

const availableSize = ['headline', 'title', 'subtitle', 'normal', 'small'];

export default Text;

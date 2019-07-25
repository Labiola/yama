import React from 'react';
import classNames from 'classnames';
import { Size } from '../../commons/types';

interface TextProps {
  size?: Size;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Text(props: TextProps) {
  const { style, size = 6, children } = props;

  const classes = classNames({
    [`is-size-${size}`]: Boolean(size),
  });

  return (
    <span style={style} className={classes}>
      {children}
    </span>
  );
}

export default Text;

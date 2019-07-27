import React from 'react';
import classNames from 'classnames';
import { Colors, colorsMap, Sizes } from '../../commons/types';

interface ButtonProps {
  style?: React.CSSProperties;
  color?: Colors;
  size?: Sizes;
  loading?: boolean;
  outlined?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
function Button(props: ButtonProps) {
  const {
    style,
    onClick,
    color = 'primary',
    size = 'normal',
    loading = false,
    outlined = false,
    children,
  } = props;

  const classes = classNames({
    button: true,
    [colorsMap[color]]: true,
    'is-loading': loading,
    'is-outlined': outlined,
    [`is-${size}`]: true,
  });

  return (
    <button style={style} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

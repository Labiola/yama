import React from 'react';

interface BoxProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

function BoxList(props: BoxProps) {
  const { style, children } = props;

  return (
    <div style={style} className="box">
      {children}
    </div>
  );
}

export default BoxList;

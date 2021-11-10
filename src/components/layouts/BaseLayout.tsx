import React from 'react';

const mainStyle = {
  flex: 1,
};

const Main = ({ children }: { children: React.ReactNode }) => (
  <main style={mainStyle} className="section">
    {children}
  </main>
);

const baseLayoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

interface BaseLayoutProps {
  style?: React.CSSProperties;
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}
function BaseLayout(props: BaseLayoutProps) {
  const { style, header, children, footer } = props;

  return (
    <div style={{ ...baseLayoutStyle, ...style }}>
      {header}
      <Main>{children}</Main>
      {footer}
    </div>
  );
}

export default BaseLayout;

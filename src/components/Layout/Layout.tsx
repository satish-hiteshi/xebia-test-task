import React, { useEffect, FC, useRef, useState, useCallback } from 'react';
import { Global, css } from '@emotion/react';
import { Container } from 'theme-ui';
import Head from 'next/head';
import { Menu } from '../Menu';
import { LayoutProps } from 'src/interface/Layout';
import UserProvider from 'src/ContextProvider/User/UserProvider';


export const Layout: FC<LayoutProps> = ({ children }) => {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [headerHeight, setHeaderHeight] = useState(70); // default header height
  const menuRef =  useRef<HTMLDivElement | null>(null);

  const handlePageScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      prevScrollPos > currentScrollPos || currentScrollPos < headerHeight,
    );
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, headerHeight]);

  useEffect(() => {
    window.addEventListener('scroll', handlePageScroll);
    return () => {
      window.removeEventListener('scroll', handlePageScroll);
    };
  }, [handlePageScroll]);

  useEffect(() => {
    if (menuRef.current) {
      setHeaderHeight(menuRef.current.clientHeight);
    }
  }, [menuRef]);

  return (
    <>
    <UserProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400a500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            height: 100%;
          }
          body {
            overflow-x: hidden;
          }
        `}
      />
      <Container
        sx={{
          background: 'rgb(240, 240, 240)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        <Menu visible={visible} ref={menuRef} />
        <Container
          style={{
            padding: '25px',
            marginTop: `${headerHeight}px`,
            overflow: 'auto',
            flex: '1',
          }}
        >
          {children}
        </Container>
      </Container>
    </UserProvider>
    </>
  );
};

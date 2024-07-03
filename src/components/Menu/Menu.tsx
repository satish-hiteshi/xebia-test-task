import React, { forwardRef } from 'react';
import Link from 'next/link';
import { Avatar, Box, Container, NavLink } from 'theme-ui';
import { Logo } from '../Icons/Logo';
import { MenuProps } from 'src/interface/Menu';
import { UserContextType } from 'src/interface/user';
import UserContext from '../../ContextProvider/User/UserContext';

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const user: UserContextType = React.useContext(UserContext);
  const menuRef = ref as React.MutableRefObject<HTMLDivElement | null>;

  return (
    <Box
      as="menu"
      ref={menuRef}
      sx={{
        position: 'fixed',
        left: '0',
        top: props.visible ? '0' : `-${menuRef?.current?.clientHeight ?? 0}px`,
        width: '100%',
        background: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0 0 10px',
        display: 'flex',
        transition: 'top 0.3s',
        zIndex: 1,
      }}
    >
      <Container p={10} sx={{ flex: '1 auto' }}>
        <NavLink as={Link} href="/en/US">
          <Logo />
        </NavLink>
        <NavLink as={Link} href="/en/US/product" pl={20}>
          Product
        </NavLink>
        <NavLink as={Link} href="/en/US/about" pl={20}>
          About
        </NavLink>
      </Container>
        <Avatar
          data-testid="usericon"
          alt="User Profile"
          src={user.users  ? user.users.avatar : ''}
          sx={{
            margin: 10,
            width: 48,
            height: 48,
            padding: 1,
            backgroundColor: '#d8d8d8',
          }}
        />
    </Box>
  );
});

Menu.displayName = 'Menu';

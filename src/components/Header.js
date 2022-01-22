import React from 'react';
import styled from "styled-components";


function Header() {
    return (
      <div>
        header
        <a href="">
          <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
          <a></a>
        </Menu>
      </div>
    );
}

export default Header;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

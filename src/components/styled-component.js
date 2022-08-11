/** @format */

import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  color: rgb(196, 190, 190);

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const SidebarWrapper = styled.div`
  width: ${({open})=> open ? '300px' : '60px'};
  height: 100vh;
  background-color: #16171b;
`;

export const ContentWrapper = styled.div`
  flex-basis: 100%;
  height: 100vh;
  background-color: #f2f1f1;
`;

export const SidebarLogo = styled.div`
  padding: 10px;
  display: flex;
  border-bottom: 1px solid red;
  align-items: center;
  gap: 20px;
  .fullLogo {
    display: ${({open})=> open ? 'block' : 'none'};
  }
`
export const SidebarMenu = styled.div`
  

  
`;

export const List = styled.ul`

`
export const ListRow = styled.li`
  width: 100%;
  display: flex;
  height: 40px;
  padding: 20px 10px;
  align-items: center;
  gap: 10px;
  justify-content: center;
  border-bottom: 1px solid gray;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
  span {
    flex: 3;
    display: ${({ open }) => (open ? "inline" : "none")};
    font-size: 20px;
    :hover {
      color: #fff;
    }
  }

  a {
    color: rgb(196, 190, 190);
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    flex: 1;
    :hover {
      color: #fff;
    }
  }
  .arrowBottom {
    flex: 1;
    display: ${({ open }) => (open ? "inline" : "none")};
    font-size: 20px;
    cursor: pointer;
    text-align: center;
  }
`;

export const ChildMenu = styled.div`
  display: ${({ open }) => open ? 'flex' : 'none'};
  margin: 10px;
  align-items: center;
  width: 60%;
  margin-left: 50px;
  padding: 5px;
  cursor: pointer;
  border-bottom: 1px solid gray;
`
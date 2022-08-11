/** @format */
import React, { useState } from "react";
import { sidebarData } from "../components/sidebarData";
import Logo from "../accets/image/logo.svg";
import fullLogo from "../accets/image/fullLogo.svg";
import {BiCaretRight} from 'react-icons/bi'
import {
  Main,
  SidebarWrapper,
  ContentWrapper,
  SidebarLogo,
  SidebarMenu,
  List,
  ListRow,
  ChildMenu
} from "./styled-component";

export const Sidebar = () => {
  const [data, setData] = useState(sidebarData);
  const [isClicked, setIsClicked] = useState(false);
  const [isOPen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState([])

  const openSidebar = () => {
    setIsOpen(!isOPen);
  };
  const openChildMenu = (id) => {
    setIsClicked(!isClicked);
    setSelected(id)
  };

  return (
    <Main>
      <SidebarWrapper open={isOPen}>
        <SidebarLogo open={isOPen}>
          <a href='#' onClick={() => openSidebar()}>
            <img src={Logo} />
          </a>
          <a href='#' className='fullLogo'>
            <img src={fullLogo} width='120' />
          </a>
        </SidebarLogo>
        <SidebarMenu>
          <List>
            {data.map((value, index) => {
              return (
                <>
                  <ListRow isClicked ={isClicked} open={isOPen} key={index}>
                    <a href='#'>{value.icon}</a>
                    <span onClick={() => openChildMenu(value.id)}>
                      {value.title}
                    </span>
                    <i
                      href='#'
                      onClick={() => openChildMenu(value.id)}
                      className='arrowBottom'>
                      {value.arrow}
                    </i>
                  </ListRow>
                  {isClicked &&
                    value.children?.map((vl, ind) => {
                      if (value.id == selected)
                        return (
                          <ChildMenu open={isOPen}>
                            <BiCaretRight/>
                            <a>{vl.child}</a>
                          </ChildMenu>
                        );
                    })}
                </>
              );
            })}
          </List>
        </SidebarMenu>
      </SidebarWrapper>
      <ContentWrapper>123</ContentWrapper>
    </Main>
  );
};

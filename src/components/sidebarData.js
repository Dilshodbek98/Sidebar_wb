import React from "react";
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import {MdWorkOutline} from 'react-icons/md'
import { AiFillContacts } from "react-icons/ai";
export const sidebarData = [
  {
    id: 1,
    arrow: <AiOutlineArrowDown />,
    title: "Home",
    icon: <AiOutlineHome />,
    link: "/home",
    children: [
      {
        id: 1,
        child: "Home-child1",
      },
      {
        id: 2,
        child: "Home-child2",
      },
      {
        id: 3,
        child: "Home-child2",
      },
    ],
  },
  {
    id: 2,
    arrow: null,
    title: "About",
    icon: <AiFillInfoCircle />,
    link: "/about",
  },
  {
    id: 3,
    arrow: <AiOutlineArrowDown />,
    title: "Partners",
    icon: <BsPeople />,
    link: "/partners",
    arrow: <AiOutlineArrowDown />,
    children: [
      {
        id: 1,
        child: "Partners-child1",
      },
      {
        id: 2,
        child: "Partners-child2",
      },
    ],
  },
  {
    id: 4,
    arrow: null,
    title: "Works",
    icon: <MdWorkOutline />,
    link: "/works",
  },
  {
    id: 5,
    arrow: <AiOutlineArrowDown />,
    title: "Contacts",
    icon: <AiFillContacts />,
    link: "/contacts",
    children: [
      {
        id: 1,
        child: "Contacts-child1",
      },
      {
        id: 2,
        child: "Contacts-child2",
      },
      {
        id: 3,
        child: "Contacts-child3",
      },
      {
        id: 4,
        child: "Contacts-child4",
      },
    ],
  },
];
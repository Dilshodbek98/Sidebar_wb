import React from 'react'
import { sideBarData } from './sidebarData';
export const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <ul className='sidebar-list'>
        {sideBarData.map((val, ind) => {
          return (
            <li className='row' key={ind}>
              <div className='list-icon'>
                <a href='#'>{val.icon}</a>
              </div>
              <div>
                <a className='list-title' href='#'>{val.title}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

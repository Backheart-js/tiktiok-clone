import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/conponents/Popper";
import styles from "./Menu.module.scss";
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);

function Menu({ children, items }) {

  const [history, setHistory] = useState([{ data: items }]);
  const currentItems = history[history.length - 1];

  const renderItems = () => {
    return currentItems.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem data={item} key={index} onClick={() => {
          if (isParent) {
            setHistory(prev => [...prev, item.children])
          }
        }} />
      )
    })
  }

  return (
    <Tippy
        interactive
        visible="true"
        placement="bottom-end"
        render={(attrs) => (
            <div className={cx("box-menu")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {history.length >= 2 && <MenuHeader title={currentItems.title} onBack={() => {
                setHistory(prev => prev.slice(0, prev.length - 1))
                console.log(history)
              }}/>}
              {renderItems()}
            </PopperWrapper>
            </div>
        )}
    >
        {children}
    </Tippy>
  )
}

export default Menu
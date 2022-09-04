import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/conponents/Popper";
import styles from "./Menu.module.scss";
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);
const defaultFn = () => {

}

function Menu({ children, items, onChange = defaultFn, hideOnClick = false }) {

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
          else {
            onChange(item);
          }
        }} />
      )
    })
  }

  return (
    <Tippy
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        hideOnClick={hideOnClick}
        render={(attrs) => (
            <div className={cx("box-menu")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {history.length >= 2 && <MenuHeader title={currentItems.title} onBack={() => {
                setHistory(prev => prev.slice(0, prev.length - 1))
              }}/>}
              {renderItems()}
            </PopperWrapper>
            </div>
        )}
        onHide={() => setHistory((prev) => prev.slice(0,1))}
    >
        {children}
    </Tippy>
  )
}

export default Menu
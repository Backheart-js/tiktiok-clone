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

function Menu({ children, items, onChange = defaultFn }) {

  const [history, setHistory] = useState([{ data: items }]);
  const currentItems = history[history.length - 1];

  const renderItems = () => {
    return currentItems.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem menuButton data={item} key={index} onClick={() => {
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
        visible
        // delay={[0, 700]}
        placement="bottom-end"
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
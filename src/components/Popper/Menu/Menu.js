import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Menu.module.scss";
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);
const defaultFn = () => {

}

function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {

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

  const handleBack = () => {
    setHistory(prev => prev.slice(0, prev.length - 1))
  }
  
  const renderResults = (attrs) => (
    <div className={cx("box-menu")} tabIndex="-1" {...attrs}>
    <PopperWrapper>
      {history.length > 1 && <MenuHeader title={currentItems.title} onBack={handleBack}/>}
      <div className={cx("menu-body")}>{renderItems()}</div>
    </PopperWrapper>
    </div>
  )
  
  //Khi ẩn Menu đi thì nó sẽ tự quay về lại trang đầu
  const handleReset = () => {
    setHistory((prev) => prev.slice(0,1));
  }

  return (
    <Tippy
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        hideOnClick={hideOnClick}
        render={renderResults}
        onHide={handleReset}
    >
        {children}
    </Tippy>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
}

export default Menu
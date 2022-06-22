import React from 'react';
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {

  return (
    <div className={cx('header')}>
        <div className={cx('iconBack')} onClick={onBack}>
            <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
        <div className={cx('title')}>
            {title}
        </div>
    </div>
  )
}

export default MenuHeader
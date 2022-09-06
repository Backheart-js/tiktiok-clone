import React from 'react';
import PropTypes from 'prop-types';
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

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
}

export default MenuHeader
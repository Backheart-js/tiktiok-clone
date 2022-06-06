import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <a className={cx('tiktok-logo')}>

        </a>
        <div className={cx('headerCenterContainer')}>

        </div>
        <div className={cx('headerRightContainer')}>

        </div>
      </div>
    </header>
  )
}

export default Header
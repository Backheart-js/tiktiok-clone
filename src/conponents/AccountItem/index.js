import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7c6edf9989895c7ecd5750f20943fdf0~c5_300x300.webp?x-expires=1655622000&x-signature=Hhv05x18IFFhX2u207vT5i%2Bysws%3D" alt='avatar' />
        <div className={cx('content')}>
            <div className={cx('name-wrapper')}>
                <h4 className={cx('name')}>binhhighend29</h4>
                <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')}/>
            </div>
            <p className={cx('user-name')}>
                binhnguyen2912
            </p>
        </div>

    </div>
  )
}

export default AccountItem
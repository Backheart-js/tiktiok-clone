import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://lh3.googleusercontent.com/ogw/ADea4I5N2HVapvZCflyDzqGYuga4FJZPDQmQ4iN4Yvq5=s32-c-mo" alt='avatar' />
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
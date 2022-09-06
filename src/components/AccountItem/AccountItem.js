import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data, ...props }) {
  return (
    <a href={`/@${data.nickname}`} key={props.key} className={cx('wrapper')}>
        <Image 
          className={cx('avatar')} 
          src={data.avatar} 
          alt={data.full_name} 
        />
        <div className={cx('content')}>
            <div className={cx('name-wrapper')}>
                <h4 className={cx('name')}>{data.full_name}</h4>
                {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')}/>}
            </div>
            <p className={cx('user-name')}>
                {data.nickname}
            </p>
        </div>
    </a>
  )
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem
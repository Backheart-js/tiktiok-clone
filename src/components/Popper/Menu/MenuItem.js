import React from 'react';

import Button from '~/components/Button';
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item',{
    separate:data.separate,
  });

  return (
    <Button className={classes} to={data.to} onClick={onClick}>
      {data.icon}
      {data.title}
    </Button>
  )
}

export default MenuItem
import React, { Children } from 'react';

import Button from '~/conponents/Button';
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button to={data.to} onClick={onClick}>
      {data.icon}
      {data.title}
    </Button>
  )
}

export default MenuItem
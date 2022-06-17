import React from 'react';
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ 
    to,
    href, 
    onClick, 
    primary=false, 
    outline=false, 
    small=false, 
    large=false, 
    children, 
    ...passProps 
}) {
    //passProps để lấy những prop còn lại không được nêu ở trên 
    console.log(small);
    let Type = 'button';
    const classes = cx('wrapper', {
        primary,
        //Khi truyền prop primary vào thì class primary sẽ tự thêm vào
        outline,
        small,
        large
    })
    const props = {
        ...passProps,
    };

    if(href) {
        Type = 'a';
        props.href = href;
    }
    else if(onClick) {
        props.onClick = onClick;
    }
    else if(to) {
        Type = Link;
        props.to = to;
    }

    return (
        <Type className={classes} {...props}>
            <span>
                {children}
            </span>
        </Type>
    )
}

export default Button
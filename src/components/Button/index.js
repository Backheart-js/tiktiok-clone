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
    disabled=false,
    small=false, 
    large=false, 
    text=false,
    rounded=false,
    children, 
    className,
    ...passProps 
}) {
    //passProps để lấy những prop còn lại không được nêu ở trên 
    let Type = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        //Khi truyền prop primary vào thì class primary sẽ tự thêm vào
        outline,
        small,
        large,
        text,
        rounded,
        disabled,
        ...passProps
    })
    const props = {
        onClick,
        ...passProps,
    };

    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if(href) {
        Type = 'a';
        props.href = href;
    }
    else if(to) {
        Type = Link;
        props.to = to;
    }
    else if(onClick) {
        props.onClick = onClick;
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
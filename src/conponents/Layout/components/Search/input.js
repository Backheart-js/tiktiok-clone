import React, { useEffect, useRef, useState } from 'react'
import {
    faCircleXmark,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless"
import { Wrapper as PopperWrapper } from "~/conponents/Popper";
import AccountItem from "~/conponents/AccountItem";
import styles from "./Search.module.scss";
import { SearchIcon } from '~/conponents/Icons';
const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();
    
    const [searchResult, setSearchResult] = useState([]); //Kết quả tìm kiếm trả về, mặc định là 1 mảng
    const [searchValue, setSearchValue] = useState(''); //Text ở trong input, dùng two ways binding
    const [showResult, setShowResult] = useState(true); //Trạng thái ẩn/hiện của tippy kết quả tìm kiếm

    const handleClickClose = () => { //Xử lý khi click vào icon close
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    }
    const handleHideResult = () => { //Click ra ngoài sẽ ẩn phần kết quả tìm kiếm
      setShowResult(false);
    }

    useEffect(() => {
      setTimeout(() => {
        setSearchResult([1]);
      }, 1000);
    }, []);

  return (
    <HeadlessTippy
          // Tìm kiếm thì sẽ xổ ra kết quả
          interactive={true}
          visible={showResult && searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("box-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx("search-title")}>Tài khoản</div>

                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
              </PopperWrapper>
            </div>
          )}
          onClickOutside={handleHideResult}
        >
          <div className={cx("headerCenterContainer")}>
            <form className={cx("headerSearchForm")} action="search">
              <input
                ref={inputRef}
                type="text"
                className={cx("headerSearchInput")}
                placeholder="Tìm kiếm tài khoản và video"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                onFocus={() => setShowResult(true)}
              />
              {
                !!searchValue && 
                <button className={cx("close")} onClick={() => handleClickClose()}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              }
              {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
              <button className={cx("headerSearchBtn")}>
                <SearchIcon className={cx("searchIcon")} />
              </button>
            </form>
        </div>
    </HeadlessTippy>
  )
}

export default Search
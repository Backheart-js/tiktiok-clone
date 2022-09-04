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
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();
    
    const [searchResult, setSearchResult] = useState([]); //Kết quả tìm kiếm trả về, mặc định là 1 mảng
    const [searchValue, setSearchValue] = useState(''); //Text ở trong input, dùng two ways binding
    const [showResult, setShowResult] = useState(true); //Trạng thái ẩn/hiện của tippy kết quả tìm kiếm
    const [loading, setLoading] = useState(false); //

    const debounce = useDebounce(searchValue, 700);

    const handleOnChangeInput = (e) => {
      const searchValueInput = e.target.value;
      if (!searchValueInput.startsWith(' '))
        setSearchValue(searchValueInput);
      }

    const handleClickClose = () => { //Xử lý khi click vào icon close
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    }
    const handleHideResult = () => { //Click ra ngoài sẽ ẩn phần kết quả tìm kiếm
      setShowResult(false);
    }

    useEffect(() => {
      if(!debounce.trim()) {
        setSearchResult([])
        return;
      }

      
      const fetchApi = async () => {
        setLoading(true);
        const result = await searchService.search(debounce);
        setSearchResult(result.data);
        setLoading(false);
      };

      fetchApi();
      // request.get('users/search', {
      //     params: {
      //       q: debounce,
      //       type: 'less'
      //     }
      //   })
      //   .then(res => {
      //     setSearchResult(res.data);
      //     setLoading(false);
      //   })

    }, [debounce]);

  return (
    /*
      Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
    */
    <div>
      <HeadlessTippy
            // Tìm kiếm thì sẽ xổ ra kết quả
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
              <div className={cx("box-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className={cx("search-title")}>Tài khoản</div>
                  {searchResult.map(result => (
                    <AccountItem key={result.id} data={result}/>
                  ))}
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
                  onChange={handleOnChangeInput}
                  onFocus={() => setShowResult(true)}
                />
                {
                  !!searchValue && !loading && 
                  <button className={cx("close")} onClick={() => handleClickClose()}>
                      <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                }
                {(loading && !!searchValue) && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}
                <button className={cx("headerSearchBtn")} onMouseDown={(e) => e.preventDefault()}>
                  <SearchIcon className={cx("searchIcon")}/>
                </button>
              </form>
          </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
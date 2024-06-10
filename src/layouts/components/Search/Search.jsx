import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import CourseSearchItem from '~/components/CourseSearchItem';
import useDebounce from '~/hooks/useDebounce';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);
    const navigate = useNavigate();
    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        searchService
            .search(encodeURIComponent(debouncedValue.trim()))
            .then((res) => {
                setSearchResult(res);
                setLoading(false);
            })
            .catch(() => {
                setSearchResult([]);
                setLoading(false);
            });
    }, [debouncedValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleFocus = (e) => {
        setShowResult(true);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleClearText = () => {
        setSearchValue('');
        setShowResult(false);
        inputRef.current.focus();
    };
    console.log(searchResult);
    return (
        <HeadLessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            appendTo={() => document.body}
            offset={[0, 5]}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Khóa học</h4>
                        {searchResult.map((result) => (
                            <CourseSearchItem
                                key={result.id}
                                to={'/courses/' + result.slug}
                                title={result.title}
                                image={result.image}
                                creator={result.user.fullName}
                            />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearText}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Tìm kiếm nội dung bất kỳ"
                    spellCheck="false"
                    className={cx('search-key', 'ud-text-sm', 'ud-text-input')}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    value={searchValue}
                />

                <button
                    className={cx(
                        'search-btn',
                        'ud-btn',
                        'ud-btn-large',
                        ' ud-btn-ghost ',
                        'ud-heading-md',
                        'ud-btn-icon',
                        'ud-btn-icon-large',
                    )}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                        navigate('/search?q=' + debouncedValue);
                    }}
                >
                    <SearchIcon className={cx('search-icon', 'ud-icon-medium', 'ud-icon')} />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';

import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import CourseSearchItem from '~/components/CourseSearchItem';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    }, []);
    console.log(searchResult);
    return (
        <HeadLessTippy
            interactive
            // visible={searchResult.length > 0}
            appendTo={() => document.body}
            offset={[0, 5]}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Khóa học</h4>
                        <CourseSearchItem />
                        <CourseSearchItem />
                        <CourseSearchItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <input
                    type="text"
                    placeholder="Tìm kiếm nội dung bất kỳ"
                    spellCheck="false"
                    className={cx('search-key', 'ud-text-sm', 'ud-text-input')}
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
                >
                    <SearchIcon className={cx('search-icon', 'ud-icon-medium', 'ud-icon')} />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;

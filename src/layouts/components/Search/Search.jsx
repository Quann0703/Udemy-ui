import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Search() {
    return (
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
                <SearchIcon className={cx('ud-icon-color-neutral', 'ud-icon-medium', 'ud-icon')} />
            </button>
        </div>
    );
}

export default Search;

import classNames from 'classnames/bind';

import styles from './Tab.module.scss';
import Button from '~/components/Button';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('search-my-courses--row')}>
            <div className={cx('search-my-courses--left')} />
            <div className={cx('search-my-courses--right')}>
                <div className={cx('search-my-courses--search-field')}>
                    <form className={cx('search-my-courses-field--form')}>
                        <div className={cx('ud-form-group')}>
                            <label
                                className={cx('ud-sr-only', 'ud-form-label', 'ud-heading-sm')}
                                htmlFor="u66-form-group--47"
                            >
                                Tìm kiếm khóa học của tôi
                            </label>
                            <div className={cx('search-my-courses-field--search-field')}>
                                <div
                                    className={cx(
                                        'search-my-courses-field--autosuggest',
                                        'autosuggest-module--autosuggest-container',
                                    )}
                                >
                                    <input
                                        aria-invalid="false"
                                        placeholder="Tìm kiếm khóa học của tôi"
                                        autoComplete="off"
                                        role="combobox"
                                        aria-expanded="false"
                                        aria-haspopup="listbox"
                                        aria-controls="u66-autosuggest-listbox--49"
                                        type="text"
                                        className={cx(
                                            'ud-text-input',
                                            'ud-text-input-medium',
                                            'ud-text-sm',
                                            'autosuggest-module--autosuggest-input',
                                        )}
                                        defaultValue=""
                                    />
                                    <div role="listbox" className={cx('ud-sr-only', 'autosuggest-module--menu')} />
                                </div>
                                <Button
                                    type="submit"
                                    size={cx('ud-btn-medium')}
                                    primary={cx('ud-btn-primary')}
                                    className={cx('ud-heading-sm', 'ud-btn-icon', 'ud-btn-icon-medium', 'margin-btn')}
                                >
                                    <SearchIcon className={cx('ud-icon', 'ud-icon-small')} />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;

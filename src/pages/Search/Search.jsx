import classNames from 'classnames/bind';

import styles from './Search.module.scss';

import CartItem from '~/components/Course/CartItem';
import Button from '~/components/Button';
import { MoreIcon, NextIcon, PreviousIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('ud-container', 'ud-page-wrapper')}>
            <header className={cx('search-header-container')}>
                <h1 className={cx('ud-heading-xl', 'search--header-title')}>10 kết quả cho “react”</h1>
            </header>
            <div className={cx('courses-results')}>
                <div className={cx('filter-panel-search')}>
                    <CartItem resultItem bestseller />
                    <CartItem resultItem updated />
                    <CartItem resultItem bestseller updated />
                </div>
            </div>
            <nav className={cx('pagination-module--container')}>
                <Button
                    size={cx('ud-btn-medium')}
                    secondary={cx('ud-btn-secondary')}
                    rounded={cx('ud-btn-round')}
                    className={cx(
                        'ud-heading-sm',
                        'ud-btn-disabled',
                        'ud-btn-icon',
                        'ud-btn-icon-medium',
                        'ud-btn-icon-round',
                        'pagination-module--prev',
                    )}
                >
                    <PreviousIcon classNames={cx('ud-icon', 'ud-icon-small')} />
                </Button>
                <Button
                    size={cx('ud-btn-medium')}
                    ghost={cx('ud-btn-ghost')}
                    rounded={cx('ud-btn-round')}
                    className={cx('ud-heading-sm', 'pagination-module--page', 'pagination-module--active')}
                >
                    1
                </Button>
                <Button
                    size={cx('ud-btn-medium')}
                    ghost={cx('ud-btn-ghost')}
                    rounded={cx('ud-btn-round')}
                    className={cx('ud-heading-sm', 'pagination-module--page')}
                >
                    2
                </Button>
                <Button
                    size={cx('ud-btn-medium')}
                    ghost={cx('ud-btn-ghost')}
                    rounded={cx('ud-btn-round')}
                    className={cx('ud-heading-sm', 'pagination-module--page')}
                >
                    <MoreIcon
                        classNames={cx(
                            'ud-icon',
                            'ud-icon-medium',
                            'ud-icon-color-neutral',
                            'pagination-module--ellipsis',
                        )}
                    />
                </Button>
                <Button
                    size={cx('ud-btn-medium')}
                    secondary={cx('ud-btn-secondary')}
                    rounded={cx('ud-btn-round')}
                    className={cx(
                        'ud-heading-sm',
                        'ud-btn-icon',
                        'ud-btn-icon-medium',
                        'ud-btn-icon-round',
                        'pagination-module--prev',
                    )}
                >
                    <NextIcon classNames={cx('ud-icon', 'ud-icon-small')} />
                </Button>
            </nav>
        </div>
    );
}

export default Search;

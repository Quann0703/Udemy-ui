import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Pagination.module.scss';
import Button from '../Button';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { NextIcon, PreviousIcon } from '../Icons';

const cx = classnames.bind(styles);

function Pagination({ total, pageSize = 10 }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNumber = Math.ceil(total / pageSize);
    useEffect(() => {
        if (!searchParams.has('page')) {
            setSearchParams((params) => {
                params.set('page', 1);
                return params;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const items = [];
    for (let pageIndex = 1; pageIndex <= pageNumber; pageIndex++) {
        items.push(
            <Button
                size={cx('ud-btn-medium')}
                ghost={cx('ud-btn-ghost')}
                rounded={cx('ud-btn-round')}
                key={pageIndex}
                className={cx('btn', 'ud-heading-sm', {
                    active: pageIndex === +page,
                })}
                onClick={() => handleChangePage(pageIndex)}
            >
                {pageIndex}
            </Button>,
        );
    }

    const handleChangePage = (number) => {
        setSearchParams((params) => {
            params.set('page', number.toString());
            return params;
        });
    };

    const handlePrev = () => {
        setSearchParams((params) => {
            params.set('page', (+page - 1).toString());
            return params;
        });
    };

    const handleNext = () => {
        setSearchParams((params) => {
            params.set('page', (+page + 1).toString());
            return params;
        });
    };

    return (
        <>
            {pageNumber > 0 && (
                <div className={cx('wrapper')}>
                    <Button
                        size={cx('ud-btn-medium')}
                        secondary={cx('ud-btn-secondary')}
                        rounded={cx('ud-btn-round')}
                        disabled={+page === 1}
                        className={cx(
                            'ud-heading-sm',
                            'ud-btn-disabled',
                            'ud-btn-icon',
                            'ud-btn-icon-medium',
                            'ud-btn-icon-round',
                            'pagination-module--prev',
                            'btn',
                            'prev',
                        )}
                        onClick={handlePrev}
                    >
                        <PreviousIcon classNames={cx('ud-icon', 'ud-icon-small')} />
                    </Button>
                    {items}

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
                            'btn',
                            'next',
                        )}
                        disabled={+page === pageNumber}
                        onClick={handleNext}
                    >
                        <NextIcon classNames={cx('ud-icon', 'ud-icon-small')} />
                    </Button>
                </div>
            )}
        </>
    );
}

export default Pagination;

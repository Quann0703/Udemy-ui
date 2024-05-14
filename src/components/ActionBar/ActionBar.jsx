import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import styles from './ActionBar.module.scss';
import Button from '../Button';
import { ArrowRightIcon, BarIcon, NextIcon, PreviousIcon } from '../Icons';

const cx = classNames.bind(styles);
function ActionBar({ isShowTracks, onChangeShow }) {
    return (
        <div className={cx('wrapper')}>
            <Button
                secondary={cx('ud-btn-ghost')}
                btnText
                size={cx('ud-btn-large')}
                className={cx('ud-heading-md')}
                leftIcon={<PreviousIcon classNames={cx('ud-icon', 'ud-icon-medium', 'ud-icon-color-neutral')} />}
            >
                <span className={cx('ud-heading-sm', 'title')}>BÀI TRƯỚC</span>
            </Button>

            <Tippy content="Phím tắt: Ctrl + enter">
                <div>
                    <Button
                        size={cx('ud-btn-medium')}
                        className={cx('ud-heading-sm', 'ud-btn-white-outline-primary', 'btn-actionbar')}
                        rightIcon={
                            <NextIcon
                                classNames={cx('ud-icon', 'ud-icon-medium', 'ud-icon-color-neutral', 'color-icon')}
                            />
                        }
                    >
                        <span className={cx('ud-heading-sm', 'title')}>BÀI TIẾP THEO</span>
                    </Button>
                </div>
            </Tippy>

            <div className={cx('toggle-wrap')}>
                <h3 className={cx('ud-heading-sm')}>Track list</h3>
                <button className={cx('toggle-btn')} onClick={onChangeShow}>
                    {isShowTracks ? (
                        <BarIcon classNames={cx('ud-icon', 'ud-icon-xxsmall')} />
                    ) : (
                        <ArrowRightIcon classNames={cx('ud-icon', 'ud-icon-xxsmall')} />
                    )}
                </button>
            </div>
        </div>
    );
}

export default ActionBar;
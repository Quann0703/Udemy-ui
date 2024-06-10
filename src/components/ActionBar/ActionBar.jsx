import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import styles from './ActionBar.module.scss';
import Button from '../Button';
import { ArrowRightIcon, BarIcon, NextIcon, PreviousIcon } from '../Icons';
import { useSearchParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function ActionBar({ isShowTracks, onChangeShow, canNext, prevStep, nextStep }) {
    const [, setSearchParams] = useSearchParams();
    console.log(nextStep);
    const handleClickPrevStep = () => {
        setSearchParams((params) => {
            params.set('id', prevStep);
            return params;
        });
    };
    const handleClickNextStep = async () => {
        setSearchParams((params) => {
            params.set('id', nextStep);
            return params;
        });
    };
    return (
        <div className={cx('wrapper')}>
            <Button
                secondary={cx('ud-btn-ghost')}
                btnText
                disabled={!prevStep}
                size={cx('ud-btn-large')}
                className={cx('ud-heading-md')}
                leftIcon={<PreviousIcon classNames={cx('ud-icon', 'ud-icon-medium', 'ud-icon-color-neutral')} />}
                onClick={handleClickPrevStep}
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
                        disabled={!canNext || !nextStep}
                        onClick={handleClickNextStep}
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

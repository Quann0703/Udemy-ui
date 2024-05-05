import classNames from 'classnames/bind';

import styles from './Preview.module.scss';
import Video from '../Video';
import PreviewItem from './PreviewItem';
import Button from '../Button';
import { CLoseIcon } from '../Icons';

const cx = classNames.bind(styles);
function Preview({ backClick }) {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx(
                    'ud-full-page-overlay-container',
                    'modal-module--scroll-wrapper',
                    'modal-module--desktop-centered',
                )}
            >
                <div
                    className={cx(
                        'ud-btn',
                        'ud-btn-large',
                        'ud-btn-link',
                        'ud-heading-md',
                        'full-page-overlay',
                        'modal-module--overlay',
                    )}
                ></div>
                <div
                    className={cx(
                        'course-preview-modal',
                        'course-preview-modal-vi-Pa',
                        'course-preview-dark-mode',
                        'ud-modal',
                        'modal-module--dialog',
                        'modal-module--default-size',
                    )}
                >
                    <div>
                        <div className={cx('container--course-preview')}>
                            <h2 className={cx('ud-modal-title')}>
                                <span className={cx('ud-heading-sm', 'course-preview__intro')}>Xem trước khóa học</span>
                                <span className={cx('ud-heading-lg')}>
                                    React Pro TypeScript - Thực Hành Dự Án Portfolio
                                </span>
                            </h2>
                            <div className={cx('course-preview')}>
                                <div>
                                    <Video />
                                </div>
                                <div className={cx('ud-heading-md', 'course-preview--separation-text')}>
                                    Video mẫu miễn phí:
                                </div>
                                <div className={cx('course-preview--preview-rows')}>
                                    <PreviewItem current />
                                    <PreviewItem />
                                    <PreviewItem />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        size={cx('ud-btn-medium')}
                        ghost={cx('ud-btn-ghost')}
                        className={cx(
                            'ud-heading-sm',
                            'ud-btn-icon',
                            'ud-btn-icon-medium',
                            'ud-modal-close',
                            'modal-module--close-button',
                        )}
                        onClick={backClick}
                    >
                        <CLoseIcon classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-neutral', 'color-icon')} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Preview;

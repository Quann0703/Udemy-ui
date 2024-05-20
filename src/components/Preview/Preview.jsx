import classNames from 'classnames/bind';

import styles from './Preview.module.scss';
import { Video } from '../Video';
import PreviewItem from './PreviewItem';
import Button from '../Button';
import { CLoseIcon } from '../Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Preview({ course, track, backClick }) {
    const { title } = course;
    const { step = [] } = track;
    const [videoId, setVideoId] = useState({
        title: 'The Ultimate React Course 2024: React, Next.js, Redux & More',
        video: 'FdiTx5jBo9Y',
    });
    const [currentIndex, setCurrentIndex] = useState(null);
    console.log(videoId);
    console.log(step);
    const handleChangeVideo = (videoId, title, index) => {
        setVideoId({
            video: videoId,
            title: title,
        });
        setCurrentIndex(index);
    };
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
                                <span className={cx('ud-heading-lg')}>{title}</span>
                            </h2>
                            <div className={cx('course-preview')}>
                                <div>
                                    <Video videoId={videoId} />
                                </div>
                                <div className={cx('ud-heading-md', 'course-preview--separation-text')}>
                                    Video mẫu miễn phí:
                                </div>
                                <div className={cx('course-preview--preview-rows')}>
                                    {/* <PreviewItem current />
                                    <PreviewItem />
                                    <PreviewItem /> */}
                                    {step.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                <PreviewItem
                                                    title={item.title}
                                                    duration={item.lesson['duration']}
                                                    image={item.lesson['image']}
                                                    isCurrent={item.id === currentIndex}
                                                    onVideo={() =>
                                                        handleChangeVideo(item.lesson['video'], item.title, item.id)
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
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

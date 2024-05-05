import classNames from 'classnames/bind';

import styles from './Video.module.scss';

const cx = classNames.bind(styles);
function Video() {
    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video-player--container', 'udlite-in-udheavy')}>
                <div className={cx('video-player--video-wrapper', 'user-activity--user-inactive')}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/h2jvHynuMjI?si=5U8g8aQSkEZrS5P4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Video;

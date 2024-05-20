import classNames from 'classnames/bind';

import styles from './Video.module.scss';

const cx = classNames.bind(styles);
function Video({ videoId = {} }) {
    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video-player--container', 'udlite-in-udheavy')}>
                <div className={cx('video-player--video-wrapper', 'user-activity--user-inactive')}>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId.video}?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Ffullstack.edu.vn&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    {/* <VideoPlayer title={VideoId.title} video={VideoId.video} type="youtube" /> */}
                </div>
            </div>
        </div>
    );
}

export default Video;

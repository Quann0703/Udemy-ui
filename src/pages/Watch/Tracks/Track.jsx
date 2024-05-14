import classNames from 'classnames/bind';

import styles from './Track.module.scss';
import { ExitsIcon } from '~/components/Icons';
import TrackItem from './TrackItem';

const cx = classNames.bind(styles);
function Track({ onChangeShow }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <h2 className={cx('ud-heading-md')}>Nội dung khóa học</h2>
                    <button className={cx('close-btn')} onClick={onChangeShow}>
                        <ExitsIcon classNames={cx('ud-icon', 'ud-icon-xsmall')} />
                    </button>
                </header>
                <div className={cx('track-body')}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
                        <TrackItem
                            key={i}
                            title={'ReactJS là gì? Tại sao nên học ReactJS?'}
                            image={'https://i.ytimg.com/vi/z2f7RHgvddc/hq720.jpg'}
                            duration={'10:00'}
                            index={i}
                        />
                    ))}
                </div>
            </div>
            <div className="Tracks_overlay__5cs2-" />
        </div>
    );
}

export default Track;

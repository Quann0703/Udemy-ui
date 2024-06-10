import classNames from 'classnames/bind';

import styles from './Track.module.scss';
import { ExitsIcon } from '~/components/Icons';
import TrackItem from './TrackItem';

const cx = classNames.bind(styles);
function Track({ onChangeShow, data, process }) {
    const { steps } = data;
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
                    {steps.map((item, index) => {
                        const isCheckExist = process.includes(item.id);
                        console.log(isCheckExist);
                        return (
                            <TrackItem
                                key={index}
                                uuid={item.uuid}
                                title={item.title}
                                image={item.lesson.image}
                                duration={item.lesson.duration}
                                index={index + 1}
                                isDisabled={!isCheckExist}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="Tracks_overlay__5cs2-" />
        </div>
    );
}

export default Track;

import classNames from 'classnames/bind';

import styles from './Watch.module.scss';
import Header from './Header';
import Tracks from './Tracks';
import Video from './Video';
import ActionBar from '~/components/ActionBar';
import Comments from './Comments';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Watch() {
    const [isShowTracks, setIsShowTracks] = useState(true);

    const handleShowTracks = () => {
        setIsShowTracks((prev) => {
            return !prev;
        });
    };
    return (
        <div className={cx('ud-main-content-wrapper')}>
            <div className={cx('ud-main-content')}>
                <Header />
                {!isShowTracks && <Tracks onChangeShow={handleShowTracks} />}
                <Video allWidth={isShowTracks} />
                <ActionBar isShowTracks={isShowTracks} onChangeShow={handleShowTracks} />
                <Comments isShowTracks={!isShowTracks} />
            </div>
        </div>
    );
}

export default Watch;

import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Track.module.scss';
import { useSearchParams } from 'react-router-dom';

const cx = classnames.bind(styles);

function TrackItem({ title, image, index, duration, isDisabled, uuid }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClickTrack = () => {
        setSearchParams((params) => {
            params.set('id', uuid);
            return params;
        });
    };
    return (
        <div
            className={cx('item', {
                active: searchParams.get('id') === uuid,
                disabled: isDisabled,
            })}
            onClick={handleClickTrack}
        >
            <span className={cx('index')}>{index}</span>
            <button className={cx('link')}>
                <img src={image} alt={title} className={cx('thumb')} />
                <div className={cx('wrap-content')}>
                    <h3 className={cx('title')}>{title}</h3>
                    <p className={cx('ud-text-xs', 'duration')}>{duration}</p>
                </div>
            </button>
        </div>
    );
}

TrackItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    duration: PropTypes.number,
};

export default TrackItem;

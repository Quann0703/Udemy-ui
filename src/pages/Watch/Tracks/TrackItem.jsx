import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Track.module.scss';

const cx = classnames.bind(styles);

function TrackItem({ title, image, index, duration }) {
    return (
        <div
            className={cx('item', {
                active: true,
            })}
        >
            <span className={cx('index')}>{index}</span>
            <a href="watch-course.html" className={cx('link')}>
                <img src={image} alt={title} className={cx('thumb')} />
                <div>
                    <h3 className={cx('title')}>{title}</h3>
                    <p className={cx('ud-text-xs', 'duration')}>{duration}</p>
                </div>
            </a>
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

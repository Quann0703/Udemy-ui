import classNames from 'classnames/bind';

import styles from './Progress.module.scss';

const cx = classNames.bind(styles);

const CircularProgressBar = ({ size, progress }) => {
    const radius = size / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className={cx('progress-circle')}>
            <svg width={size} height={size}>
                <circle
                    className={cx('progress-circle-background')}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={8}
                />
                <circle
                    className={cx('progress-circle-progress')}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={8}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            {/* <div className={cx('progress-circle-text')}>{progress}%</div> */}
        </div>
    );
};

export default CircularProgressBar;

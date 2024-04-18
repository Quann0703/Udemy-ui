import classNames from 'classnames/bind';

import styles from './WellcomeUser.module.scss';
import Button from '~/components/Button';
import MyCourseLearning from './MycourseLearning';

const cx = classNames.bind(styles);
function WellcomeUser() {
    return (
        <div>
            <div className={cx('learning-header')}>
                <h2 className={cx('ud-heading-serif-xl', 'learning-title')}>Trần Văn ơi, hãy bắt đầu học nào</h2>
                <div className={cx('learning-link')}>
                    <Button
                        href="/home/mycourse"
                        primary={cx('ud-btn-ghost')}
                        size={cx('ud-btn-large')}
                        className={cx('ud-heading-md', 'ud-link-underline')}
                    >
                        <span className={cx('title-link')}>Học tập</span>
                    </Button>
                </div>
            </div>
            <div className={cx('learning-content')}>
                <MyCourseLearning />
            </div>
            <div className={cx('learning-link')}></div>
        </div>
    );
}

export default WellcomeUser;

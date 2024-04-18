import classNames from 'classnames/bind';

import styles from './Training.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Training() {
    return (
        <div className={cx('background-training', 'training-banner-dark')}>
            <div className={cx('advertising-banner-text')}>
                <h3 className={cx('ud-heading-md', 'advertising-notice-text', 'title')}>
                    Training undefined or more people?
                </h3>
                <div className={cx('ud-text-md', 'advertising-notice-text', 'subtitle')}>
                    Cho phép nhóm của bạn truy cập vào hơn 25.000 khóa học hàng đầu của Udemy
                </div>
            </div>
            <div className={cx('advertising-banner-button')}>
                <Button
                    href="/udemybusiness"
                    size={cx('ud-btn-medium')}
                    className={cx('ud-heading-sm', 'ud-btn-white-solid', 'submit-btn')}
                >
                    <span>Hãy tham gia Udemy Business</span>
                </Button>
                <Button
                    size={cx('ud-btn-medium')}
                    className={cx('ud-heading-sm', 'ud-btn-white-outline', 'cancellation-btn')}
                >
                    <span>Hủy bỏ</span>
                </Button>
            </div>
        </div>
    );
}

export default Training;

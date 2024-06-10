import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Group.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function GroupBtn({ btnWishlist, btnButton, btnStudy, title, ...passport }) {
    const props = {
        ...passport,
    };
    return (
        <>
            {btnButton && (
                <Button
                    to={'/cart'}
                    secondary={cx('ud-btn-primary')}
                    size={cx('ud-btn-large')}
                    className={cx('ud-heading-md', 'group-btn')}
                    {...props}
                >
                    <span>{title}</span>
                </Button>
            )}

            {btnStudy && (
                <Button
                    to={'/me/learning'}
                    secondary={cx('ud-btn-primary')}
                    size={cx('ud-btn-large')}
                    className={cx('ud-heading-md', 'group-btn')}
                    {...props}
                >
                    <span>{title}</span>
                </Button>
            )}

            {btnWishlist && (
                <Button
                    to={'/cart'}
                    size={cx('ud-btn-medium')}
                    secondary={cx('ud-btn-secondary')}
                    className={cx('ud-heading-sm', 'add-to-cart')}
                    style={{ width: '100%' }}
                >
                    <span>Thêm vào giỏ hàng</span>
                </Button>
            )}
        </>
    );
}
GroupBtn.propTypes = {
    data: PropTypes.string,
};
export default GroupBtn;

import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Group.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function GroupBtn({ title }) {
    return (
        <Button secondary={cx('ud-btn-primary')} size={cx('ud-btn-large')} className={cx('ud-heading-md', 'group-btn')}>
            <span>{title}</span>
        </Button>
    );
}
GroupBtn.propTypes = {
    data: PropTypes.string,
};
export default GroupBtn;

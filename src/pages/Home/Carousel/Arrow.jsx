import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from '../Home.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Arrow({ nextArrow = false, prevIcon = false, classNames, onClick }) {
    return (
        <div className={cx(classNames)}>
            <Button
                primary={cx('ud-btn-primary')}
                rounded={cx('ud-btn-round')}
                size={cx('ud-btn-medium')}
                className={cx('ud-heading-sm', 'ud-btn-icon', 'ud-btn-icon-medium', 'ud-btn-icon-round')}
                onClick={onClick}
            >
                <span className={cx('nav-text', 'ud-text-sm')}>
                    {nextArrow && <FontAwesomeIcon icon={faAngleRight} />}
                    {prevIcon && <FontAwesomeIcon icon={faAngleLeft} />}
                </span>
            </Button>
        </div>
    );
}
Arrow.propTypes = {
    nextArrow: PropTypes.bool,
    prevIcon: PropTypes.bool,
    classNames: PropTypes.string,
};
export default Arrow;

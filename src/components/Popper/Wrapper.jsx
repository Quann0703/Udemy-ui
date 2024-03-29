import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Popper.module.scss';
import { ArrowIcon } from '../Icons';

const cx = classNames.bind(styles);
function Wrapper({ children, className, isArrow }) {
    return (
        <>
            <div className={cx('wrapper', className)}>{children}</div>
            {isArrow && <ArrowIcon classNames={cx('arrow')} />}
        </>
    );
}
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
};
export default Wrapper;

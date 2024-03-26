import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Footer.module.scss';

const cx = classNames.bind(styles);
function Section({ children, className }) {
    const classes = cx('footer-section', className);
    return <div className={classes}>{children}</div>;
}
Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Section;

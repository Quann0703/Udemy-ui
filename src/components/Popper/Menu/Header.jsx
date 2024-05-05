// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { PreviousIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
                <PreviousIcon />
                <h3 className={cx('header-title')}>{title}</h3>
            </button>
        </header>
    );
}
// Header.propTypes = {
//     title: PropTypes.string.isRequired,
//     onBack: PropTypes.func.isRequired,
// };
export default Header;

import classNames from 'classnames/bind';

import styles from './SigninBtn.module.scss';

const cx = classNames.bind(styles);
function SigninBtn({ title, icon, onSignIn }) {
    return (
        <div className={cx('wrapper')} onClick={onSignIn}>
            {/* <img className={cx('icon')} src={icon} alt="" /> */}
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default SigninBtn;

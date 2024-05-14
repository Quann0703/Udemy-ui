import classNames from 'classnames/bind';

import styles from './Group.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function Profile() {
    return (
        <a href="/profile" className={cx('user-profile-dropdown-module--user-section')}>
            <Image
                src="https://img-c.udemycdn.com/user/75x75/245266240_ca52.jpg"
                alt=""
                className={cx('user-section-avatar', 'ud-avatar', 'ud-avatar-image')}
                width={64}
                height={64}
                loading="lazy"
                style={{ width: '6.4rem', height: '6.4rem' }}
            />
            <div className={cx('user-details')}>
                <div>
                    <div className={cx('ud-heading-md')}>Trần Văn Quân</div>
                    <div className={cx('ud-text-xs', 'user-profile-module--email')}>tranquan07112003@gmail.com</div>
                </div>
            </div>
        </a>
    );
}

export default Profile;

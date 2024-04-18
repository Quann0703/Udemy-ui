import classNames from 'classnames/bind';

import styles from './Partners.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const LOGOPARTNERS = [
    {
        id: 1,
        logoPartners: images.volkswagen,
        w: '48',
        h: '48',
    },
    {
        id: 2,
        logoPartners: images.samsung,
        w: '101',
        h: '34',
    },
    {
        id: 3,
        logoPartners: images.cisco,
        w: '87',
        h: '40',
    },
    {
        id: 4,
        logoPartners: images.att,
        w: '97',
        h: '40',
    },
    {
        id: 5,
        logoPartners: images.procter,
        w: '48',
        h: '48',
    },
    {
        id: 6,
        logoPartners: images.hewlett,
        w: '94',
        h: '40',
    },
    {
        id: 7,
        logoPartners: images.citi,
        w: '62',
        h: '40',
    },
    {
        id: 8,
        logoPartners: images.ericsson,
        w: '55',
        h: '48',
    },
];
function Partners() {
    return (
        <div className={cx('partners-banner')}>
            <div className={cx('partners-content')}>
                <h2 className={cx('content-heading')}>
                    Trusted by over 15.000 companies and millions of learners around the world
                </h2>
                <ul className={cx('ud-unstyled-list', 'content__logo-list')}>
                    {LOGOPARTNERS.map((item) => {
                        return (
                            <li key={item.id} className={cx('logo-item')}>
                                <Image
                                    src={item.logoPartners}
                                    alt=""
                                    width={item.w}
                                    height={item.h}
                                    className={cx('slider-img')}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Partners;

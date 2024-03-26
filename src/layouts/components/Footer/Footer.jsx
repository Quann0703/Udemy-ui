import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Section from './section/section';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import LinkFooter from './LinkFooter';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const UDEMYINTRODUCT = [
    {
        title: 'Udemy Business',
        to: '/udemybusiness',
    },
    {
        title: 'Giảng dạy trên Udemy',
        to: '/teacherudemy',
    },
    {
        title: 'Tải ứng dụng',
        to: '/udemyinstall',
    },
    {
        title: 'Giới thiệu',
        to: '/udemyintroduct',
    },
    {
        title: 'Hãy liên hệ với chúng tôi',
        to: '/udemycall',
    },
];
const UDEMYHELP = [
    {
        title: 'Nghề nghiệp',
        to: '/udemyjob',
    },
    {
        title: 'Blog',
        to: '/udemyblog',
    },
    {
        title: 'Trợ Giúp và Hỗ trợ',
        to: '/udemyhelp',
    },
    {
        title: 'Đơn vị liên kết',
        to: '/udemycompany',
    },
    {
        title: 'Nhà đầu tư',
        to: '/udemyinvest',
    },
];
const UDEMYROLE = [
    {
        title: 'Điều khoản',
        to: '/udemyclause',
    },
    {
        title: 'Chính sách quyền riêng tư',
        to: '/udemypolicy',
    },
    {
        title: 'Cài đặt cookie',
        to: '/installcookie',
    },
    {
        title: 'Sơ đồ web',
        to: '/udemymodelweb',
    },
    {
        title: 'Tuyến bố về khả năng tiếp cận',
        to: '/udemyapproach',
    },
];
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('ud-footer')}>
                    <Section className={cx('footer-section-main')}>
                        <div className={cx('links-and-language-selector')}>
                            <div className={cx('language-selector-container')}>
                                <Button
                                    secondary={cx('ud-btn-secondary')}
                                    size={cx('ud-btn-large')}
                                    className={cx('ud-heading-md', 'ud-btn-white-outline')}
                                    leftIcon={<FontAwesomeIcon icon={faEarthAsia} />}
                                >
                                    <span className={cx('title')}>Tiếng Việt</span>
                                </Button>
                            </div>
                            <ul className={cx('ud-unstyled-list', 'link-column')}>
                                {UDEMYINTRODUCT.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <LinkFooter key={index} to={item.to} title={item.title} />
                                        </li>
                                    );
                                })}
                            </ul>
                            <ul className={cx('ud-unstyled-list', 'link-column')}>
                                {UDEMYHELP.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <LinkFooter to={item.to} title={item.title} />
                                        </li>
                                    );
                                })}
                            </ul>
                            <ul className={cx('ud-unstyled-list', 'link-column')}>
                                {UDEMYROLE.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <LinkFooter key={index} to={item.to} title={item.title} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={cx('logo-and-copyright')}>
                            <div className={cx('logo-container')}>
                                <Button
                                    to="/"
                                    size={cx('ud-btn-large')}
                                    className={cx('ud-btn-link ', ' ud-heading-md')}
                                >
                                    <img
                                        src={images.logoFooter}
                                        alt="Udemy"
                                        width="91.07142857142857"
                                        height="34"
                                        loading="eager"
                                    />
                                </Button>
                            </div>
                            <div className="copyright-container ud-text-xs">© 2024 Udemy, Inc.</div>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
}

export default Footer;

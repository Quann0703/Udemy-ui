import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import { ExpandIcon, MoreIcon, ProgressIcon, ShareIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Progress from '~/components/Popper/Progress';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('app--row', 'wrapper')}>
            <div className={cx('header-content')}>
                <div className={cx('header-inner')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.home} className={cx('logo-link')}>
                            <img src={images.logoInverted} alt="Udemy" />
                        </Link>
                    </div>
                    <div className={cx('vertical-divider')} />
                    <div className={cx('header--flex', 'header-title')}>
                        <h1 className={cx('course-title')}>
                            <a
                                className={cx(
                                    'ud-text-md',
                                    'header-text',
                                    'header-link',
                                    'truncate-with-tooltip--ellipsis',
                                    'ud-text-md',
                                )}
                                href="/course/web-design-secrets/"
                                style={{ WebkitLineClamp: 1 }}
                            >
                                Web Design for Web Developers: Build Beautiful Websites!
                            </a>
                        </h1>
                        <div className={cx('header--flex')} />
                    </div>
                    <Progress>
                        <div className={cx('popper-module--popper')}>
                            <Button
                                size={cx('ud-btn-large')}
                                className={cx('ud-btn-link', 'ud-text-sm', 'progress--progress-btn')}
                            >
                                <span className={cx('progress--progress-circle')}>
                                    <ProgressIcon />
                                </span>
                                <span className={cx('progress--progress-label', 'progress--progress-text')}>
                                    Tiến độ của bạn
                                </span>

                                <ExpandIcon classNames={cx('ud-icon', 'ud-icon-small', 'progress--progress-text')} />
                            </Button>
                        </div>
                    </Progress>
                    <div className={cx('resource-context-menu-options')}>
                        <Button size={cx('ud-btn-medium')} className={cx('ud-heading-sm', 'ud-btn-white-outline')}>
                            <span>Chia sẻ</span>
                            <ShareIcon classNames={cx('ud-icon', 'ud-icon-xsmall')} />
                        </Button>
                        <Button
                            size={cx('ud-btn-medium')}
                            className={cx('ud-heading-sm', 'ud-btn-white-outline', 'ud-btn-icon', 'ud-btn-icon-medium')}
                        >
                            <MoreIcon classNames={cx('ud-icon', 'ud-icon-xsmall')} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

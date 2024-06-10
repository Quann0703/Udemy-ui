import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import { ExpandIcon, MoreIcon, ShareIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Progress from '~/components/Popper/Progress';
import CircularProgressBar from '~/components/Progress';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header({ track, process, isQuiz, onCloseQuiz }) {
    const [userProcess, setUserProcess] = useState(0);
    const navigate = useNavigate();
    const { steps } = track;
    useEffect(() => {
        const calculateProgress = () => {
            if (steps.length === 0) return 0;
            return (process.length / steps.length) * 100;
        };

        const timer = setTimeout(() => {
            setUserProcess(calculateProgress());
        }, 2000);

        return () => clearTimeout(timer);
    }, [process, steps]);

    return (
        <div className={cx('app--row', 'wrapper')}>
            {isQuiz && (
                <div
                    className={cx('btn-back')}
                    onClick={() => {
                        if (isQuiz) {
                            onCloseQuiz();
                        } else {
                            navigate('/');
                        }
                    }}
                >
                    <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
                </div>
            )}
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
                                {track.title}
                            </a>
                        </h1>
                        <div className={cx('header--flex')} />
                    </div>
                    <Progress process={process} step={steps}>
                        <div className={cx('popper-module--popper')}>
                            <Button
                                size={cx('ud-btn-large')}
                                className={cx('ud-btn-link', 'ud-text-sm', 'progress--progress-btn')}
                            >
                                <span className={cx('progress--progress-circle')}>
                                    <CircularProgressBar size={30} progress={userProcess} />
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

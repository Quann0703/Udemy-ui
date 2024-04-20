import classNames from 'classnames/bind';

import styles from './Author.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CertificateIcon, CollapseIcon, ExpandIcon, PeopleIcon } from '../Icons';
import Button from '../Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Author() {
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow((prev) => {
            return !prev;
        });
    };
    return (
        <div className={cx('component-margin')}>
            <span className={cx('in-page-offset-anchor')}></span>
            <h2 className={cx('ud-heading-xl', 'instructor__header-name-teacher')}>Giảng Viên</h2>
            <div className={cx('instructor__bio')}>
                <span className={cx('in-page-offset-anchor')}></span>
                <div>
                    <div className={cx('ud-heading-lg', 'ud-link-underline', 'instructor__title-name')}>
                        <a href="/user/jonasschmedtmann/">Jonas Schmedtmann</a>
                    </div>
                    <div className={cx('ud-text-md', 'instructor__job-title')}>
                        Web Developer, Designer, and Teacher
                    </div>
                </div>
                <div className={cx('instructor__img-and-star')}>
                    <a href="/" className={cx('instructor__img-link')}>
                        <Image
                            src="https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg"
                            alt="Jonas Schmedtmann"
                            className={cx('instructor--instructor__image', 'ud-avatar', 'ud-avatar-image')}
                            width={64}
                            height={64}
                            style={{ width: '6.4rem', height: '6.4rem' }}
                            loading="lazy"
                        />
                    </a>
                    <ul className={cx('ud-unstyled-list', 'ud-block-list')}>
                        <li>
                            <div
                                className={cx(
                                    'instructor__star-item',
                                    'ud-block-list-item',
                                    'ud-block-list-item-small',
                                    'ud-block-list-item-tight',
                                    'ud-block-list-item-neutral',
                                    'ud-text-sm',
                                )}
                            >
                                <FontAwesomeIcon icon={faStar} />
                                <div className={cx('instructor__star-content')}>4,7 xếp hạng giảng viên</div>
                            </div>
                        </li>
                        <li>
                            <div
                                className={cx(
                                    'instructor__star-item',
                                    'ud-block-list-item',
                                    'ud-block-list-item-small',
                                    'ud-block-list-item-tight',
                                    'ud-block-list-item-neutral',
                                    'ud-text-sm',
                                )}
                            >
                                <CertificateIcon
                                    classNames={cx(
                                        'ud-icon',
                                        'ud-icon-xsmall',
                                        'ud-icon-color-neutral',
                                        'ud-block-list-item-icon',
                                    )}
                                />
                                <div className={cx('instructor__star-content')}>4,7 xếp hạng giảng viên</div>
                            </div>
                        </li>
                        <li>
                            <div
                                className={cx(
                                    'instructor__star-item',
                                    'ud-block-list-item',
                                    'ud-block-list-item-small',
                                    'ud-block-list-item-tight',
                                    'ud-block-list-item-neutral',
                                    'ud-text-sm',
                                )}
                            >
                                <PeopleIcon
                                    classNames={cx(
                                        'ud-icon',
                                        'ud-icon-xsmall',
                                        'ud-icon-color-neutral',
                                        'ud-block-list-item-icon',
                                    )}
                                />
                                <div className={cx('instructor__star-content')}>4,7 xếp hạng giảng viên</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={cx('ud-text-sm', 'instructor__decription')}>
                    <div className={cx('show-more-container')}>
                        <div
                            className={cx('instructor__decription-content', 'show-more-module--with-gradient', {
                                'limit-height': show,
                            })}
                        >
                            <div>
                                <div>
                                    <p>
                                        Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium courses
                                        have earned the best-selling status for outstanding performance and student
                                        satisfaction.
                                    </p>
                                    <p>
                                        I'm a full-stack web developer and designer with a passion for building
                                        beautiful web interfaces from scratch. I've been building websites and apps
                                        since 2010 and also have a Master's degree in Engineering.
                                    </p>
                                    <p>
                                        I discovered my passion for teaching and helping others by sharing everything I
                                        knew during college. This passion led me to Udemy in 2015, where I now have the
                                        privilege of training <strong>1,500,000+</strong> learners in the field of web
                                        development.
                                    </p>
                                    <p>
                                        What learners love the most about all my courses is the fact that I take the
                                        time to explain every single concept in a way that everyone can easily
                                        understand.
                                    </p>
                                    <p>
                                        <strong>
                                            <em>
                                                So, do you want to learn how to build awesome websites with modern
                                                HTML&nbsp;and CSS?
                                            </em>
                                        </strong>
                                    </p>
                                    <p>
                                        <strong>
                                            <em>
                                                Looking for a complete JavaScript course that takes you from zero to an
                                                advanced developer?
                                            </em>
                                        </strong>
                                    </p>
                                    <p>
                                        <strong>
                                            <em>
                                                Or maybe you want to build modern and powerful front-end applications
                                                with React?
                                            </em>
                                        </strong>
                                    </p>
                                    <p>
                                        Then don't waste your time with random tutorials or incomplete youtube videos.
                                        All my courses are easy-to-follow, all-in-one packages that will take your
                                        skills to the next level.
                                    </p>
                                    <p>
                                        <em>
                                            These courses are exactly the courses I wish I had when I was first getting
                                            into web development!
                                        </em>
                                    </p>
                                    <p>
                                        But see for yourself, enroll in one of my courses, and join{' '}
                                        <strong>1,500,000+</strong> happy students today.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    size={cx('ud-btn-medium')}
                    ghost={cx('ud-btn-ghost')}
                    className={cx('ud-heading-sm', 'show-more-module-focusable')}
                    onClick={handleShow}
                >
                    <span>
                        {show && <span className="show-more-btn">Show more</span>}
                        {!show && <span className="show-less-btn">Ẩn bớt </span>}
                    </span>
                    {show && <ExpandIcon classNames={cx('ud-icon', 'ud-icon-xsmall', 'show-more-icon')} />}
                    {!show && <CollapseIcon classNames={cx('ud-icon', 'ud-icon-xsmall', 'show-less-icon')} />}
                </Button>
            </div>
        </div>
    );
}

export default Author;

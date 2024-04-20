import classNames from 'classnames/bind';

import styles from './Describle.module.scss';
import Button from '~/components/Button';
import { CollapseIcon, ExpandIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Description() {
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow((prev) => {
            return !prev;
        });
    };
    return (
        <div className={cx('ud-text-sm', 'component-margin')}>
            <h2 className={cx('ud-heading-xl', 'description__header')}>Describe</h2>
            <div className={cx('show-more-module')}>
                <div
                    className={cx('show-more-module-content', {
                        'height-limit': show,
                        'show-more-with-gradient': show,
                    })}
                >
                    <div>
                        <p>
                            <strong>
                                <em>Just released in December 2022 ***</em>
                            </strong>
                        </p>
                        <p>
                            <em>
                                "I have already learned more in this class than in a $12,000 coding BootCamp (...).
                                Before taking one of the Bootcamp on Udemy, you should take this class first"
                            </em>{' '}
                            – Robert
                        </p>
                        <p>
                            <br />
                        </p>
                        <p>
                            Do you want to learn the fundamentals of modern web development <strong>fast</strong>?
                        </p>
                        <p>
                            Do you want to find out if building websites and apps is the{' '}
                            <strong>right career path</strong> for you?
                        </p>
                        <p>Or maybe you just want to know what your web developer friends do all day?</p>
                        <p>In any of these cases...</p>
                        <p>
                            <strong>
                                Welcome to my "Web Development Crash Course"! Together, we will build a fun, small, but
                                full-stack web application in just a few days.
                            </strong>
                        </p>
                        <p>
                            <br />
                        </p>
                        <p>
                            <strong>
                                <em>But why this course? And why is it so short?</em>
                            </strong>
                        </p>
                    </div>
                    <div className={cx('audience')}>
                        <h2 className={cx('ud-heading-xl', 'audience-title')}>Subjects of this course:</h2>
                        <ul className={cx('audience-list')}>
                            <li>Take this course if you need a quick introduction to modern web development</li>
                            <li>Take this course if you want to find out if web development is a good career choice</li>
                            <li>
                                Take this course if you want to impress your friends by building a super cool web app in
                                a few days!
                            </li>
                        </ul>
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
    );
}

export default Description;

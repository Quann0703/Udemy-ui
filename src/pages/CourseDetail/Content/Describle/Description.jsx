import classNames from 'classnames/bind';
import MarkdownParser from '~/components/MarkdownParser';

import styles from './Describle.module.scss';
import Button from '~/components/Button';
import { CollapseIcon, ExpandIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Description({ data }) {
    const [show, setShow] = useState(true);
    const { describe } = data;
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
                    <MarkdownParser content={describe} style={{ '--font-size': '1.6rem', '--line-height': 2 }} />
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

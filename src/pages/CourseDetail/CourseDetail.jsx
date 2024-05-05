import classNames from 'classnames/bind';

import styles from './CourseDetail.module.scss';
import { MainContent, SidebarContent, TopicMenu } from './Content';
import { useEffect, useState } from 'react';
import Rating from '~/components/Rating';
import { LessonContent } from './Content/Lesson';
import Business from './Content/Business';
import LessonList from './Content/Lesson/LessonList';
import { Request } from './Content/Describle';
import Description from './Content/Describle/Description';
import CourseAbleBuy from './Content/CourseAbleBuy';
import ComboCourse from './Content/CourseAbleBuy/ComboCourse';
import Author from '~/components/Author';
import Preview from '~/components/Preview';

const cx = classNames.bind(styles);
function CourseDetail() {
    const [scrolled, setScrolled] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleClick = () => {
        setShowPreview((prev) => {
            return !prev;
        });
    };
    return (
        <>
            <main className={cx(`paid-course-landing-page__container`)}>
                <div className={cx('top-container', 'grey-background')}>
                    <div className={cx('background-inner-position-container')}>
                        <div>
                            <TopicMenu />
                            <MainContent />
                        </div>
                    </div>
                </div>
                <div className={cx('sidebar-container-position-manager')}>
                    <div
                        className={cx(
                            'course-landing-page_sidebar-container',
                            `${scrolled ? 'sidebar-container--fixed' : ''}`,
                        )}
                    >
                        <SidebarContent onClick={handleClick} />
                    </div>
                    <div
                        className={cx(
                            'course-landing-page_slider-menu-container',
                            `${scrolled ? 'sidebar-container--fixed' : ''}`,
                        )}
                    >
                        <span className={cx('slider-menu--mark')}></span>
                        <div className={cx('slider-menu__free-overrides', 'slider-menu')}>
                            <div className={cx('smart-bar-spacer', 'smart-bar-module')}></div>
                            <div className={cx('slider-menu-container-wrapper')}>
                                <div className={cx('lead-lead')}>
                                    <div className={cx('lead-title')}>
                                        Crash Course: Build a Full-Stack Web App in a Weekend!
                                    </div>
                                    <div className={cx('lead-info')}>
                                        <a href="#review" className={cx('ud-text-sm ', 'lead-rating')}>
                                            <span className={cx('star-rating-module', 'star-rating-dark-background')}>
                                                <span className={cx('ud-heading-sm', 'star-rating-number')}>4,7</span>
                                                <Rating />
                                            </span>
                                            <span>(2641 ratings)</span>
                                        </a>
                                        <div className={cx('ud-text-sm')}>
                                            <span>19879 students</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('paid-course-landing-page__body')}>
                    <div className={cx('course-landing-page__main-content')}>
                        <span className="in-page-offset-anchor"></span>
                        <LessonContent />
                        <Business />
                        <LessonList />
                        <Request />
                        <Description />
                        <CourseAbleBuy />
                        <ComboCourse />
                        <Author />
                    </div>
                </div>
            </main>
            {showPreview && <Preview backClick={handleClick} />}
        </>
    );
}

export default CourseDetail;

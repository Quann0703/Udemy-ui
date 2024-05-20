import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './CourseDetail.module.scss';
import { MainContent, SidebarContent, TopicMenu } from './Content';
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
import * as courseService from '~/services/courseService';

const cx = classNames.bind(styles);

function CourseDetail() {
    const [scrolled, setScrolled] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const { slug } = useParams();
    const [isRegistered, setIsRegistered] = useState(false);
    const [course, setCourse] = useState(null);
    const [topic, setTopic] = useState(null);
    const [track, setTrack] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        courseService
            .getCourseBySlug(slug)
            .then((res) => {
                setCourse(res.course);
                setTopic(res.topic);
                setTrack(res.track);
                setIsRegistered(res.isRegistered);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [slug]);

    const handleClick = () => {
        setShowPreview((prev) => !prev);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!course || !topic) {
        return <div>Loading...</div>;
    }

    const { title, rank, rating, studentsCount } = course;

    return (
        <>
            <main className={cx('paid-course-landing-page__container')}>
                <div className={cx('top-container', 'grey-background')}>
                    <div className={cx('background-inner-position-container')}>
                        <div>
                            <TopicMenu data={topic} />
                            <MainContent data={course} />
                        </div>
                    </div>
                </div>
                <div className={cx('sidebar-container-position-manager')}>
                    <div
                        className={cx('course-landing-page_sidebar-container', {
                            'sidebar-container--fixed': scrolled,
                        })}
                    >
                        <SidebarContent isRegistered={isRegistered} data={course} onClick={handleClick} />
                    </div>
                    <div
                        className={cx('course-landing-page_slider-menu-container', {
                            'sidebar-container--fixed': scrolled,
                        })}
                    >
                        <span className={cx('slider-menu--mark')}></span>
                        <div className={cx('slider-menu__free-overrides', 'slider-menu')}>
                            <div className={cx('smart-bar-spacer', 'smart-bar-module')}></div>
                            <div className={cx('slider-menu-container-wrapper')}>
                                <div className={cx('lead-lead')}>
                                    <div className={cx('lead-title')}>{title}</div>
                                    <div className={cx('lead-info')}>
                                        <a href="#review" className={cx('ud-text-sm', 'lead-rating')}>
                                            <span className={cx('star-rating-module', 'star-rating-dark-background')}>
                                                <span className={cx('ud-heading-sm', 'star-rating-number')}>
                                                    {rating}
                                                </span>
                                                <Rating />
                                            </span>
                                            <span>{`${rank} ratings`}</span>
                                        </a>
                                        <div className={cx('ud-text-sm')}>
                                            <span>{studentsCount} students</span>
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
                        <LessonContent data={course} />
                        <Business />
                        <LessonList data={track} />
                        <Request data={course} />
                        <Description data={course} />
                        <CourseAbleBuy />
                        <ComboCourse />
                        <Author />
                    </div>
                </div>
            </main>
            {showPreview && <Preview course={course} track={track} backClick={handleClick} />}
        </>
    );
}

export default CourseDetail;

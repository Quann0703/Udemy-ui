import classNames from 'classnames/bind';

import styles from './CourseDetail.module.scss';
import { MainContent, SidebarContent, TopicMenu } from './Content';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function CourseDetail() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 400) {
                console.log(true);
                setScrolled(true);
            } else {
                console.log(false);
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
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
                    <SidebarContent />
                </div>
                <div className={cx('')}></div>
            </div>
        </main>
    );
}

export default CourseDetail;

import classNames from 'classnames/bind';
import { SlickCourse, SlickTopic } from './Slick';
import { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import Carousel from './Carousel/Carousel';
import Partners from './Partners';
import WelcomeUser from './WelcomeUser';
import Training from './Training';
import * as courseService from '~/services/courseService';

const cx = classNames.bind(styles);
function Home() {
    const [combinedCourse, setCombinedCourse] = useState([]);

    useEffect(() => {
        courseService.getCombinedCourse().then((res) => {
            setCombinedCourse(res);
        });
    }, []);
    return (
        <>
            <main className={cx('home-page')}>
                <Carousel />
                <div className={cx('home-partners')}>
                    <div className={cx('ud-container')}>
                        <Partners />
                    </div>
                </div>
                <div className={cx('ud-container ud-page-wrapper')}>
                    <div className={cx('component-margin')}>
                        <WelcomeUser />
                    </div>
                    <div className={cx('component-margin')}>
                        <Training />
                    </div>
                    <div className={cx('component-margin')}>
                        <h2 className={cx('ud-heading-serif-xl', 'home-page-title')}>Lĩnh vực sẽ học tiếp theo</h2>
                        <div className={cx('component-margin')}>
                            <SlickCourse data={combinedCourse.proCourses} title="Khóa học trả phí" />
                        </div>
                        <div className={cx('component-margin')}>
                            <SlickCourse data={combinedCourse.freeCourses} title="Khóa học miễn phí" />
                        </div>
                        <div className={cx('component-margin')}>
                            <SlickTopic />
                        </div>
                        <div className={cx('component-margin')}>
                            <SlickCourse data={combinedCourse.languageCourse} title="Khóa học tiếng việt" />
                        </div>
                    </div>
                </div>
            </main>
            {/* <Login /> */}
        </>
    );
}

export default Home;

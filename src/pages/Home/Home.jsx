import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Carousel from './Carousel/Carousel';
import Partners from './Partners';
import WellcomeUser from './WellcomeUser';
import Training from './Training';
import { SlickCourse, SlickTopic } from './Slick';

const cx = classNames.bind(styles);
function Home() {
    return (
        <main className={cx('home-page')}>
            <Carousel />
            <div className={cx('home-partners')}>
                <div className={cx('ud-container')}>
                    <Partners />
                </div>
            </div>
            <div className={cx('ud-container ud-page-wrapper')}>
                <div className={cx('component-margin')}>
                    <WellcomeUser />
                </div>
                <div className={cx('component-margin')}>
                    <Training />
                </div>
                <div className={cx('component-margin')}>
                    <h2 className={cx('ud-heading-serif-xl', 'home-page-title')}>Lĩnh vực sẽ học tiếp theo</h2>
                    <div className={cx('component-margin')}>
                        <SlickCourse />
                    </div>
                    <div className={cx('component-margin')}>
                        <SlickTopic />
                    </div>
                    <div className={cx('component-margin')}>
                        <SlickCourse />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;

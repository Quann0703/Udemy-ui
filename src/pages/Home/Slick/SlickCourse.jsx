import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';

import styles from './Slick.module.scss';
import Header from './Header';
import Arrow from '../Carousel/Arrow';
import WrapperListCourse from './WrapperList';
import CourseHome from '~/components/Course/CourseHome';

const cx = classNames.bind(styles);
function SlickCourse({ children, title }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <Arrow nextArrow classNames={cx('slick-next-course')} />,
        prevArrow: <Arrow prevIcon classNames={cx('slick-prev-course')} />,
    };
    return (
        <>
            <Header title="Các khóa học hàng đầu về Tiếng Việt" />
            <WrapperListCourse>
                <div className={cx('slider-container')}>
                    <Slider {...settings}>
                        <div>
                            <CourseHome />
                        </div>
                        <div>
                            <CourseHome />
                        </div>
                        <div>
                            <CourseHome />
                        </div>
                        <div>
                            <CourseHome />
                        </div>
                        <div>
                            <CourseHome />
                        </div>
                        <div>
                            <CourseHome />
                        </div>
                    </Slider>
                </div>
            </WrapperListCourse>
        </>
    );
}

export default SlickCourse;

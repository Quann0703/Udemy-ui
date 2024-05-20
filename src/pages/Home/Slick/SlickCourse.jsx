import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';

import styles from './Slick.module.scss';
import Header from './Header';
import Arrow from '../Carousel/Arrow';
import WrapperListCourse from './WrapperList';
import CourseHome from '~/components/Course/CourseHome';

const cx = classNames.bind(styles);
function SlickCourse({ title, data = [] }) {
    const showArrows = data.length >= 5;
    const settings = {
        dots: false,
        infinite: data.length > 3,
        speed: 500,
        slidesToShow: Math.min(5, data.length),
        slidesToScroll: data.length >= 3 ? 3 : 1,
        nextArrow: showArrows ? <Arrow nextArrow classNames={cx('slick-next-course')} /> : null,
        prevArrow: showArrows ? <Arrow prevIcon classNames={cx('slick-prev-course')} /> : null,
        variableWidth: true,
    };
    return (
        <>
            <Header title={title} />
            <WrapperListCourse>
                <div className={cx('slider-container')}>
                    <Slider {...settings}>
                        {data.map((item) => {
                            return (
                                <div key={item.id} style={{ width: '20%' }}>
                                    <CourseHome data={item} />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </WrapperListCourse>
        </>
    );
}

export default SlickCourse;

import React from 'react';
import classNames from 'classnames/bind';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
} from 'mdb-react-ui-kit';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

export default function Profile() {
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <MDBContainer className={cx('py-5', 'h-100')}>
                <MDBRow className={cx('justify-content-center', 'align-items-center h-100')}>
                    <MDBCol xl="9">
                        <MDBCard>
                            <div
                                className={cx('rounded-top', 'text-white', 'd-flex ', 'flex-row', 'gradient-custom-2')}
                                style={{ backgroundColor: '#000', height: '200px' }}
                            >
                                <div
                                    className={cx('ms-4', ' mt-5 ', 'd-flex', ' flex-column')}
                                    style={{ width: '150px' }}
                                >
                                    <MDBCardImage
                                        src="https://img-c.udemycdn.com/user/200_H/245266240_ca52.jpg"
                                        alt="Generic placeholder image"
                                        className={cx('mt-4', ' mb-2', ' img-thumbnail')}
                                        fluid
                                        style={{ width: '150px', zIndex: '1' }}
                                    />
                                    <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }}>
                                        Edit profile
                                    </MDBBtn>
                                </div>
                                <div className={cx('ms-3')} style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">TRẦN VĂN QUÂN</MDBTypography>
                                    <MDBCardText>tranquan07112003@gmail.com</MDBCardText>
                                </div>
                            </div>
                            <div className={cx('p-4 ', 'text-black')} style={{ backgroundColor: '#f8f9fa' }}>
                                <div className={cx('d-flex', ' justify-content-end', ' text-center', ' py-1')}>
                                    <div>
                                        <MDBCardText className={cx('mb-1 ', 'h5')}>253</MDBCardText>
                                        <MDBCardText className={cx('small', ' text-muted', ' mb-0')}>
                                            Tổng học viên
                                        </MDBCardText>
                                    </div>
                                    <div className={cx('px-3')}>
                                        <MDBCardText className={cx('mb-1 ', 'h5')}>1026</MDBCardText>
                                        <MDBCardText className={cx('small', ' text-muted ', 'mb-0')}>
                                            Đánh giá
                                        </MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className={cx('mb-1', ' h5')}>478</MDBCardText>
                                        <MDBCardText className={cx('small', ' text-muted', ' mb-0')}>
                                            Tổng số khóa học
                                        </MDBCardText>
                                    </div>
                                </div>
                            </div>
                            <MDBCardBody className={cx('text-black', ' p-4')}>
                                <div className={cx('mb-5')}>
                                    <p className={cx('lead ', 'fw-normal ', 'mb-1')}>Giới thiệu</p>
                                    <div className={cx('p-4')} style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className={cx('font-italic', ' mb-1')}>
                                            Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium courses
                                            have earned the best-selling status for outstanding performance and student
                                            satisfaction
                                        </MDBCardText>
                                        <MDBCardText className={cx('font-italic', ' mb-1')}>
                                            I'm a full-stack web developer and designer with a passion for building
                                            beautiful web interfaces from scratch. I've been building websites and apps
                                            since 2010 and also have a Master's degree in Engineering.
                                        </MDBCardText>
                                        <MDBCardText className={cx('font-italic', ' mb-0')}>
                                            I discovered my passion for teaching and helping others by sharing
                                            everything I knew during college. This passion led me to Udemy in 2015,
                                            where I now have the privilege of training 1,500,000+ learners in the field
                                            of web development.
                                        </MDBCardText>
                                    </div>
                                </div>
                                <div
                                    className={cx('d-flex', ' justify-content-between ', 'align-items-center', ' mb-4')}
                                >
                                    <MDBCardText className={cx('lead ', 'fw-normal', ' mb-0')}>
                                        Recent photos
                                    </MDBCardText>
                                    <MDBCardText className={cx('mb-0')}>
                                        <a href="#!" className={cx('text-muted')}>
                                            Show all
                                        </a>
                                    </MDBCardText>
                                </div>
                                <MDBRow>
                                    <MDBCol className={cx('mb-2', 'profile-inner')}>
                                        <a href="/" className={cx('text-muted', 'profile-thumb')}>
                                            <MDBCardImage
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                alt="image 1"
                                                className={cx('rounded-3', 'thumb')}
                                            />
                                        </a>
                                        <div className={cx('info')}>
                                            <h3 className={cx('ud-heading-md', 'info-title')}>
                                                <a href="/courses/nodejs">Node &amp; ExpressJS</a>
                                            </h3>
                                            <p className={cx('info-desc')}>
                                                Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm
                                                Back-end và xây dựng RESTful API cho trang web.
                                            </p>
                                        </div>
                                    </MDBCol>
                                    <MDBCol className={cx('mb-2', 'profile-inner')}>
                                        <a href="/" className={cx('text-muted', 'profile-thumb')}>
                                            <MDBCardImage
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                alt="image 1"
                                                className={cx('rounded-3', 'thumb')}
                                            />
                                        </a>
                                        <div className={cx('info')}>
                                            <h3 className={cx('ud-heading-md', 'info-title')}>
                                                <a href="/courses/nodejs">Node &amp; ExpressJS</a>
                                            </h3>
                                            <p className={cx('info-desc')}>
                                                Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm
                                                Back-end và xây dựng RESTful API cho trang web.
                                            </p>
                                        </div>
                                    </MDBCol>
                                    <MDBCol className={cx('mb-2', 'profile-inner')}>
                                        <a href="/" className={cx('text-muted', 'profile-thumb')}>
                                            <MDBCardImage
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                alt="image 1"
                                                className={cx('rounded-3', 'thumb')}
                                            />
                                        </a>
                                        <div className={cx('info')}>
                                            <h3 className={cx('ud-heading-md', 'info-title')}>
                                                <a href="/courses/nodejs">Node &amp; ExpressJS</a>
                                            </h3>
                                            <p className={cx('info-desc')}>
                                                Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm
                                                Back-end và xây dựng RESTful API cho trang web.
                                            </p>
                                        </div>
                                    </MDBCol>
                                    <MDBCol className={cx('mb-2', 'profile-inner')}>
                                        <a href="/" className={cx('text-muted', 'profile-thumb')}>
                                            <MDBCardImage
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                alt="image 1"
                                                className={cx('rounded-3', 'thumb')}
                                            />
                                        </a>
                                        <div className={cx('info')}>
                                            <h3 className={cx('ud-heading-md', 'info-title')}>
                                                <a href="/courses/nodejs">Node &amp; ExpressJS</a>
                                            </h3>
                                            <p className={cx('info-desc')}>
                                                Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm
                                                Back-end và xây dựng RESTful API cho trang web.
                                            </p>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

import classNames from 'classnames/bind';

import styles from './Register.module.scss';
import AuthModal from '~/components/AuthModal/AuthModal';
import Header from './Header';
import SigninBtn from '~/components/SigninBtn';

import { useState } from 'react';
import LoginBack from './LoginBack';
import { FacebookIcon, GithubIcon, GoogleIcon, PersonalIcon } from '~/components/Icons';
import Register from './Register';
import useAuthModal from '~/hooks/useAuthModal';
import { openAuthModal } from '~/store/actions/authModalAction';

const cx = classNames.bind(styles);
function Login() {
    const [register, setRegister] = useState(false);
    const { dispatch } = useAuthModal();

    const handleShowSignIn = () => {
        dispatch(openAuthModal());
    };
    const handleShowRegister = () => {
        setRegister((prev) => !prev);
    };
    return (
        <AuthModal>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        {register && <LoginBack onBack={handleShowRegister} />}
                        <Header />
                        <div className={cx('body')}>
                            <div className={cx('mainStep')}>
                                {!register ? (
                                    <>
                                        <SigninBtn
                                            icon={
                                                <PersonalIcon
                                                    classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-neutral')}
                                                />
                                            }
                                            title="Sử dụng email / số điện thoại"
                                            onSignIn={handleShowRegister}
                                        />
                                        <SigninBtn
                                            icon={
                                                <GoogleIcon
                                                    classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-neutral')}
                                                />
                                            }
                                            title="Đăng nhập với Google"
                                        />
                                        <SigninBtn
                                            icon={
                                                <FacebookIcon
                                                    classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-neutral')}
                                                />
                                            }
                                            title="Đăng nhập với Facebook"
                                        />
                                        <SigninBtn
                                            icon={
                                                <GithubIcon
                                                    classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-neutral')}
                                                />
                                            }
                                            title="Đăng nhập với Github"
                                        />
                                    </>
                                ) : (
                                    <div className={cx('formBody')}>
                                        <Register />
                                    </div>
                                )}
                            </div>
                            <p className={cx('dontHaveAcc')}>
                                Bạn đã có tài khoản? <button onClick={handleShowSignIn}>Đăng Nhập</button>
                            </p>
                        </div>
                        <div className={cx('acceptTerm')}>
                            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
                            <a href="https://fullstack.edu.vn/terms" target="_top">
                                điều khoản sử dụng
                            </a>
                            của chúng tôi.
                        </div>
                    </div>
                </div>
            </div>
        </AuthModal>
    );
}

export default Login;

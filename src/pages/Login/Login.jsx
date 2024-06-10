import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import AuthModal from '~/components/AuthModal/AuthModal';
import Header from './Header';
import SigninBtn from '~/components/SigninBtn';
import SignIn from './SignIn';
import { useState } from 'react';
import LoginBack from './LoginBack';
import { FacebookIcon, GithubIcon, GoogleIcon, PersonalIcon } from '~/components/Icons';
import useAuthModal from '~/hooks/useAuthModal';
import { openRegister } from '~/store/actions/authModalAction';

const cx = classNames.bind(styles);
function Login() {
    const [signIn, setSign] = useState(false);
    const { dispatch } = useAuthModal();
    const handleShowSignIn = () => {
        setSign((prev) => !prev);
    };
    const handleShowRegister = () => {
        dispatch(openRegister());
    };
    return (
        <AuthModal>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        {signIn && <LoginBack onBack={handleShowSignIn} />}
                        <Header />
                        <div className={cx('body')}>
                            <div className={cx('mainStep')}>
                                {!signIn ? (
                                    <>
                                        <SigninBtn
                                            icon={
                                                <PersonalIcon
                                                    classNames={cx('ud-icon', 'ud-icon-small', 'ud-icon-color-neutral')}
                                                />
                                            }
                                            title="Sử dụng email / số điện thoại"
                                            onSignIn={handleShowSignIn}
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
                                        <SignIn />
                                    </div>
                                )}
                            </div>
                            <p className={cx('dontHaveAcc')}>
                                Bạn chưa có tài khoản? <button onClick={handleShowRegister}>Đăng ký</button>
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

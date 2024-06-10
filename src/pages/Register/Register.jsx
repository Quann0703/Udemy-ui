import classNames from 'classnames/bind';
import { toast } from 'react-toastify';

import styles from './Register.module.scss';
import FormControl from '~/components/FormControl';
import FormLabel from '~/components/FormLabel';
import FormInput from '~/components/FormInput';
import { useState } from 'react';
import Button from '~/components/Button';
import { register } from '~/services/authService';
// import useAuthModal from '~/hooks/useAuthModal';
// import { openAuthModal } from '~/store/actions/authModalAction';

const cx = classNames.bind(styles);
function Register() {
    const [isError, setIsError] = useState(false);
    // const { dispatch } = useAuthModal();
    const [formValue, setFormValue] = useState({
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
    });
    const handleChangeFormValue = (e) => {
        setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    // const handleFocusInput = () => {
    //     if (!!error) {
    //         dispatch(clearAccount());
    //         setIsError(false);
    //     }
    // };
    console.log(formValue);
    const handleSubmit = (event) => {
        event.preventDefault();
        register(formValue)
            .then(() => {
                // dispatch(openAuthModal());
                toast.success('tạo tài khoản thành công');
            })
            .catch(() => {
                toast.error('Tạo tài khoản thất bại');
                setIsError(true);
            });
    };
    return (
        <>
            <FormControl>
                <FormLabel label={'Full name'} />
                <FormInput
                    value={formValue.username}
                    name={'username'}
                    type={'username'}
                    placeholder={'User name address'}
                    invalid={isError}
                    // onFocus={handleFocusInput}
                    onChange={handleChangeFormValue}
                />
            </FormControl>
            <FormControl>
                <FormInput
                    value={formValue.email}
                    name={'email'}
                    type={'email'}
                    placeholder={'Email address'}
                    invalid={isError}
                    // onFocus={handleFocusInput}
                    onChange={handleChangeFormValue}
                />
            </FormControl>
            <FormControl>
                <FormInput
                    value={formValue.password}
                    name={'password'}
                    type={'password'}
                    placeholder={'Password'}
                    invalid={isError}
                    // onFocus={handleFocusInput}
                    onChange={handleChangeFormValue}
                />
            </FormControl>
            <FormControl>
                <FormInput
                    value={formValue.repeatPassword}
                    name={'repeatPassword'}
                    type={'password'}
                    placeholder={'repeatPassword'}
                    invalid={isError}
                    // onFocus={handleFocusInput}
                    onChange={handleChangeFormValue}
                />
            </FormControl>
            {(formValue.password || formValue.email || formValue.username) && isError && (
                <p className={cx('feedback')}>{/* {error} */}</p>
            )}

            <Button size={cx('ud-btn-medium')} className={cx('ud-heading-sm', 'btn-sign-in')} onClick={handleSubmit}>
                <div className={cx('inner')}>
                    <span className={cx('text')}>Đăng ký</span>
                </div>
            </Button>
        </>
    );
}

export default Register;

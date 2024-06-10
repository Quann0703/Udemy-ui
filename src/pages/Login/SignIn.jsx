import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import FormControl from '~/components/FormControl';
import FormLabel from '~/components/FormLabel';
import FormInput from '~/components/FormInput';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import { clearAccount, doLogin } from '~/store/actions/accountAction';
import useAccount from '~/hooks/useAccount';

const cx = classNames.bind(styles);
function SignIn() {
    const {
        state: { error },
        dispatch,
    } = useAccount();
    const [isError, setIsError] = useState(false);
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (formValue.email && formValue.password) {
            if (error) {
                setIsError(true);
            }
        } else {
            setIsError(false);
        }
    }, [formValue, error]);
    const handleChangeFormValue = (e) => {
        setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        doLogin({ dispatch, data: formValue });
    };
    const handleFocusInput = () => {
        if (!!error) {
            dispatch(clearAccount());
            setIsError(false);
        }
    };
    return (
        <>
            <FormControl>
                <FormLabel label={'Email'} />
                <FormInput
                    value={formValue.email}
                    name={'email'}
                    type={'email'}
                    placeholder={'Email address'}
                    invalid={isError}
                    onFocus={handleFocusInput}
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
                    onFocus={handleFocusInput}
                    onChange={handleChangeFormValue}
                />
            </FormControl>
            {(formValue.password || formValue.email) && isError && <p className={cx('feedback')}>{/* {error} */}</p>}

            <Button
                size={cx('ud-btn-medium')}
                className={cx('ud-heading-sm', 'btn-sign-in')}
                onClick={handleSubmitLogin}
            >
                <div className={cx('inner')}>
                    <span className={cx('text')}>Đăng nhập</span>
                </div>
            </Button>
        </>
    );
}

export default SignIn;

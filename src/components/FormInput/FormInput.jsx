import classnames from 'classnames/bind';

import styles from './FormInput.module.scss';

const cx = classnames.bind(styles);

function FormInput({ value, name, type, placeholder, invalid, onFocus, onChange, ...props }) {
    return (
        <div
            className={cx('wrapper', {
                error: invalid,
            })}
        >
            <input
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                onFocus={onFocus}
                onChange={onChange}
                {...props}
            />
        </div>
    );
}

export default FormInput;

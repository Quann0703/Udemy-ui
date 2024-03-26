import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    secondary = false,
    ghost = false,
    btnText = false,
    size = false,
    disabled = false,
    rounded = false,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', 'ud-btn', {
        btnText,
        disabled,
        [size]: size,
        [rounded]: rounded,
        [primary]: primary,
        [secondary]: secondary,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {/* <div className={cx('title')}>{children}</div> */}
            {children}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    ghost: PropTypes.string,
    size: PropTypes.string,
    btnText: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.string,
};
export default Button;

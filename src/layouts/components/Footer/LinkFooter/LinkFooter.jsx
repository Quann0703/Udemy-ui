import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function LinkFooter({ title, to, href, classNames, ...passProps }) {
    let Comp = 'Link';
    const props = {
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('link white-link', 'ud-text-sm', classNames);
    return (
        <Comp className={classes} {...props}>
            {title}
        </Comp>
    );
}
LinkFooter.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    classNames: PropTypes.string,
    title: PropTypes.string,
};
export default LinkFooter;

import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Group.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import GroupBtn from './GroupBtn';

const cx = classNames.bind(styles);
function Group({ children, content = {} }) {
    const renderItems = () => {
        return (
            <div className={cx('group-item')}>
                <span className={cx('group-text', 'ud-heading-lg')}>{content.text}</span>
                <GroupBtn title={content.textBtn} />
            </div>
        );
    };
    const renderResult = (attrs) => {
        return (
            <div className={cx('group-content')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div className={cx('group-body')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <HeadlessTippy interactive offset={[-5, 3]} delay={[0, 50]} placement="bottom-end" render={renderResult}>
                {children}
            </HeadlessTippy>
        </div>
    );
}
Group.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.object,
};
export default Group;

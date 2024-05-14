import classNames from 'classnames/bind';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';
import useModal from '~/hooks/useModal';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Modal({ children }) {
    const {
        state: { isOpen },
    } = useModal();

    const div = document.createElement('div');
    useEffect(() => {
        document.body.appendChild(div);
        return () => {
            document.body.removeChild(div);
        };
    }, [isOpen]);

    return ReactDOM.createPortal(
        <div className={cx('wrapper', { closing: !isOpen })}>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        div,
    );
}

export default Modal;

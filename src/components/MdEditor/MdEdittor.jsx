import classNames from 'classnames/bind';
import MDEditor from '@uiw/react-md-editor';

import styles from './MdEditor.module.scss';

const cx = classNames.bind(styles);
function MdEditor({ value, onchangeValue }) {
    return (
        <div className={cx('container')}>
            <MDEditor
                value={value}
                onChange={onchangeValue}
                preview="edit"
                textareaProps={{
                    placeholder: 'Bạn có thắc mắc gì bài học này',
                }}
            />
        </div>
    );
}

export default MdEditor;

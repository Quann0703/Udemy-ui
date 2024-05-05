import classNames from 'classnames/bind';

import styles from './Preview.module.scss';
import { PlayIcon } from '../Icons';

const cx = classNames.bind(styles);
function PreviewItem({ current }) {
    return (
        <button
            className={cx('ud-custom-focus-visible', 'course-preview--preview-row', {
                'course-preview--current-preview-row': current,
            })}
        >
            <div className={cx('course-preview--preview-thumbnail-wrapper')}>
                <img
                    src="https://mp4-c.udemycdn.com/2023-05-06_12-23-32-789a0008d98961008b999ea05e88ab77/2/thumb-1.jpg?Expires=1713851681&Signature=Da4q5t9PrqPqeXj6b8pJnu5QiNNP~5djXcXNsjjI8mUvOAIW3kLYmbnKMT4HcTljdpTqmlB5mhj-eNqSFSm2yXvvQW~xNbrtBGHQf-KMY7GcaTsFMRYGLotdqdHUfI0KuPLSIGpbL-REAdU2G9O566jVpEkU3MUz2lYTsA009WHB1kT5gqXxpefEci-pR4JyaGJImKDcm0njc8IZ5~XotKQirsOtfPSgP452f3sH9nSbkif~X6P2P7QHrNblz5PhPVTrP2If6CJHoOVmrXSMxWm3A2kV-Xc8NMusXlhpClZy7OOOg0~4Qdg2DCRVpj7W4c34HmRVNO85xGcimTiJdQ__&Key-Pair-Id=K3MG148K9RIRF4"
                    alt=""
                    width={640}
                    height={480}
                    className={cx('course-preview--preview-thumbnail')}
                    loading="lazy"
                />
            </div>
            <PlayIcon classNames={cx('ud-icon', 'ud-icon-small', 'course-preview--icon')} />
            <div className={cx('ud-heading-sm', 'ud-focus-visible-target', 'course-preview--preview-title')}>
                React Pro TypeScript - Thực Hành Dự Án Portfolio
            </div>
            <div className={cx('ud-heading-xs')}>07:19</div>
        </button>
    );
}

export default PreviewItem;

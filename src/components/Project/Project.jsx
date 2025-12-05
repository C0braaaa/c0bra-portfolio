import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import classNames from 'classnames/bind';
import { Element } from 'react-scroll';
import styles from './Project.module.scss';

const cx = classNames.bind(styles);

function Project() {
    const [ref, isVisible] = useIntersectionObserver();
    return (
        <Element name="project">
            <div ref={ref} className={cx('wrapper', { 'is-visible': isVisible })}>
                <h1>Project</h1>
            </div>
        </Element>
    );
}

export default Project;

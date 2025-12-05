import classNames from 'classnames/bind';
import { Element } from 'react-scroll';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import styles from './Skill.module.scss';

const cx = classNames.bind(styles);
function Skill() {
    const [ref, isVisible] = useIntersectionObserver();
    return (
        <Element name="skill">
            <div ref={ref} className={cx('wrapper', { 'is-visible': isVisible })}>
                <h1>Skill</h1>
            </div>
        </Element>
    );
}

export default Skill;

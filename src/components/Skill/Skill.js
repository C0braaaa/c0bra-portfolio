import classNames from 'classnames/bind';
import { Element } from 'react-scroll';

import styles from './Skill.module.scss';

const cx = classNames.bind(styles);
function Skill() {
    return (
        <Element name="skill">
            <div className={cx('wrapper')}>
                <h1>Skill</h1>
            </div>
        </Element>
    );
}

export default Skill;

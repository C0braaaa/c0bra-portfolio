import classNames from 'classnames/bind';
import { Element } from 'react-scroll';

import styles from './About.module.scss';

const cx = classNames.bind(styles);

function AboutMe() {
    return (
        <Element name="about">
            <div className={cx('wrapper')}></div>
        </Element>
    );
}

export default AboutMe;

import classNames from 'classnames/bind';
import { Element } from 'react-scroll';

import styles from './Home.module.scss';
import Button from '../Button/index-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <Element name="home">
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <p className={cx('p-1', 'fade-in-left')}>
                        Hello, I'm <span className={cx('span-1')}>Thanh Hieu</span>
                    </p>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <h1>I'm a</h1> <h1 className={cx('text-animate')}>Frontend Web Developer</h1>
                    </div>
                    <p className={cx('p-2', 'fade-in-left')}>
                        I’m passionate about creating clean, interactive, and responsive web experiences. I love turning
                        ideas into reality through code — especially using modern tools like React and TypeScript. In
                        the future, I aim to keep improving my skills and expand my knowledge to become a full-stack
                        developer.
                    </p>
                    <div className={cx('button')}>
                        <Button primary>See my CV</Button>
                        <Button outline>See my CV</Button>
                    </div>
                    <div className={cx('social')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faGithub} />
                        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                        <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                        <FontAwesomeIcon className={cx('icon')} icon={faLinkedinIn} />
                    </div>
                </div>
                <div className={cx('avatar')}>
                    <img className={cx('avatar-1')} src="assets/bruno.jpg" alt="avatar" />
                </div>
            </div>
        </Element>
    );
}

export default Home;

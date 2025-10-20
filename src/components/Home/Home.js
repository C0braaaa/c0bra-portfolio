import classNames from 'classnames/bind';
import { Element } from 'react-scroll';

import BlurText from '../UI/BlurText';
import styles from './Home.module.scss';
import Button from '../Button/index-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ProfileCard from '../UI/ProfileCard/ProfileCard';

const cx = classNames.bind(styles);

function Home() {
    const icons = [
        {
            icon: faGithub,
        },
        {
            icon: faFacebookF,
        },
        {
            icon: faInstagram,
        },
        {
            icon: faLinkedinIn,
        },
    ];
    return (
        <Element name="home">
            <div className={cx('wrapper')}>
                <div className={cx('content', 'fade-in-top')}>
                    <p className={cx('p-1', 'fade-in-right')}>
                        Hello, I'm <span className={cx('span-1')}>Thanh Hieu</span>
                    </p>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <h1>I'm a</h1> <h1 className={cx('text-animate')}>Frontend Web Developer</h1>
                    </div>
                    <BlurText
                        text="I’m passionate about creating clean, interactive, and responsive web experiences. I love turning
                        ideas into reality through code — especially using modern tools like React and TypeScript. In
                        the future, I aim to keep improving my skills and expand my knowledge to become a full-stack
                        developer."
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className={cx('p-2')}
                    />
                    <div className={cx('button')}>
                        <Button primary large className={cx('fade-in-left')}>
                            See my CV
                        </Button>
                        <Button outline large className={cx('fade-in-right')}>
                            See my CV
                        </Button>
                    </div>
                    <div className={cx('social')}>
                        {icons.map(({ icon }, index) => {
                            return (
                                <div className={cx('social-icon')} key={index}>
                                    <FontAwesomeIcon className={cx('icon')} icon={icon} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <ProfileCard
                    name="Thanh Hieu"
                    title="Frontend Web Developer"
                    handle="C0bra"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="assets/bruno-removebg-preview.png"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>
        </Element>
    );
}

export default Home;

import classNames from 'classnames/bind';
import { Element, Link } from 'react-scroll';

import BlurText from '../UI/BlurText';
import styles from './Home.module.scss';
import Button from '../Button/index-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3,
    faFacebookF,
    faGithub,
    faHtml5,
    faInstagram,
    faJs,
    faLinkedinIn,
    faReact,
    faSass,
} from '@fortawesome/free-brands-svg-icons';
import ProfileCard from '../UI/ProfileCard/ProfileCard';

const cx = classNames.bind(styles);

function Home() {
    const icons = [
        {
            icon: faGithub,
            to: 'https://github.com/C0braaaa',
        },
        {
            icon: faFacebookF,
            to: 'https://www.youtube.com/shorts/SXHMnicI6Pg',
        },
        {
            icon: faInstagram,
        },
        {
            icon: faLinkedinIn,
        },
    ];

    const iconsLoop = [
        {
            icon: faHtml5,
            name: 'HTML5',
            color: '#DE4B25',
        },
        {
            icon: faCss3,
            name: 'CSS3',
            color: '#026DB5',
        },
        {
            icon: faSass,
            name: 'SASS',
            color: '#C86394',
        },
        {
            icon: faJs,
            name: 'Javascript',
            color: '#E8D44D',
        },
        {
            icon: faReact,
            name: 'ReactJs',
            color: '#5ED3F3',
        },
        {
            icon: faCss3,
            name: 'CSS3',
            color: '#026DB5',
        },
        {
            icon: faSass,
            name: 'SASS',
            color: '#C86394',
        },
        {
            icon: faJs,
            name: 'Javascript',
            color: '#E8D44D',
        },
        {
            icon: faReact,
            name: 'ReactJs',
            color: '#5ED3F3',
        },
        {
            icon: faSass,
            name: 'SASS',
            color: '#C86394',
        },
        {
            icon: faJs,
            name: 'Javascript',
            color: '#E8D44D',
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
                        delay={50}
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
                    <div className={cx('social', 'wave')}>
                        {icons.map((value, index) => {
                            return (
                                <div className={cx('social-icon')} key={index}>
                                    <a href={value.to} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className={cx('icon')} icon={value.icon} />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('flip-horizontal')} style={{ marginRight: 50 }}>
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
            </div>
            <div className={cx('logo-loop')}>
                <div className={cx('loop-line')}>
                    {iconsLoop.map((value, index) => (
                        <div key={index} className={cx('loop-item')}>
                            <FontAwesomeIcon
                                className={cx('loop-icon')}
                                icon={value.icon}
                                style={{ color: value.color }}
                            />
                            <span className={cx('icon-name')}>{value.name}</span>
                        </div>
                    ))}

                    {iconsLoop.map((value, index) => (
                        <div key={index} className={cx('loop-item')}>
                            <FontAwesomeIcon
                                className={cx('loop-icon')}
                                icon={value.icon}
                                style={{ color: value.color }}
                            />
                            <span className={cx('icon-name')}>{value.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    );
}

export default Home;

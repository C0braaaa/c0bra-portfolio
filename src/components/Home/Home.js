import classNames from 'classnames/bind';
import { useState } from 'react';
import { Element } from 'react-scroll';

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
import BlurText from '../React-Bits/BlurText';

const cx = classNames.bind(styles);

function Home() {
    const [showCV, setShowCV] = useState(false);
    const icons = [
        {
            icon: faGithub,
            to: 'https://github.com/C0braaaa',
        },
        {
            icon: faFacebookF,
            to: 'https://www.facebook.com/c0bra.0f',
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
            <div className={cx('father')}>
                <div className={cx('wrapper')}>
                    <div className={cx('content', 'fade-in-top')}>
                        <p className={cx('p-1', 'fade-in-right')}>
                            Hello, I'm <span className={cx('span-1')}>Thanh Hieu</span>
                        </p>
                        <div style={{ display: 'flex', gap: 12 }}>
                            <h1>I'm a</h1> <h1 className={cx('text-animate')}>Frontend Web Developer</h1>
                        </div>
                        <BlurText
                            text="I’m passionate about building clean, interactive, and fully responsive web 
                            experiences that feel smooth and intuitive to users. I love turning ideas into 
                            real, usable products — from designing the layout to refining the interface and 
                            bringing everything to life with React. Moving forward, I’m dedicated to improving 
                            my skills, exploring new technologies, and expanding my knowledge to eventually grow 
                            into a capable full-stack developer who can handle both the front end and back end 
                            with confidence."
                            delay={50}
                            animateBy="words"
                            direction="top"
                            className={cx('p-2')}
                        />
                        <div className={cx('btn')}>
                            <Button primary large className={cx('fade-in-left')} onClick={() => setShowCV(true)}>
                                See my CV
                            </Button>
                        </div>
                        <div className={cx('social')}>
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
                    <div className={cx('card', 'flip-horizontal')} style={{ marginRight: 50 }}>
                        <img src="assets/thumb.svg" alt="thumb" />
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
                {showCV && (
                    <div className={cx('cv-container')}>
                        <div className={cx('overlay')} onClick={() => setShowCV(false)}></div>
                        <div className={cx('cv')}>
                            <iframe
                                src="assets/CV_Pham_Thanh_Hieu.pdf"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </div>
                )}
                <div className={cx('nofication')}>
                    <h3>
                        This portfolio website is currently not optimized for mobile and tablet yet; I will improve it
                        in the future.
                    </h3>
                </div>
            </div>
        </Element>
    );
}

export default Home;

import classNames from 'classnames/bind';
import { Element } from 'react-scroll';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import styles from './About.module.scss';
import ProfileCard from '../React-Bits/ProfileCard/ProfileCard';
import SplitText from '../React-Bits/SplitText/SplitText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faBuildingColumns, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AboutMe() {
    const [ref, isVisible] = useIntersectionObserver();
    const list = [
        {
            icon: faUser,
            title: 'Name',
            name: 'Pham Thanh Hieu',
        },
        {
            icon: faLocationDot,
            title: 'Location',
            name: 'Da Nang, Vietnam',
        },
        {
            icon: faEnvelope,
            title: 'Email',
            name: 'thanhhieu151204@gmail.com',
        },
        {
            icon: faBuildingColumns,
            title: 'Studying At',
            name: 'The University of Danang, University of Science and Education',
        },
        {
            icon: faPhone,
            title: 'Phone',
            name: '0905164715',
        },
        {
            icon: faBriefcase,
            title: 'Profession',
            name: 'Student',
        },
    ];
    return (
        <Element name="about">
            <div ref={ref} className={cx('wrapper', { 'is-visible': isVisible })}>
                <div className={cx('title')}>
                    <h1>About Me</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-side')}>
                        <div className={cx('avatar')}>
                            <ProfileCard
                                name="Thanh Hieu"
                                title="Frontend Developer"
                                handle="THieu"
                                status="Online"
                                contactText="Contact Me"
                                avatarUrl="assets/anh_the_cv.png"
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={false}
                                onContactClick={() => console.log('Contact clicked')}
                            />
                        </div>
                    </div>
                    <div className={cx('right-side')}>
                        <SplitText
                            text=" My name is Hieu, and I am 21 years old. I am currently a final–year student at the The
                            University of Danang, University of Science and Education, majoring in Information
                            Technology. My current goal is to find an internship where I can develop my skills, gain
                            experience, and apply the knowledge I have learned."
                            className="text-2xl font-semibold text-center"
                            delay={20}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="left"
                        />
                        <div className={cx('info-list')}>
                            {list.map((item, index) => (
                                <div
                                    className={cx('info-item')}
                                    key={index}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <div className={cx('info')}>
                                        <div className={cx('title')}>{item.title}</div>
                                        <div className={cx('name')}>{item.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default AboutMe;

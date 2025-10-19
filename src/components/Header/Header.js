import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-scroll';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const list = [
        {
            label: 'Home',
            to: 'home',
        },
        {
            label: 'About Me',
            to: 'about',
        },
        {
            label: 'Skill',
            to: 'skill',
        },
        {
            label: 'Project',
            to: 'project',
        },
        {
            label: 'Contact',
            to: 'contact',
        },
    ];

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper', { scrolled: scroll })}>
            <Link to="home" smooth={true} duration={500} offset={-65}>
                <div className={cx('author-name')}>
                    <p>
                        C0bra<span className={cx('label')}>DEV</span>
                    </p>
                </div>
            </Link>
            <nav className={cx('navigator')}>
                <ul className={cx('list-nav')}>
                    {list.map((value, index) => {
                        return (
                            <Link
                                activeClass={cx('active')}
                                to={value.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                key={index}
                                offset={-65}
                                className={!scroll && index === 0 ? cx('active') : ''}
                            >
                                <li>{value.label}</li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Header;

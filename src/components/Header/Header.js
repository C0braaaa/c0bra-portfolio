import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-scroll';

import styles from './Header.module.scss';
import ThemeToggle from '../ThemeContext/ThemeToogle';

const cx = classNames.bind(styles);

function Header() {
    const list = [
        {
            label: 'Home',
            to: 'home',
        },
        {
            label: 'About',
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
    const lastScrollYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const wasScrolled = lastScrollYRef.current > 0;
            const isScrolled = currentScrollY > 0;

            // Chỉ update state khi trạng thái scrolled thay đổi
            if (wasScrolled !== isScrolled) {
                setScroll(isScrolled);
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper', { scrolled: scroll })}>
            <Link to="home" smooth={true} duration={200}>
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
                                duration={200}
                                spy={true}
                                key={index}
                                offset={-65}
                            >
                                <li>{value.label}</li>
                            </Link>
                        );
                    })}
                    <ThemeToggle />
                </ul>
            </nav>
        </div>
    );
}

export default Header;

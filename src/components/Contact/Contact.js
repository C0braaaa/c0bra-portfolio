import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    const [ref, isVisible] = useIntersectionObserver();
    return (
        <div ref={ref} className={cx('wrapper', { 'is-visible': isVisible })}>
            <h1>Contact</h1>
        </div>
    );
}

export default Contact;

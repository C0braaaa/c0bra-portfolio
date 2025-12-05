import classNames from 'classnames/bind';
import { Element } from 'react-scroll';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import styles from './Skill.module.scss';

const cx = classNames.bind(styles);
function Skill() {
    const list = [
        {
            src: 'assets/skill/vscode.svg',
            name: 'Visual Studio Code',
            note: 'Code Editor',
        },
        {
            src: 'assets/skill/reactjs.svg',
            name: 'React JS',
            note: 'Framework',
        },
        {
            src: 'assets/skill/js.svg',
            name: 'JavaScript',
            note: 'Language',
        },
        {
            src: 'assets/skill/github.svg',
            name: 'Github',
            note: 'Repository',
        },
        {
            src: 'assets/skill/html.svg',
            name: 'HTML',
            note: 'Markup Language',
        },
        {
            src: 'assets/skill/css.svg',
            name: 'CSS',
            note: 'Markup Language',
        },
        {
            src: 'assets/skill/mysql.svg',
            name: 'MySql',
            note: 'Database',
        },
    ];
    const [ref, isVisible] = useIntersectionObserver();
    return (
        <Element name="skill">
            <div ref={ref} className={cx('wrapper', { 'is-visible': isVisible })}>
                <div className={cx('heading')}>
                    <h1>Tools & Technologies</h1>
                    <p>My Skills</p>
                </div>
                <div className={cx('list-skill')}>
                    {list.map((item, index) => (
                        <div key={index} className={cx('item-skill')} style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className={cx('icon')}>
                                <img src={item.src} alt="" />
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('name')}>{item.name}</div>
                                <div className={cx('note')}>{item.note}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    );
}

export default Skill;

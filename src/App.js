import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutMe from './components/About/aboutMe';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Header />
            <Home />
            <AboutMe />
            <Skill />
            <Project />
        </div>
    );
}

export default App;

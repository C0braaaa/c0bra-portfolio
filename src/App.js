import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutMe from './components/About/aboutMe';
import Skill from './components/Skill/Skill';
import DarkVeil from './components/UI/DarkVeil/DarkVeil';

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <DarkVeil />
            <Header />
            <Home />
            {/* <AboutMe /> */}
        </div>
    );
}

export default App;

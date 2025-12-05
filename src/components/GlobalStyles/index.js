import './GlobalStyles.module.scss';
import { ThemeProvider } from '../ThemeContext/ThemeContext';

function GlobalStyles({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}

export default GlobalStyles;

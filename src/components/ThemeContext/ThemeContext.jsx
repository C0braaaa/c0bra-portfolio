import { createContext, useContext, useState, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or system preference
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    useEffect(() => {
        // Apply theme to document
        const htmlElement = document.documentElement;

        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.setAttribute('data-theme', 'light');
        }

        // Save to localStorage
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        theme,
        toggleTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light',
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Custom hook to use theme context
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

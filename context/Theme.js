import { createContext, useContext, useEffect, useState } from 'react';

export const defaultTheme = 'light'

export const ThemeContext = createContext({
    theme: defaultTheme,
    setTheme: () => {}
})

const ThemeProvider = ({ theme, setTheme, children }) => {
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    )
}

export const Theme = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.setAttribute('data-theme', 'tw-dark')
        } else {
            document.documentElement.removeAttribute('data-theme')
        }
    }, [theme])

    return (
        <ThemeProvider theme={theme} setTheme={setTheme}>
            {children}
        </ThemeProvider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) return;
    return context;
}
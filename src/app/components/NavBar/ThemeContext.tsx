import { createContext, ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const initialThemeContext: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme: nextTheme, setTheme: setNextTheme } = useTheme();
  const theme = nextTheme || initialThemeContext.theme;

  const toggleTheme = () => {
    setNextTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemeProvider>
    </ThemeContext.Provider>
  );
};
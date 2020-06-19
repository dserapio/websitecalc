import React from 'react';


export const lightTheme = {
    name: 'light',
    main: 'white',
    mainAlt: '#f3f0ed',
    off: 'black',
    offAlt: '#909090'
};

export const darkTheme = {
    name: 'dark',
    main: '#2b2a2a',
    mainAlt: '#36383d',
    off: 'lightgray',
    offAlt: '#909090'
}

/**
 * Takes in a previous theme, and returns
 * a new theme, swapping between the light and
 * dark theme; this function is meant to be used
 * with the useReducer hook, but the second arg
 * is not used, and is ignored
 * @param {Object} theme the previous theme state
 * @param {string} theme.name
 * @param {string} theme.main
 * @param {string} theme.mainAlt
 * @param {string} theme.off
 * @param {string} theme.offAlt
 */
export const toggleTheme = (theme) => {
    switch(theme.name) {
        case 'light':
            return darkTheme;
        case 'dark':
            return lightTheme;
        default:
            throw new Error();
    }
}

/**
 * Specifies the primary and secondary colors to be
 * used for styling components
 */
const ThemeContext = React.createContext(lightTheme);

export default ThemeContext;
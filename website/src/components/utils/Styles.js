import React from 'react';
import { MobileView, BrowserView } from 'react-device-detect';
import '../../App.css';

/**
 * Determines if content classes for the children based on
 * if viewing in the browser or mobile
 * @param {object} props
 * @param {JSX.Element} props.children
 */
export const ContentWrap = ({children}) => <>
    <BrowserView>
        <div className='content'>
            {children}
        </div>
    </BrowserView>
    <MobileView>
        <div className='content mobile'>
            {children}
        </div>
    </MobileView>
</>;

export const lightTheme = {
    name: 'light',
    main: 'white',
    mainAlt: '#FEF5F5',
    off: 'black',
    offAlt: '#909090'
};

export const darkTheme = {
    name: 'dark',
    main: '#383530',
    mainAlt: '#2b2a2a',
    off: 'lightgray',
    offAlt: 'lightgray'
}

export const toggleTheme = (theme, {name}) => {
    switch(name) {
        case 'light':
            return lightTheme;
        case 'dark':
            return darkTheme;
        default:
            throw new Error();
    }
}

export const ThemeContext = React.createContext(lightTheme);
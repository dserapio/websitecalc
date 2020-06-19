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

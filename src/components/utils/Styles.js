import React from 'react';
import {
    CustomView, MobileView, isMobile, isBrowser 
} from 'react-device-detect';
import '../../App.css';

/**
 * Determines if content classes for the children based on
 * if viewing in the browser or mobile
 * @param {object} props
 * @param {JSX.Element} props.children
 */
export const ContentWrap = ({children}) => <>
    <CustomView condition={!isMobile && isBrowser} viewClassName='content'>
        {children}
    </CustomView>
    <MobileView viewClassName='content mobile'>
        {children}
    </MobileView>
</>;

import React from 'react';
import { MobileView, BrowserView } from 'react-device-detect';
import '../../App.css';

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
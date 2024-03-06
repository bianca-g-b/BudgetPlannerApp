import { useEffect } from 'react';

export function useHandleMenuStyle({screenWidth, setLinkFontSize, setMenuIconFontSize, setLinkMargin}) {
    useEffect(() => {
        let linkFontSize;
        let menuIconFontSize;
        let linkMargin;
        if (screenWidth < 500 && screenWidth >= 350) {
            linkFontSize = '1rem';
            menuIconFontSize = '1.2rem';
            linkMargin = 0;
        } else if (screenWidth < 350) {
            linkFontSize = '0.8rem';
            menuIconFontSize = '1rem';
            linkMargin = 0;
        } else {
            linkFontSize = '1.2rem';
            menuIconFontSize = '1.5rem';
            linkMargin = '15px';
        }

        setLinkFontSize(linkFontSize);
        setMenuIconFontSize(menuIconFontSize);
        setLinkMargin(linkMargin);
    }, [screenWidth, setLinkFontSize, setMenuIconFontSize, setLinkMargin])
}
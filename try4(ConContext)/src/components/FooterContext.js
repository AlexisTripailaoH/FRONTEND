import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

const FooterContext = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <footer className={theme}>
            <h4>Mi Pié de página</h4>
        </footer>
    )
}

export default FooterContext;
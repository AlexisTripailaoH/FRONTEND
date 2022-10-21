import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

const MainContext = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <main className={theme}>
            <p>Bienvenid@ invitad@</p>
            <p>Hola usuari@</p>
            <p>Mi contenido Principal</p>
        </main>
    )
}

export default MainContext;
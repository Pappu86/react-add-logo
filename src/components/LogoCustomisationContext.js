import React, { useState } from 'react';
import LogoCustomisation from './LogoCustomisation';

const LogoCustomisationContext = React.createContext();

export const LogoCustomisationProvider = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter => counter + 1);
    }

    const decreaseCounter = () => {
        setCounter(counter => counter - 1);
    }

    return (
        <LogoCustomisationContext.Provider value={
            counter, incrementCounter, decreaseCounter
        }>
            {props.children}
        </LogoCustomisationContext.Provider>
    );

};

export default LogoCustomisationContext;
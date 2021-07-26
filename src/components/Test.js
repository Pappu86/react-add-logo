import React, { useState, useEffect } from 'react';

const Test = () => {
    const [name, setName] = useState("Muhammad");

    const print = (event) => {
        setName("setting name");
        console.log(name);
    };

    useEffect(() => {
        console.log("useEffect:", name);
    }, []);

    return (
        <div>
            <button className="App" onClick={print}>
                hey
            </button>
            <div>{name}</div>
        </div>
    )
}

export default Test

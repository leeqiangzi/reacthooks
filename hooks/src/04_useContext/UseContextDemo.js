import React, {useContext} from 'react';
import {ThemeContext, UseContext} from "../App";

function UseContextDemo() {
    const user = useContext(UseContext);
    const theme = useContext(ThemeContext);
    console.log(user, theme);

    return (
        <div>
            <h2>UseContextDemo</h2>
        </div>
    );
}

export default UseContextDemo;

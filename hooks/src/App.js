import React from 'react';
// import MultipleState from "./02_useState的使用/MultipleState";
import CounterHook from "./01_体验hooks/CounterHook";
import ChangeTitleForClass from "./03_useEffect使用/ChangeTitleForClass";
import ChangeTitleForClassHook from "./03_useEffect使用/ChangeTitleForClassHook";
// import ComplexHookState from "./02_useState的使用/ComplexHookState";


function App() {
    return (
        <div>
            {/*<CounterHook/>*/}
            {/*<MultipleState/>*/}
            {/*{<ComplexHookState/>}*/}
            {/*<ChangeTitleForClass/>*/}
            <ChangeTitleForClassHook/>
        </div>
    );
}

export default App;

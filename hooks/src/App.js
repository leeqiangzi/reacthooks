import React, {useState} from 'react';
// import MultipleState from "./02_useState的使用/MultipleState";
import CounterHook from "./01_体验hooks/CounterHook";
import ChangeTitleForClass from "./03_useEffect使用/ChangeTitleForClass";
import ChangeTitleForClassHook from "./03_useEffect使用/ChangeTitleForClassHook";
import DispatchEffectHook from "./03_useEffect使用/DispatchEffectHook";
import MultiEffectHook from "./03_useEffect使用/MultiEffectHook";
// import ComplexHookState from "./02_useState的使用/ComplexHookState";

function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            {/*<CounterHook/>*/}
            {/*<MultipleState/>*/}
            {/*{<ComplexHookState/>}*/}
            {/*<ChangeTitleForClass/>*/}
            {/*<ChangeTitleForClassHook/>*/}

            {/*{show && <DispatchEffectHook/>}*/}
            {/*<button onClick={e => setShow(!show)}>切换</button>*/}

            <MultiEffectHook/>
        </div>
    );
}

export default App;

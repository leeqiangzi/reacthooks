import React, {useState, createContext} from 'react';
// import MultipleState from "./02_useState的使用/MultipleState";
import CounterHook from "./01_体验hooks/CounterHook";
import ChangeTitleForClass from "./03_useEffect使用/ChangeTitleForClass";
import ChangeTitleForClassHook from "./03_useEffect使用/ChangeTitleForClassHook";
import DispatchEffectHook from "./03_useEffect使用/DispatchEffectHook";
import MultiEffectHook from "./03_useEffect使用/MultiEffectHook";
import UseContextDemo from "./04_useContext/UseContextDemo";
import UseReducer from "./05_useReducer的使用/UseReducer";
import UseCallback01 from "./06_useCallback/UseCallback01";
import UseCallback02 from "./06_useCallback/UseCallback02";
import MemoDemo1 from "./07_useMemo使用/01_useMemo复杂计算应用";
import MemoDemo2 from "./07_useMemo使用/02_useMemo传入子组件应用类型";
// import ComplexHookState from "./02_useState的使用/ComplexHookState";

export const UseContext = createContext();
export const ThemeContext = createContext();



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

            {/*<MultiEffectHook/>*/}

            {/*<UseContext.Provider value={{name: 'qiangzi', age: 18}}>*/}
            {/*    <ThemeContext.Provider value={{fontSize: '30px', color: 'red'}}>*/}
            {/*        <UseContextDemo/>*/}
            {/*    </ThemeContext.Provider>*/}
            {/*</UseContext.Provider>*/}


            {/*<UseReducer/>*/}

            {/*<UseCallback01/>*/}

            {/*<UseCallback02/>*/}

            {/*<MemoDemo1/>*/}
            <MemoDemo2/>
        </div>
    );
}

export default App;

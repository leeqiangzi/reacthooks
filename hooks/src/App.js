import React, {useState, createContext} from 'react';
import UseImperativeHandle from "./09_useImperativeHandle/02_useImperativeHandle用法";
import UseEffect from "./10_useLayoutEffect/01_useEffect的count修改";
import UseLayoutEffect from "./10_useLayoutEffect/02_useLayoutEffect的count修改";
import CustomerLifeHookDemo01 from "./11_自定义Hook/01_认识自定义Hook";
import CustomerContextShareHook from "./11_自定义Hook/02_自定义hook联系-Context共享";
import CustomerScrollPositionHook from "./11_自定义Hook/03_自定义hook联系-获取滚动位置";
import CustomerLocalStorageHook from "./11_自定义Hook/03_自定义hook联系-localStorage";
// import MultipleState from "./02_useState的使用/MultipleState";
// import CounterHook from "./01_体验hooks/CounterHook";
// import ChangeTitleForClass from "./03_useEffect使用/ChangeTitleForClass";
// import ChangeTitleForClassHook from "./03_useEffect使用/ChangeTitleForClassHook";
// import DispatchEffectHook from "./03_useEffect使用/DispatchEffectHook";
// import MultiEffectHook from "./03_useEffect使用/MultiEffectHook";
// import UseContextDemo from "./04_useContext/UseContextDemo";
// import UseReducer from "./05_useReducer的使用/UseReducer";
// import UseCallback01 from "./06_useCallback/UseCallback01";
// import UseCallback02 from "./06_useCallback/UseCallback02";
// import MemoDemo1 from "./07_useMemo使用/01_useMemo复杂计算应用";
// import MemoDemo2 from "./07_useMemo使用/02_useMemo传入子组件应用类型";
// import UseRefDom from "./08_useRef/01_useRefDOM";
// import UseRefDom2 from "./08_useRef/02_useRefDOM引用其他数据";
// import ForwardRefDemo from "./09_useImperativeHandle/01_回顾forwardRef用法";
// import ComplexHookState from "./02_useState的使用/ComplexHookState";

export const UseContext = createContext();
export const ThemeContext = createContext();
export const TokenContext = createContext();

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
            {/*<MemoDemo2/>*/}

            {/*<UseRefDom/>*/}
            {/*<UseRefDom2/>*/}

            {/*<UseImperativeHandle/>*/}

            {/*<UseEffect/>*/}
            {/*<UseLayoutEffect/>*/}

            {/*{show && <CustomerLifeHookDemo01/>}*/}
            {/*<button onClick={e => setShow(!show)}>切换</button>*/}

            {/*<UseContext.Provider value={{name: 'qiangzi', age: '18'}}>*/}
            {/*    <TokenContext.Provider value={{token: 'qqq'}}>*/}
            {/*        <CustomerContextShareHook/>*/}
            {/*    </TokenContext.Provider>*/}
            {/*</UseContext.Provider>*/}


            {/*<CustomerScrollPositionHook/>*/}
            <CustomerLocalStorageHook/>
        </div>
    );
}

export default App;

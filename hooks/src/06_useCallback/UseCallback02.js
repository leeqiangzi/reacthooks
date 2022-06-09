import React, {useState, useCallback, memo} from 'react';

/**
 * useCallback在什么时候使用
 * 使用场景：在将一个子组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理
 * @type {React.NamedExoticComponent<object>}
 */
const HYButton = memo((props) => {
    console.log('HYButton重新渲染' + props.title);
    return <button onClick={props.increment}>HYButton +1</button>
});

/**
 * 性能优化
 * @returns {JSX.Element}
 * @constructor
 */
export default function UseCallback02() {
    console.log('UseCallback02重新渲染');

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    const increment1 = () => {
        console.log('increment1');
        setCount(count + 1);
    }

    const increment2 = useCallback(() => {
        console.log('increment2');
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h2>UseCallback02:{count}</h2>
            {/*<button onClick={increment1}>+1</button>*/}
            {/*<button onClick={increment2}>+1</button>*/}
            <HYButton title={'btn1'} increment={increment1}/>
            <HYButton title={'btn2'} increment={increment2}/>

            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    );
}

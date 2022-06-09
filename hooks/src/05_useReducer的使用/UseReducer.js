import React, {useState, useReducer} from 'react';

// 可以单独抽到一个文件中：（函数逻辑共享，数据不会共享）
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + 1}
            break;
        case 'decrement':
            return {...state, counter: state.counter - 1}
            break;
        default:
            return state;
            break;
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    return (
        <div>
            <h2>当前计数：{state.counter}</h2>
            <button onClick={e => dispatch({type: 'increment'})}>+1</button>
            <button onClick={e => dispatch({type: 'decrement'})}>-1</button>
        </div>
    );
}


// ----------------useState----------------
// export default function UseReducer() {
//     const [counter, setCounter] = useState(0);
//     return (
//         <div>
//             <h2>当前计数：{counter}</h2>
//             <button onClick={e => setCounter(counter + 1)}>+1</button>
//             <button onClick={e => setCounter(counter - 1)}>-1</button>
//         </div>
//     );
// }

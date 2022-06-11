import React, {useState, useMemo} from 'react';

function calcNumber(count) {
    console.log('calcNumber重新计算')
    let total = 0;
    for (let i = 1; i <= count; i++) {
        total += i;
    }
    return total;
}

export default function MemoDemo1() {
    const [count, setCount] = useState(10);
    const [show, setShow] = useState(true);

    // 不使用useMemo
    // const total = calcNumber(count);

    // 使用useMemo
    const total = useMemo(() => {
        return calcNumber(count);
    }, [count]);

    return (
        <div>
            <h2>计算数字的和：{total}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setShow(!show)}>展示</button>
        </div>
    );
}

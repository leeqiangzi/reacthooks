import React, {useState, useEffect} from 'react';

function UseEffect() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) {
            setCount(Math.random());
        }
    }, [count]);


    return (
        <div>
            <h2>数字：{count}</h2>
            <button onClick={e => setCount(0)}>修改数字</button>
        </div>
    );
}

export default UseEffect;

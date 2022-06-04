import React, {useEffect, useState} from 'react';

function DispatchEffectHook() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('订阅');

        return () => {
            console.log('取消订阅');
        }
    }, []);

    return (
        <div>
            <h2>DispatchEffectHook</h2>
            <h2>{counter}</h2>
            <button onClick={e => setCounter(counter + 1)}>+1</button>
        </div>
    );
}

export default DispatchEffectHook;

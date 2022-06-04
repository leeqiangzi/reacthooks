import React, {useEffect, useState} from 'react';

function MultiEffectHook() {
    const [counter, setCounter] = useState(0);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        console.log('修改dom', counter);
    }, [counter]);

    useEffect(() => {
        console.log('订阅事件');
    }, []);

    // 网络请求一般只需要一次，所以添加了第二个参数
    useEffect(() => {
        console.log('网络请求');
    }, []);

    return (
        <div>
            <h2>DispatchEffectHook</h2>
            <h2>{counter}</h2>
            <button onClick={e => setCounter(counter + 1)}>+1</button>

            <h2>{isLogin ? 'codewhy' : '未登录'}</h2>
            <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
        </div>
    );
}

export default MultiEffectHook;

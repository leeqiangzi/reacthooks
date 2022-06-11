import React, {useState, useMemo, memo} from 'react';

const HYInfo = memo((props) => {
    console.log('HYInfo重新渲染');
    return (
            <h2>名字：{props.info.name}，年龄：{props.info.age}</h2>
        );
    }
)

export default function MemoDemo2() {
    console.log('MemoDemo2重新渲染');

    const [show, setShow] = useState(true);

    // const info = {name: 'qiangzi', age: 18};
    const info = useMemo(() => {
        return {name: 'qiangzi', age: 18};
    }, []);

    return (
        <div>
            <HYInfo info={info}/>
            <button onClick={e => setShow(!show)}>展示</button>
        </div>
    );
}

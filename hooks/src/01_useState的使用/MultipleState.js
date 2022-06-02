import React, {useState} from 'react';

export default function MultipleState() {
    const [counter, setCounter] = useState(0);
    const [age, setAge] = useState(18);
    const [friendsList, setFriendsList] = useState(['li', 'zhi', 'qiang']);

    return (
        <div>
            <h2>当前计数：{counter}</h2>
            <h2>我的年龄：{age}</h2>
            <ul>
                {
                    friendsList.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={e => setCounter(counter + 1)}>+1</button>
            <button onClick={e => setCounter(counter - 1)}>-1</button>
        </div>
    );
}

import React, {useState} from 'react';

export default function MultipleState() {
    const [friends, setFriends] = useState(['li', 'lei']);
    const [students, setStudents] = useState([
        {id: 110, name: 'li', age: 18},
        {id: 111, name: 'zhi', age: 19},
        {id: 112, name: 'qiang', age: 20},
    ]);

    function incrementAgeWithIndex(index) {
        const newStudents = [...students];
        newStudents[index].age += 1;
        setStudents(newStudents);
    }

    return (
        <div>
            <h2>好友列表：</h2>
            <ul>
                {
                    friends.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={e => setFriends([...friends, 'tom'])}>添加朋友</button>

            <h2>学生列表</h2>
            <ul>
                {
                    students.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <span>名字：{item.nackCount}, 年龄：{item.age}</span>
                                <button onClick={e => incrementAgeWithIndex(index)}>age+1</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

import React, {useEffect, useState} from 'react';
import useLocalStorage from "../hooks/local-store-hook";

function CustomerLocalStorageHook() {
    const [name, setName] = useLocalStorage('name');
    return (
        <div>
            <h2>CustomerLocalStorageHook: {name}</h2>
            <button onClick={e => setName('qiangzi')}>设置name</button>
        </div>
    );
}

export default CustomerLocalStorageHook;

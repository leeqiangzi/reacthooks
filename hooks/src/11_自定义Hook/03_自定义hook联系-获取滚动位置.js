import React, {useEffect, useState} from 'react';
import useScrollPosition from "../hooks/scroll-position-hook";

function CustomerScrollPositionHook() {
    const scrollPositoon = useScrollPosition();
    return (
        <div style={{padding: '1000px 0'}}>
            <h2 style={{position: 'fixed', left: 0, top: 0}}>CustomerScrollPositionHook：{scrollPositoon}</h2>
        </div>
    );
}

export default CustomerScrollPositionHook;

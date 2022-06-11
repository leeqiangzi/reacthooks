import React, {useRef} from 'react';


function UseRefDom() {
    const titleRef = useRef();

    function changeDom() {
        titleRef.current.innerHTML = 'Hello world';
    }

    return (
        <div>
            <h2 ref={titleRef}>UseRefDom</h2>
            <button onClick={e => changeDom()}>修改dom</button>
        </div>
    );
}

export default UseRefDom;

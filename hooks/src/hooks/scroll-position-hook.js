import React, {useEffect, useState} from 'react';

function useScrollPosition() {
    const [scrollPositoon, setScrollPositoon] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPositoon(window.scrollY);
            console.log(window.scrollY);
        }

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    });

    return scrollPositoon;
}

export default useScrollPosition;

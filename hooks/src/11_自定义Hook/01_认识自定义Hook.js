import React, {useEffect} from 'react';

const Home = (props) => {
    useLoggingLife('Home');
    return <h2>Home</h2>
}

const Profile = (props) => {
    useLoggingLife('Profile');
    return <h2>Profile</h2>
}

function CustomerLifeHookDemo01() {
    useLoggingLife('CustomerLifeHookDemo01');
    return (
        <div>
            <Home/>
            <Profile/>
        </div>
    );
}

/**
 * 自定义hook必须以use开头
 * @param name
 */
function useLoggingLife(name) {
    useEffect(() => {
        console.log(`${name}组件被创建`);
        return () => {
            console.log(`${name}组件被销毁`);
        }
    }, []);
}

export default CustomerLifeHookDemo01;

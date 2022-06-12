import React, {useContext} from 'react';
import useUserContext from "../hooks/use-hook";

function CustomerContextShareHook() {
    const [user, token] = useUserContext();

    console.log(user);
    console.log(token);

    return (
        <div>
            CustomerContextShareHook
        </div>
    );
}

export default CustomerContextShareHook;

import React, {useContext} from 'react';
import {UseContext, TokenContext} from "../App";

function useUserContext() {
    const user = useContext(UseContext);
    const token = useContext(TokenContext);

    return [user, token];
}

export default useUserContext;

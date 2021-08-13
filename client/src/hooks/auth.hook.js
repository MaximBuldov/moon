import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "../redux/actions/user";

const storageName = 'userData'


export const useAuth = () => {
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch();
    const { userId, token } = useSelector(({user}) => user);

    const login = useCallback((jwtToken, id) => {
        dispatch(setUserData(jwtToken, id));

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, []);
    const logout = useCallback(() => {
        dispatch(setUserData(null, null));
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.token) {
            login(data.token, data.userId)
        }
        setReady(true)
    }, [login])

    return {login, logout, token, userId, ready}
}
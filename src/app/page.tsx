'use client'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUsersStart} from "@/app/redux/action";
import {IUsers} from "@/app/redux/actionTypes";

export default function Home() {
    const dispatch = useDispatch();
    const {users}=useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsersStart())
    }, []);
    return (
        <>
<div>
    {users&&users.map((user:IUsers,i) => (
        <div key={i} >
            {user.name}
        </div>
    ))}
</div>
        </>
    );
}

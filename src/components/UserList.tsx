import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Panel from "../UI/Panel/Panel";
import {User} from "../types/user";
import cl from "./UserList.module.css";

const UserList: FC = () => {
    const {users, isLoading, error} = useTypedSelector(state => state.users);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            {users.map((user: User) =>
                <Panel key={user.id}>
                    <div className={cl.user__info}>
                        <span className={cl.user__id}>{user.id}.</span>
                        <span className={cl.user__name}>{user.name}</span>
                        <span className={cl.user__login}>({user.login})</span>
                        </div>
                    <div className={cl.user__contact}>
                        Email: <a href={"mailto:" + user.email}>{user.email}</a>
                    </div>
                    {user.phone &&
                        <div className={cl.user__contact}>
                            Phone: <a href={"tel:" + user.phone}>{user.phone}</a>
                        </div>
                    }
                </Panel>
            )}
        </div>
    );
};

export default UserList;
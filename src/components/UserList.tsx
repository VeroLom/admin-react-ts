import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Panel from "../UI/Panel/Panel";

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
            {users.map(user =>
                <Panel key={user.id}>
                    {user.name}
                </Panel>
            )}
        </div>
    );
};

export default UserList;
import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

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
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        </div>
    );
};

export default UserList;
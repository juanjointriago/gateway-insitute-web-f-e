import { getUserByRole } from '../selectors/getUserByRole';
import { roleInterface } from '../interfaces/global.interfaces';

export const UserRoleList = ({ role }: roleInterface) => {
    const userList = getUserByRole(role);
    return (
        <>
            <h1>Lista de Usuarios - {role}</h1>
            <hr/>
            <ul>
                {
                    userList.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

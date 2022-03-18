//get data from api by axios get users


let users : [
    {id: 0, name: 'el pepe1', role: 'teacher'},
    {id: 1, name: 'el pepe2', role: 'student'},
    {id: 2, name: 'el pepe3', role: 'teacher'},
    {id: 3, name: 'el pepe4', role: 'student'},
    {id: 4, name: 'el pepe5', role: 'teacher'},
] ;

export const getUserByRole = (role: string) => {
    return users.filter(user => user.role === role);
}

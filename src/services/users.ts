import { serviceGet } from "./_factory";

const getAllUsers = () => serviceGet('/users', undefined, undefined)
const getUserById = (id : string) => serviceGet(`users/${id}`, undefined, undefined)

const usersService = {
    getAllUsers,
    getUserById
}

export default usersService
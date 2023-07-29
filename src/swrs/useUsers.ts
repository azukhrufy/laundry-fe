import usersService from "@/services/users";
import {createFetchingSWR} from "./_factory";

export const useUserList = createFetchingSWR({
    key: 'user-list',
    fetcher: usersService.getAllUsers
});

export const useUser = (id: any) => createFetchingSWR({
    key: 'user-by-id',
    fetcher: usersService.getUserById(id)
})

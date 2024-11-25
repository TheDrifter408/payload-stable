import { User } from "@/payload-types";

export const isAdmin = (user:User) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.roleName === 'admin'){ // if the user has a role named 'admin' then this user has access to everything
            return true;
        } else {
            return false;
        }
    }
    return false;
}
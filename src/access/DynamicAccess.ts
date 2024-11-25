import { User } from "@/payload-types";
import { Access } from "payload";
import { isAdmin } from "./isAdmin";

export const canCreate = (resourceName:string):Access<User> => ({ req:{ user }}) => {
    if(user && typeof user.role?.value !== 'number'){
        if(isAdmin(user)){  
            return true;
        } else {
            let permission: boolean | null | undefined = null;
            //Look through Access to extract resouce names and find permission status (either 'true' or 'false')
            const resourceList = user.role?.value.accessTo?.map((access) => {
                if(typeof access.resourceName?.value !== 'number'){
                    permission = access.permissions?.create;
                    return access.resourceName?.value.resourceName;
                }
            });
            // if the resourceList contains the name of the resource being accessed and its permission then the user has access
            if(resourceList?.includes(resourceName) && permission === true){
                return true;
            }

            return false;
        }
    }
    return false;
}

export const canRead = (resourceName:string):Access<User> => ({ req:{ user }}) => {
    if(user && typeof user.role?.value !== 'number'){
        if(isAdmin(user)){
            return true;
        } else {
            let permission: boolean | null | undefined = null;
            //Look through Access to extract resouce names and find permission status (either 'true' or 'false')
            const resourceList = user.role?.value.accessTo?.map((access) => {
                if(typeof access.resourceName?.value !== 'number'){
                    permission = access.permissions?.read;
                    return access.resourceName?.value.resourceName;
                }
            });
            // if the resourceList contains the name of the resource being accessed and its permission then the user has access
            if(resourceList?.includes(resourceName) && permission === true){
                return true;
            }

            return false;
        }
    }
    return false;
}

export const canUpdate = (resourceName:string):Access<User> => ({ req:{ user }}) => {
    if(user && typeof user.role?.value !== 'number'){
        if(isAdmin(user)){
            return true;
        } else {
            let permission: boolean | null | undefined = null;
            //Look through Access to extract resouce names and find permission status (either 'true' or 'false')
            const resourceList = user.role?.value.accessTo?.map((access) => {
                if(typeof access.resourceName?.value !== 'number'){
                    permission = access.permissions?.update;
                    return access.resourceName?.value.resourceName;
                }
            });
            // if the resourceList contains the name of the resource being accessed and its permission then the user has access
            if(resourceList?.includes(resourceName) && permission === true){
                return true;
            }

            return false;
        }
    }
    return false;
}

export const canDelete = (resourceName:string):Access<User> => ({ req:{ user }}) => {
    if(user && typeof user.role?.value !== 'number'){
        if(isAdmin(user)){
            return true;
        } else {
            let permission: boolean | null | undefined = null;
            //Look through Access to extract resouce names and find permission status (either 'true' or 'false')
            const resourceList = user.role?.value.accessTo?.map((access) => {
                if(typeof access.resourceName?.value !== 'number'){
                    permission = access.permissions?.delete;
                    return access.resourceName?.value.resourceName;
                }
            });
            // if the resourceList contains the name of the resource being accessed and its permission then the user has access
            if(resourceList?.includes(resourceName) && permission === true){
                return true;
            }

            return false;
        }
    }
    return false;
}
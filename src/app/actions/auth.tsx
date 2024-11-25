'use server';
import { headers as getHeaders } from 'next/headers';
import config from '@payload-config';
import { getPayload } from 'payload';

export async function signup(currentState:{ message : string } | undefined,formData:FormData){
    const payload = await getPayload({ config });    
    const headers = await getHeaders();
    const { user, permissions } = await payload.auth({ headers });
    if(user){
        return {
            ...currentState,
            message:"Success!"
        }
    }
    return {
        ...currentState,
        message:"Failure!"
    }
}
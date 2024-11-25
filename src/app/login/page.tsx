'use client';
import { useActionState } from "react";
import { signup } from "../actions/auth";
export default function Login(){

    const [formState, formAction,isPending] = useActionState(signup,{
        message: ""
    });

    return(
        <section>
            <h1>Custom Login</h1>
            <form action={formAction}>
                <label htmlFor="userEmail">Email:</label>
                <input type="email" name="userEmail" id="userEmail"/>
                <label htmlFor="userPassword">Password:</label>
                <input type="password" name="userPassword" id="userPassword"/>
                <button type="submit" >Submit</button>
                <p>{isPending ? formState?.message : ''}</p>
            </form>
        </section>
    )
}
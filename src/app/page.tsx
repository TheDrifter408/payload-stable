import { User } from "@/payload-types";
import Link from "next/link";
//importing getPayload and config to initialize payload
import { getPayload, PaginatedDocs } from "payload";
import config from "@payload-config";

export default async function Home(){
    
    //Initializing payload
    const payload = await getPayload({ config });
    //fetching users
    const users:PaginatedDocs<User> = await payload.find({
        collection:'users'
    });
    
    return(
        <section>
            <h1>Home Page</h1>
            <Link href="/login"> Login </Link>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti, nam odit a inventore veritatis totam expedita quod earum in aliquid quo sunt quaerat tempora cum libero accusantium perferendis! Reprehenderit.</p>
            </article>
            <h1>Users</h1>
            <article>
                <ul>
                    {   users ?
                        users.docs.map((user:User) => (
                            <li key={user.id}>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                            </li>
                        )) :
                        <li>No Data</li>
                    }
                </ul>
            </article>
        </section>
    )
}
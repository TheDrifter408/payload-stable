import { User } from "@/payload-types";
import Link from "next/link";
import { PaginatedDocs } from "payload";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function Home(){
    //initializing payloadHMR
    const payload = await getPayload({ config });
    //Using payload to request data 
    const users:PaginatedDocs<User> = await payload.find({
        collection:"users"
    });
    
    return(
        <body>
        <main>
        <section>
            <h1>Home Page</h1>
            <Link href="/login"> Login </Link>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti, nam odit a inventore veritatis totam expedita quod earum in aliquid quo sunt quaerat tempora cum libero accusantium perferendis! Reprehenderit.</p>
            </article>
            <h1>Users</h1>
            <article>
                <ul>
                    {
                        users.docs.map((user:User) => (
                            <li key={user.id}>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                            </li>
                        ))
                    }
                </ul>
            </article>
        </section>
        </main>            
        </body>
    )
}
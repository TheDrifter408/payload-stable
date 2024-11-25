import { User } from "@/payload-types";
import Link from "next/link";
import { PaginatedDocs } from "payload";

export default async function Home(){
    const users:PaginatedDocs<User> = await fetch("http://localhost:3000/my-route").then(res => res.json());
    
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
    )
}
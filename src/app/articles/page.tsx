import { getPayload, PaginatedDocs } from "payload";
import config from "@payload-config";
import { Article } from "@/payload-types";

export default async function Articles(){
    const payload = await getPayload({ config });
    const articles:PaginatedDocs<Article> = await payload.find({
        collection:'article'
    });
    return( 
        <section>
            <h1>Articles</h1>
            {
                articles ? 
                articles.docs.map((article:Article) => (
                    <article key={article.id}>
                        <h4>{article.title}</h4>
                        <p>{article.body}</p>
                    </article>
                )) :
                <p>Error in fetching data</p>
            }
        </section>
    );
}
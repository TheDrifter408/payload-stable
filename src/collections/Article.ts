import { CollectionConfig } from "payload";

export const Article:CollectionConfig = {
    slug:"article",
    fields:[
        {
            name:"title",
            type:"text",
        },
        {
            name:"body",
            type:"text",
        },
        {
            name:"author",
            type:"relationship",
            relationTo:["author"],
        },
        {
            name:"comments",
            type:"relationship",
            relationTo:["comment"],
            hasMany:true
        }
    ]
}
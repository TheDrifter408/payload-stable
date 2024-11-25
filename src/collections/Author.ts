import { CollectionConfig } from "payload";

export const Author:CollectionConfig = {
    slug:"author",
    fields:[
        {
            name:"name",
            type:"text"
        },
        {
            name:"role",
            type:"relationship",
            relationTo:['role']
        }
    ],
}
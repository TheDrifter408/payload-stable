import { canCreate, canRead } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Article:CollectionConfig = {
    slug:"article",
    access:{
        create: canCreate("editor"),
        read: canRead("editor"),
        update: () => true,
        delete: () => true,
    },
    admin:{
        useAsTitle:"title"
    },
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
            relationTo:["users"],
        },
        {
            name:"comments",
            type:"relationship",
            relationTo:["comment"],
            hasMany:true
        }
    ]
}
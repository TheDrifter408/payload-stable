import { CollectionConfig } from "payload";

export const Resource:CollectionConfig = {
    slug:"resource",
    admin:{
        useAsTitle:"resourceName"
    },
    fields:[
        {
            name:"resourceName",
            label:"Resource Name",
            type:"text",
        }
    ]
}
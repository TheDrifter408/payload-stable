import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Resource:CollectionConfig = {
    slug:"resource",
    access: {
        create:canCreate("resource"),
        read: canRead("resource"),
        update: canUpdate("resource"),
        delete: canDelete("resource"),
    },
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
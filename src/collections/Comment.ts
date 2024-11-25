import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Comment:CollectionConfig = {
    slug:"comment",
    access: {
        create: canCreate("comment"),
        read: canRead("comment"),
        update: canUpdate("comment"),
        delete: canDelete("comment")
    },
    fields:[
        {
            name:"title",
            type:"text"
        },
        {
            name:"body",
            type:"text"
        },
        {
            name:"commenter",
            type:"text",
            access:{
                create:() => false,
                read: () => true,
                update: () => false,
            }
        }       
    ],
    hooks : {
        beforeChange:[
            ({ req, operation, data }) => {
                if(operation === 'create') {
                    if(req.user){
                        data.commenter = req.user.email;
                        return data;
                    }
                }
            }
        ]
    }
}
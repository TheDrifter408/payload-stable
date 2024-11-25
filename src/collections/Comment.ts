import { CollectionConfig } from "payload";

export const Comment:CollectionConfig = {
    slug:"comment",
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
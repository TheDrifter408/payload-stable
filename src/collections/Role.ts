import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Role:CollectionConfig = {
    slug:"role",
    access:{
        create:canCreate("role"),
        read:canRead("role"),
        update:canUpdate("role"),
        delete:canDelete("role"),
    },
    admin:{
        useAsTitle:'roleName'
    },
    fields:[
        {
            name:"roleName",
            label:"Role",
            type:"text",
        },
        {
            name:"accessTo",
            type:"array",
            label:"Access To",
            interfaceName:"Access",
            minRows:0,
            maxRows:6,
            fields:[
                {
                    name:"resourceName",
                    label:"Resource",
                    type:"relationship",
                    relationTo:["resource"],
                },
                {
                    name:"permissions",
                    type:"group",
                    interfaceName:"Permissions",
                    fields:[
                        {
                            name:"create",
                            type:"checkbox",
                            defaultValue:false,
                        },
                        {
                            name:"read",
                            type:"checkbox",
                            defaultValue:false,
                        },
                        {
                            name:"update",
                            type:"checkbox",
                            defaultValue:false,
                        },
                        {
                            name:"delete",
                            type:"checkbox",
                            defaultValue:false,
                        },
                    ]
                }
            ]
        }
    ]
}